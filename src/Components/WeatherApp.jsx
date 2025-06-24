import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({});

  let handleWeatherInfo = (info) => { 
    setWeatherInfo(info);
  }
  return (
    <div className='mainComponent'>
      <SearchBox handleData={handleWeatherInfo} />
      <br />
      <br />
      <InfoBox data={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
