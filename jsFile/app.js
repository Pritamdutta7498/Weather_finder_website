const API_KEY = `bbf0bfb8d940110cad9f6c5d05973417`;
//load data
loadData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};
const displayData = data => {
//   console.log(data);
  // console.log(data.main.temp);
  // console.log(data.weather[0].main);
//   const temperature = document.getElementById("temperature");
//   temperature.innerText = data.main.temp;
//   const leads = document.getElementById("lead");
//   leads.innerText = data.weather[0].main;



//set inner text for short cut(another option)
  setInnerTextById('temperature', data.main.temp);
  setInnerTextById('condition', data.weather[0].main);
};

const setInnerTextById = (id, text) => {
  let currentTemp = document.getElementById(id);
  currentTemp.innerText = text;
};

document.getElementById("search-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const city = inputField.value;
  inputField.value = "";
  //    console.log(city);
  const cityName = document.getElementById("city-name");
  cityName.innerText = city;
  const symbol = document.getElementById('degree-symble');
  if(symbol.innerText !== null){
    symbol.classList.remove('d-none');
  }

  //    findByCityName(city)
  loadData(city);
});
