
    const d = document;
    export function shortCuts(e){
        console.log(e.key);
        console.log(e.keyCode);
        if (e.key === "a" && e.altKey) {
            alert("Haz usado un atajo personalizado de teclado para este sitio web");
        }
    }

    let x = 0 , y = 0;
    export function moveCircle(e, panelGame, circle){
        const $ball = d.querySelector(circle);
        const $panelGame = d.querySelector(panelGame);
        const limitsCircle = $ball.getBoundingClientRect(),
        limitsPanelGame = $panelGame.getBoundingClientRect();
        
        switch (e.keyCode) {
            case 37: //left
                
                if (limitsCircle.left > limitsPanelGame.left){ 
                    e.preventDefault();
                    x--;
                };
                break;
            case 39: //right   
                e.preventDefault();
                if (limitsCircle.right < limitsPanelGame.right) {
                    e.preventDefault();
                    x++;
                }
                break;
            case 38: // up
                if (limitsCircle.top > limitsPanelGame.top) {
                    e.preventDefault();
                    y--;
                }
                break;
            
            case 40:
                if (limitsCircle.bottom < limitsPanelGame.bottom) {
                    e.preventDefault(); //down
                    y++;
                }
            default:
                break;
        }

        $ball.style.transform = `translate(${x*10}px , ${y*10}px)`;
    }