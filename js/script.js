
const launchDate = new Date("Jan 15, 2025 00:00:00").getTime();
let timer

const countdown = () => {
  const now = new Date().getTime();
  const gap = launchDate - now;
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);
  
  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
  if (gap <= 0) {
    clearInterval(timer); // Hentikan timer
    // Opsional: Tampilkan pesan "Launch Time!"
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
};


timer = setInterval(countdown,1000);
console.log(timer)


