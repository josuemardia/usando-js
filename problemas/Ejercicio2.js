    //problema 5
    let invertirCadena = (cadena)=>{
        // let inversion ='';
        // for (let i = cadena.length-1; i >= 0; i--) {
        //     inversion += cadena[i];
        // }
        return `La cadena invertida de <${cadena}> seria: ${ cadena.split('').reverse().join('')}`;
    }


    console.log(invertirCadena("hola Mundo cruel"));

    //problema 6
    let findRepeticion = (cadena , repetido)=>{
        let vecesRepetidas = cadena.matchAll(repetido);
        return `Las veces repetidas fueron: ${vecesRepetidas}`;
    }

    console.log(findRepeticion("Hola mundo, adios mundo", "mundo" ));


    //problema 7
    let palindromoCadena = (cadena)=>{
        let inverso = "";
        console.log(inverso);
        for (let i = cadena.length-1; i >= 0; i--) {
            inverso += cadena[i];
        }
        console.log(inverso, cadena);
        if (inverso.toUpperCase() == cadena.toUpperCase()) {
            return true;
        }
        else return false;
    }

    console.log(`el resultado si es palindromo es: ${palindromoCadena("Salas")}`);

    //problema 8
    let removePatron = (cadena, regexP) =>{
        let regex = /regexP/
        let a = cadena.matchAll(regex);
        return a;
    }

    console.log(removePatron("hola que tal", "hola"));