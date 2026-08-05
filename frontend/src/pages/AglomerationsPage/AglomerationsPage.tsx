import { useEffect, useState } from "react";

interface Aglomeration {
  id: number;
  name: string;
}

function AglomerationsPage() {
  const [cities, setCities] = useState<Aglomeration[]>([]);
  const [loading, setLoading] = useState(true);

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
    <main>
      <h1>Stadt auswählen</h1>

      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {city.name}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default AglomerationsPage;