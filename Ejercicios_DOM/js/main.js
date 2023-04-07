import countDown from "./cuenta_regresiva.js";
import { MenuNav } from "./menu.js";
import { digitalAlarm, digitalClock } from "./reloj.js";
import { moveCircle, shortCuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded" , (e)=>{
    MenuNav(".nav", ".buttom", ".line", ".nav a");
    digitalClock("#iniciarReloj", "#detenerReloj", ".reloj");
    digitalAlarm("./assets/music.mp3", "#iniciarAlarma", "#detenerAlarma");
    countDown("countDown", "Mayo 12, 2022 21:43:00", "¡Tiempo culminado! 🥳")
})

d.addEventListener("keydown",(e)=>{
    shortCuts(e);
    moveCircle(e, ".box-game", ".circle");
})