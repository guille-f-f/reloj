const body = document.querySelector("body");
const containerHour = document.querySelector(".container__hour"); 
const containerDate = document.querySelector(".container__date");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const deleteButton = document.getElementById("delete");

const timer = function startTime() {

    if(containerDate.classList.contains("visibility")){
        containerDate.classList.remove("visibility");
    }
    if(containerHour.classList.contains("visibility")){
        containerHour.classList.remove("visibility");
    }

    let today = new Date(); // Instancia objeto con fecha actual
    let hr = today.getHours(); // Obtener hora
    let min = today.getMinutes(); // Obtener minutos
    let sec = today.getSeconds(); // Obtener segundos
    // Ejecución de función para anteponer 0 a minutos y segundos menores a 10 
    min = checkTime(min);
    sec = checkTime(sec);
    // Ejecución de función para definir formato am/pm (12hs)
    hr = amPm(hr);
    // Ejecución de función para anteponer 0 a la hora menor a 10 
    hr = checkTime(hr);

    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let day = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let getDay = day[today.getDay()]; // Día
    let getNumberDay = today.getDate(); // Número de día 
    let getMonth = months[today.getMonth()]; // Mes
    let year = today.getFullYear(); // Año

    return (containerHour.innerHTML = `${hr}:${min}:${sec}`,
    containerDate.innerHTML = `${getDay}, ${getNumberDay} de ${getMonth} del año ${year}`);
    
}

function checkTime(i) {
    if(i<10){
        i = "0" + i;
    }
    return i;
}

function amPm(i) {
    if(i>12){
        i -= 12;
    }
    return i;
}

function timering(){
    var timerInit = setInterval(timer, 500);
    function endTimer(){
        clearInterval(timerInit);
    };
    function visibilityIteration() {
        clearInterval(timerInit);
        containerDate.classList.add("visibility");
        containerHour.classList.add("visibility");
    };
    stopButton.addEventListener("click", endTimer); 
    deleteButton.addEventListener("click", visibilityIteration);
};

startButton.addEventListener("click", timering);


