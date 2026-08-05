import { useEffect, useState } from "react";
import css from "./AglomerationsPage.module.css";
import flagFrankfurt from "../../assets/png/flagge_Frankfurt.png";
import flagMunchen from "../../assets/png/flagge_Munchen.png";
import flagWurzburg from "../../assets/png/flagge_Wurzburg.png";


interface Aglomeration {
  id: number;
  name: string;
}

function AglomerationsPage() {
  const [cities, setCities] = useState<Aglomeration[]>([]);
  const [loading, setLoading] = useState(true);
  const flags = [flagFrankfurt, flagMunchen, flagWurzburg]

  useEffect(() => {
    async function fetchCities() {
      try {
        const response = await fetch("/aglomerations");

        const result = await response.json();

        setCities(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className={css.page}>
      <div>
        <h1 className={css.title}>Stadt auswählen</h1>

        <ul className={css.cityList}>
          {cities.map((city, index) => (
            <li key={city.id}>
              <button className={css.cityButton}>
                <img src={flags[index]} alt="" className={css.flag}/>
                {city.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default AglomerationsPage;