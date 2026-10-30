import { useEffect, type ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';

import {
  getFirm,
  getFirmLoadingStatus,
  getFirmError,
} from '../../store/firms/firmsSelectors.ts';

import { fetchFirm } from '../../store/firms/firmsOperations.ts';

import { USE_MOCK } from '../../api/api.ts';

import { ANBIETER_ICONS, CITY_MAPS } from '../../constants/anbieterLabels';

import { getOpeningStatus } from '../../utils/openingHours';

import AnbieterHero from '../../components/AnbieterHero/AnbieterHero';
import OpeningStatusBadge from '../../components/OpeningStatusBadge/OpeningStatusBadge';
import AnbieterStats from '../../components/AnbieterStats/AnbieterStats';
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import LocationSection from '../../components/LocationSection/LocationSection';
import ContactList from '../../components/ContactList/ContactList';
import FeaturesList from '../../components/FeaturesList/FeaturesList';
import ContactBar from '../../components/ContactBar/ContactBar';

import css from './AnbieterPage.module.css';

function AnbieterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { cityId, categoryId, firmId } = useParams<{
    cityId: string;
    categoryId: string;
    firmId: string;
  }>();

  const firm = useAppSelector(getFirm);
  const loading = useAppSelector(getFirmLoadingStatus);
  const error = useAppSelector(getFirmError);

  useEffect(() => {
    if (!firmId) {
      return;
    }

    // Запоминаем запрос, чтобы отменить его, если пользователь уйдёт со страницы
    // или откроет другую фирму. Тогда поздний ответ не перезапишет новую фирму
    const request = dispatch(fetchFirm(firmId));

    return () => {
      request.abort();
    };
  }, [dispatch, firmId]);

  const handleBack = () => {
    navigate(`/cities/${cityId}/categories/${categoryId}/firms`);
  };

  let content: ReactNode;

  if (loading) {
    content = (
      <div className={css.loaderWrapper}>
        <div
          className={css.spinner}
          role="status"
          aria-label="Anbieter wird geladen"
        />
      </div>
    );
  } else if (error) {
    content = (
      <p className={css.message}>Der Anbieter konnte nicht geladen werden.</p>
    );
  } else if (!firm) {
    content = <p className={css.message}>Anbieter nicht gefunden.</p>;
  } else {
    const address = firm.addresses[0];
    const phone = firm.phoneNumbers[0];
    const email = firm.emails[0];
    const website = firm.websites[0];

    const addressText = address
      ? [
          [address.street, address.houseNr].filter(Boolean).join(' '),
          address.additionalAdrsInfo,
          [address.zip, address.city].filter(Boolean).join(' '),
        ]
          .filter(Boolean)
          .join(', ')
      : '';

    const status = getOpeningStatus(firm.openingHours, new Date());

    // ДЕМО: скриншот центра выбранного города.
    const mapImage =
      USE_MOCK && address ? CITY_MAPS[address.aglomerationId] : undefined;

    content = (
      <>
        <AnbieterHero photo={firm.logo} onBack={handleBack} />

        {/* Шапка отдельно от разделов: на десктопе она встаёт над фото (order: -1) */}
        <header className={css.summary}>
          <div className={css.badge}>
            <OpeningStatusBadge status={status} />
          </div>

          <h1 className={css.title}>{firm.name}</h1>

          {address && (
            <p className={css.address}>
              <img src={ANBIETER_ICONS.mapPin} width={13} height={13} alt="" />

              <span>{addressText}</span>
            </p>
          )}

          <div className={css.stats}>
            <AnbieterStats
              rating={firm.rating}
              reviewCount={firm.reviewCount}
              priceFrom={firm.priceFrom}
            />
          </div>

          {firm.paymentMethods && firm.paymentMethods.length > 0 && (
            <div className={css.payments}>
              <PaymentMethods methods={firm.paymentMethods} />
            </div>
          )}
        </header>

        <div className={css.body}>
          {/* На мобильном и планшете обёртки "растворяются" (display: contents),
              и порядок разделов задают grid-area компонентов.
              На десктопе это две независимые колонки */}
          <div className={css.mainColumn}>
            <ProfileSection description={firm.description} />

            <ContactList
              email={email?.email}
              website={website?.url}
              phone={phone?.number}
            />
          </div>

          <div className={css.sideColumn}>
            <OpeningHours openingHours={firm.openingHours} />

            {address && (
              <LocationSection
                address={addressText}
                city={address.city}
                mapImage={mapImage}
              />
            )}

            <FeaturesList features={firm.features} languages={firm.languages} />
          </div>
        </div>

        <ContactBar href={website?.url} />
      </>
    );
  }

  return (
    <main className={loading || error || !firm ? css.state : css.page}>
      {content}
    </main>
  );
}

export default AnbieterPage;
