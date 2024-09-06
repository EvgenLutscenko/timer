let time = document.querySelectorAll('.days');

const date = new Date(prompt("enter date in the same format: '2024-09-06T13:45:00'", '2024-09-06T13:45:00'));

setInterval(() => {
    const interval = date - Date.now();

    const totalSeconds = Math.floor(interval / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    time[0].textContent = hours;
    time[1].textContent = minutes;
    time[2].textContent = seconds;
}, 1000);
