let countryParagraph = document.getElementById("countryParagraph");
let subRegionParagraph = document.getElementById("subRegionParagraph");
let capitalCity = document.getElementById("capitalCity");
let population = document.getElementById("population");
let errorMessage = document.getElementById("errorMessage");
let imgFlag = document.getElementById("imgFlag");
let lang = document.getElementById("input").value;
let button = document.getElementById("button");

function getApi() {
  const inputValue = document.getElementById("input").value;

  countryParagraph.innerText = "";
  subRegionParagraph.innerText = "";
  capitalCity.innerText = "";
  population.innerText = "";
  errorMessage.innerText = "";
  imgFlag.setAttribute("src", null);

  fetch(`https://restcountries.com/v3.1/lang/${inputValue}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      errorMessage.innerText = `Language does not exist!`;
      throw new Error("there is a problem");
    })
    .then((data) => {
      console.log(data);
      data
        .forEach((data) => {
          countryParagraph.innerText += ` Country: ${data.name.common}`;
          subRegionParagraph.innerText += ` Subregion: ${data.subregion}`;
          capitalCity.innerText += ` CapitalCity: ${data.capital}`;
          population.innerText += ` Population: ${data.population} `;
          imgFlag.setAttribute("src", data.flags.png);
        })
        .catch((error) => {
          console.log(error);
        });
    });
}
