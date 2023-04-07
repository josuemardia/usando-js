    const d= document;
    export default function countDown(id, limitDate, finalMessage){
        const $countdown = d.getElementById(id);
        const countdownDate = new Date(limitDate).getTime();
        let countdownTempo = setInterval(() => {
            let now = new Date().getTime(),
            limitTime = countdownDate - now,
            day = Math.floor(limitTime/(1000*60*60*24)), 
            hours = ("0" + Math.floor((limitTime % (1000*60*60*24))/1000*60*60)).slice(-2),
            minutes = Math.floor((limitTime % (1000*60*60))/1000*60),
            seconds = Math.floor((limitTime % (1000*60))/1000);

            $countdown.innerHTML = `<h3>Faltan: ${day} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos</h3>`;
           
        }, 1000);

        if (limitTime == 0) {
            clearInterval(countdownTempo);
        }
    }