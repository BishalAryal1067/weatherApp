<template>
  <div class="main-container">
    <input type="text" name="searchQuery" v-model="searchQuery" placeholder="Enter city/state">

    <div class="display-cities" v-if="searchQuery.length > 0">
      <ul v-if="cities.length > 0">
        <li v-for="city in cities" :key="city.id" @click="getWeather(city.coordinates.latitude,city.coordinates.longitude)">
          {{ city.name }}, {{ city.adminDivision1.name }}, {{ city.country.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

let searchQuery = ref('');
let lazySearchTimeout = ref(null);

//variables and options for geocoding
let cities, geocodingAPIUrl;
const geocodingAPIOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0689d26cdcmsh5c6a42d9c10658cp1ab743jsna5dfa36f12e7',
    'X-RapidAPI-Host': 'spott.p.rapidapi.com'
  }
}

//function to lazy-search cities 
const getCities = (query) => {
  clearTimeout(lazySearchTimeout.value);
  lazySearchTimeout.value = setTimeout(async () => {
    if (query.trim() !== null || query.trim() !== undefined || query.trim() !== '') {
      const response = await fetch(geocodingAPIUrl, geocodingAPIOptions);
      const data = await response.text();
      cities = JSON.parse(data);
      console.log(cities);
    }
    else {
      cities = null;
    }
  }, 10);
}

//watching changes in searchQuery and updating url based on that
watch(searchQuery, newValue => {
  geocodingAPIUrl = `https://spott.p.rapidapi.com/places?q=${newValue}&limit=3&skip=0&type=CITY`;
  try{
    getCities(newValue);
  }
  catch(err){
    console.log(err);
  }
})


//variables, API_KEY anf options
let weatherAPI_key='iov3labwaz9nvv3ww79nvbz16uz68qxeblcdigi8';
let currentWeatherURL;
let temperature, weather;

let getWeather = async (lat,long)=>{
  currentWeatherURL =`https://www.meteosource.com/api/v1/free/point?lat=${lat}&lon=${long}&sections=all&language=en&units=metric&key=${weatherAPI_key}`;
  const response = await fetch(currentWeatherURL);
  const result = await response.json();
  temperature = result.temperature;
  weather = result.summary;
}




</script>


<style>
@import url('../assets/main.css');

.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  gap: .95rem;
}

.main-container>input {
  min-width: 25rem;
  font-size: 1.1rem;
  box-sizing: border-box;
  padding: .75rem 1.5rem;
  outline: transparent;
  border: none;
  border-radius: .25rem;
  font-family: var(--base-font);
}

.display-cities{
  background-color: rgba(0, 0, 0, 0.332);
  min-width: 25rem;
}

.display-cities ul{
  padding:.35rem .75rem;
}

.display-cities ul li{
  list-style: none;
  color: white;
  font-family: var(--base-font);
  cursor: pointer;
}

.display-cities ul li:hover{
  text-decoration: underline;
}

</style>