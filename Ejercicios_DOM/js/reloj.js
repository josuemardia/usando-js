    const d = document;
    export function digitalClock(btnPlay, btnStop,clock){
        let timer;
       d.addEventListener("click", (e)=>{
           if (e.target.matches(btnPlay)) {
               timer = setInterval(() => {
                   let clockHour = new Date().toLocaleTimeString();
                   d.querySelector(clock).innerHTML =`<h2>${clockHour}</h2>`
               }, 1000);
               e.target.disabled = true;
           }

           if (e.target.matches(btnStop)) {
               clearInterval(timer);
               d.querySelector(btnPlay).disabled = false;
           }
       })
    }

    export function digitalAlarm(soundPath, btnPlay, btnStop){
       const $alarm = d.createElement("audio");
       $alarm.src = soundPath;
       let timer;
       d.addEventListener("click", (e)=>{
           
           if (e.target.matches(btnPlay)) {
               let time = prompt("Ingrese el segundo a configurar"),
               timer = setTimeout(() => {
                   $alarm.play();
                   e.target.disabled = true;
               }, time*1000);
           };

           if (e.target.matches(btnStop)) {
               clearTimeout(timer)
               $alarm.pause();
               $alarm.currentTime = 0;
               d.querySelector(btnPlay).disabled = false;
           }
       })
    }