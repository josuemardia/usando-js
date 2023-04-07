    //Ejercicio 9
    let numAleatorio = ()=>{
        let random;
        do {
            //random = Math.random()*600;
            random = Math.round(Math.random()*600);
        } while (random < 501);

        return random;
    }

    console.log(`El número random es: ${numAleatorio()}`);


    //Ejercicio 10
    let numCapicua = (numero="")=>{
        let inverso ="";
        if (!numero) {
            console.warn('No ha ingresado ningun numero');
        } else
            if(typeof numero === "string") {
                for (let i = numero.length - 1; i >= 0; i--) {
                    inverso += numero[i]; 
                }

                (numero == inverso) 
                ? console.log(`El número ${numero} si es capicúa --> ${inverso}`)
                : console.log(`El numero ${numero} no es capicúa --> ${inverso}`);
            }   
    }
    numCapicua("2202");

    //Ejercicio 11
    factorial = (numero) =>{
        let resultado = 1;

        for (let i = numero; i > 0; i--) {
            resultado *= i;
        }

        console.log(`El factorial de ${numero} es : ${resultado}`);
    }

    factorial(4);

    //Ejercicio 12
    let numPrimo = (numero ="") =>{
        let divisible = true;
        if (typeof numero != 'number'){
            return console.warn("No ha ingresado ningun número")
        } 
        if (numero == 1 || numero == 0) {
            return console.error(`El número ${numero} no debe ser 1 o 0`);
        }
        if (Math.sign(numero) === -1) {
            return console.error(`El número ${numero} no debe ser negativo`);
        }

        for (let i = 2; i < numero; i++) {
            if (numero%i === 0) {
                divisible = false;
                break;
            }
        }
        return (divisible) 
        ? console.log(`El numero ${numero} es primo :${true}`)
        : console.log(`El numero ${numero} no es primo :${false}`);
    }
    numPrimo(9)
    //Ejercicio 13 
    let numImpar = (numero="") => {
        (!numero) ? console.warn("No ha ingresado ningun numero")
        : (numero%2 == 0)
        ? console.log(`El numero ${numero} no es un numero impar`)
        : console.log(`El número ${numero} si es un numero impar`);
    }

    numImpar(29);

    //Ejercicio 14
    //(0 °C × 9/5) + 32 --> a farenheit
    let convertirGrados = (grado="", formato="") => {
        if (typeof grado == "" || typeof formato == "") {
            return console.warn("Escriba todos los parametros por favor");
        }
        if (typeof grado != "number") {
            return console.error(`El '${grado}' no es un numero`);
        }
        if (typeof formato != "string") {
            return console.error(`El '${formato}' no es formato de grado`);
        }
        if (formato == "F") {
            return console.log(`${grado} C° seria ${(grado * 9/5) + 32} F°`);
            // return grade = (grado * 9/5) + 32;
        }
        else if (formato == "C") {
            return console.log(`${grado} F° seria ${(grado -32)*5/9} C°`);
            //return grade = grado * (27 / 9);
        }
    }

    convertirGrados(5, "F");


