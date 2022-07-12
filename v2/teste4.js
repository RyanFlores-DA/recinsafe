function main() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=recife&appid=061f8b2693bdec8c084095b022fadb06&units=metric").then(response => response.json()
    .then(data => console.log(data)))
    //users = JSON.parse(data);
    console.log(data);
}

main();