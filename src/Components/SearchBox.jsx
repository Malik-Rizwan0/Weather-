import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function SearchBox({handleData}) {
    let API_KEY = "b903aa3e52ec42a7374ecc8c59515db0"
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const [city, setCity] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      setCity("");
      if (city) {
        fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            let result = {
              name: data.name,
              temp: data.main.temp,
              humidity: data.main.humidity,
              pressure: data.main.pressure,
              windSpeed: data.wind.speed,
              description: data.weather[0].description,
              feelLike : data.main.feels_like

            }
            handleData(result);
          })
          .catch(error => alert(`City not found `));
      } else {
        alert("Please enter a city name");
      }
    }
    const handleChange = (e) => {
      setCity(e.target.value);
    }
   

  return (
    <>
      <form onSubmit={handleSubmit} className='searchBox'>
        <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} />
        <br />
        <br />
         <Button variant="contained" size="small" startIcon={<SearchIcon />} type="submit">
          Search
        </Button>
      </form>

    </>    
  )
}

export default SearchBox
