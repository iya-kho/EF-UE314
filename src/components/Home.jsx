import { useEffect, useState } from 'react';
import '../styles/Home.scss';

export function Home() {
  const [weather, setWeather] = useState([]);
  
  useEffect(() => {
    fetch('https://prevision-meteo.ch/services/json/lyon')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeather(data);
        console.log(weather);
      });
  }, []);

  return (
    <div>
      <h2>Météo</h2>
      <div className='flex'>
        <span>{weather.city_info.name}</span>
      </div>
    </div>
  );
}

