const key="0089c616f1025e3d0b976af89aff6804";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox=document.querySelector(".searchs input");
let searchBtn=document.querySelector(".searchs button");
async function checkweather(city){
    const response=await fetch(url +city+`&appid=${key}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humid").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
});
