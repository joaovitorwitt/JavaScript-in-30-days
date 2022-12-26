const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hours-hand');

const time = () => {
    const date = new Date();

    let seconds = date.getSeconds();
    let secondsDegree = (((seconds / 60) * 360) + 90)

    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    

    let minutes = date.getMinutes();
    let minutesDegre = (((minutes / 60) *360) + 90)

    minutesHand.style.transform = `rotate(${minutesDegre}deg)`;

    let hours = date.getHours();
    let hoursDegree = (((hours / 12) * 360) + 90);


    hoursHand.style.transform = `rotate(${hoursDegree}deg)` 
}

setInterval(time, 1000);