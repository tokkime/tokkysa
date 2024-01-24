function updateTimer() {
    const targetDate = new Date("2023-11-22T16:46:00");
    const currentDate = new Date();

    const timeDifference = currentDate - targetDate;

    const seconds = Math.floor(timeDifference / 1000) % 60;
    const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    
    const formattedDate = currentDate.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

    document.getElementById("timer").innerHTML = `Hoje é ${currentDayOfWeek}, ${formattedDate}. <br>${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos.`;
}

setInterval(updateTimer, 1000);
updateTimer();
