
    export function MenuNav(panelNav, buttom, line, menulink){
        const d = document;
        d.addEventListener("click", (e)=>{
            if (e.target.matches(buttom) || e.target.matches(`${buttom} *`)) {
                d.querySelector(line).classList.toggle("active");
                d.querySelector(panelNav).classList.toggle("toggle");
            }

            if (e.target.matches(menulink)) {
                d.querySelector(panelNav).classList.remove("toggle");
                d.querySelector(line).classList.remove("active");
            }
        })
    }