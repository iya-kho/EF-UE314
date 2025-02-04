import { useEffect, useState } from 'react';
import '../styles/Home.scss';

export function Home() {
  const [weather, setWeather] = useState({});
  
  useEffect(() => {
    fetch('https://prevision-meteo.ch/services/json/lyon')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  }, []);

  return (
    <div>
      <h2>Météo</h2>
      <div className='flex'>
        <span>{weather.city_info?.name}</span>
        <span>{weather.city_info?.country}</span>
      </div>
    </div>
  );
}
