function run(){
const country=document.getElementById("country").value;
const city= document.getElementById("city").value;
const form= document.getElementById("apiForm");
const apiKey="ZD6dFseDukSMERN28FbHTg==m0TuolInxxXE8ims";

fetch(`https://api.api-ninjas.com/v1/geocoding?city= ${city}&country=${country}`, {
    mothod:'GET',
    headers:{
        'X-api-Key': apiKey,
        'Content-Type': 'application/json' 
    }
}).then(response=>{
    if(!response.ok){
        throw new Error("Network response did not work");
    }
    return response.json();
})
.then(result =>{
    let latitude=result[0].latitude;
    let longitude=result[0].longitude;

    getWeather(latitude, longitude);
});
}

function getWeather(latitude, longitude){
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, {
    mothod:'GET',
    headers:{
        'Content-Type': 'application/json' 
    }
}).then(response=>{
    if(!response.ok){
        throw new Error("Network response did not work");
    }
    return response.json();
})
.then(result =>{
    console.log(result)
});
}