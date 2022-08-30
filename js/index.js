
//fetch para consumo de Api.
document.getElementById("buscador").addEventListener("click", () =>{ 

    let ciudad = document.getElementById("ciudad").value;
    const key = 'd65d94773c3c15744775574b4298d8d4';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${key}&units=metric`
    fetch(api)
    .then(response => response.json())
    .then(data =>{
       //manipulacion del DOM.
        console.log(data)
        document.getElementById("texto-ciudad").innerHTML = `${data.name}`
        document.getElementById("temperatura").innerHTML = (`${Math.round(data.main.temp)}`) +`° C`
        document.getElementById("descripcion-del-clima").innerHTML = `${data.weather[0].description}`
        document.getElementById("ciudad").value = ""
        document.getElementById("humedad").innerHTML = `Humedad ${data.main.humidity} %`
        document.getElementById("viento").innerHTML = `Viento ${data.wind.speed}`+` m/s`
        document.querySelector(".icono").src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png"
         
        
    })
    
    
    
    .catch((error) => console.log(error))
    
    
})

