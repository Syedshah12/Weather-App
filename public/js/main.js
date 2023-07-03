
const inp=document.getElementById('inp');
const card=document.getElementById('card');
const btn=document.getElementById('btn');

const myFunction=async()=>{
    try {
        let cityName=inp.value;
        console.log(cityName);
 if(cityName === ''){
 card.innerText=`City Name can Not be Empty`
 }
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9224a0c995msh1bcec0199dea906p1161aejsnd72f61d726a0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
        const response = await fetch(url, options);
        const result = await response.json();
        const country=document.getElementById('country').innerText=cityName;
        const humidity=document.getElementById('hum').innerText=result.humidity;
        const temp=document.getElementById('temp').innerHTML=result.temp + `&#8451`;
        const clouds=document.getElementById('weather').innerHTML=result.cloud_pct+ `&#37`
        const windSpeed=document.getElementById('city').innerText=result.wind_speed +`Km/hr`;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}



//Listening Event
btn.addEventListener('click',myFunction);