//Variabels
let countryParagraph = document.getElementById("countryParagraph");
let subRegionParagraph = document.getElementById("subRegionParagraph");
let capitalCity = document.getElementById("capitalCity");
let population = document.getElementById("population");
let imgFlag = document.getElementById("imgFlag");
let lang = document.getElementById("input").value;
let button = document.getElementById("button");

//Function that executes everytime user presses the 'Search' button.
function getApi() {
  const inputValue = document.getElementById("input").value;

  //Reseting the innerText after every 'Search'.
  countryParagraph.innerText = "";
  subRegionParagraph.innerText = "";
  capitalCity.innerText = "";
  population.innerText = "";

  fetch(`https://restcountries.com/v3.1/lang/${inputValue}`).then((res) => {
    res.json().then((data) => {
      console.log(data);
      data.forEach((data) => {
        countryParagraph.innerText += ` Country: ${data.name.common}`;
        subRegionParagraph.innerText += ` Subregion: ${data.subregion}`;
        capitalCity.innerText += ` CapitalCity: ${data.capital}`;
        population.innerText += ` Population: ${data.population} `;
        imgFlag.setAttribute("src", data.flags.png);
      });
    });
  });
}
