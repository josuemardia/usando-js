   //problema 1
   function NumeroCaracteres (cadena){
        
        if (typeof cadena === 'string') {
            return `el numero de caracteres es ${cadena.length}`;
        } else {
            return console.log(`el input : ${cadena} no es una cadena`);
        }
    }
    console.log(NumeroCaracteres("hola"));


    //problema 2
    function RecortarCadena(cadena, numcaracter){
    let cadenaRecortada = "";
       for (let i = 0; i < numcaracter; i++) {
           cadenaRecortada += cadena[i];
       }
       return cadenaRecortada;
    }

    console.log(`La cadena recortada es: ${RecortarCadena("hola que hace", 4)}`);

    //problema 3
    function SepararCadena(cadena, separador){
        let vector = cadena.split(separador);
        vector.forEach(element => {
            console.log(element);
        });
    }

    console.log(SepararCadena("hola que hace", ' '));

    //problema 4
    let repetirCadena = (cadena, veces)=>{
        for (let i = 0; i < veces; i++) {
            console.log(cadena);
        }
    }

    console.log(repetirCadena("Hola que hace", 4));
