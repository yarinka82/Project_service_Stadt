import { useEffect, type ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';

import {
  getFirm,
  getFirmLoadingStatus,
  getFirmError,
} from '../../store/firms/firmsSelectors.ts';

import { fetchFirm } from '../../store/firms/firmsOperations.ts';

import css from './AnbieterPage.module.css';

function AnbieterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Получаем параметры из URL
  const { cityId, categoryId, firmId } = useParams<{
    cityId: string;
    categoryId: string;
    firmId: string;
  }>();

  // Данные выбранной фирмы из store
  const firm = useAppSelector(getFirm);
  const loading = useAppSelector(getFirmLoadingStatus);
  const error = useAppSelector(getFirmError);

  // Загружаем детальную информацию фирмы по firmId из URL
  useEffect(() => {
    if (firmId) {
      dispatch(fetchFirm(firmId));
    }
  }, [dispatch, firmId]);

  // Возврат к списку фирм выбранного города и категории
  const handleBack = () => {
    navigate(`/cities/${cityId}/categories/${categoryId}/firms`);
  };

  // Содержимое страницы в зависимости от состояния запроса
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
    content = <p>Der Anbieter konnte nicht geladen werden.</p>;
  } else if (!firm) {
    content = <p>Anbieter nicht gefunden.</p>;
  } else {
    const address = firm.addresses[0];
    const phone = firm.phoneNumbers[0];
    const email = firm.emails[0];
    const website = firm.websites[0];

    content = (
      <div>
        <div>
          {firm.logo ? (
            <img src={firm.logo} alt={firm.name} />
          ) : (
            <div>Photo firms</div>
          )}
        </div>

        <h1>{firm.name}</h1>

        {address && (
          <p>
            {address.street} {address.houseNr}, {address.zip} {address.city}
          </p>
        )}

        <h2>Profil</h2>

        <p>{firm.description}</p>

        {phone && (
          <div>
            <strong>Telefon</strong>
            <p>{phone.number}</p>
          </div>
        )}

        {email && (
          <div>
            <strong>E-Mail</strong>
            <p>{email.email}</p>
          </div>
        )}

        {website && (
          <div>
            <strong>Website</strong>
            <p>{website.url}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <main>
      <button type="button" onClick={handleBack}>
        Zurück
      </button>

      {content}
    </main>
  );
}

export default AnbieterPage;
