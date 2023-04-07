
//Usando XMLHttpRequest para las peticiones users
(()=>{
    let d = document;
    const xhr = new XMLHttpRequest();
    const $xhr=d.getElementById("xhr");
    const $fragment = d.createDocumentFragment();
    
    xhr.addEventListener("readystatechange", (e)=>{
        if (xhr.readyState != 4) return 
        if (xhr.status >= 200 & xhr.status <300) {
            console.log("ÉXITO!")
            let json = JSON.parse(xhr.responseText)
            console.log(json);
            json.forEach(el => {
                const $li = d.createElement('li');
                $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        }
        else{
            console.log("Hubo un error en la peticion"); 
            let message = xhr.statusText || "Ocurrió un error banda"
            $xhr.innerHTML = `Hubo un error ${xhr.status}; ${message}`
        }
        console.log(xhr);
    });
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
})();

//Usando XMLHttpRequest para peticiones de photos
/* (()=>{
    let d = document;
    const xhr = new XMLHttpRequest();
    const $div=d.getElementById("xhr2");
    const $fragment = d.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e)=>{
        if (xhr.readyState != 4) return 
        if (xhr.status >= 200 & xhr.status <300) {
            console.log("EXITO!")
            let json = JSON.parse(xhr.responseText)
            console.log(json);
            json.forEach(el => {
                const $img = d.createElement('img');
                $img.setAttribute('src', el.thumbnailUrl)
                $fragment.appendChild($img);
            });
            $div.appendChild($fragment);
        }
        else{
            console.log("Hubo un error en la peticion"); 
            let message = xhr.statusText || "Ocurrió un error banda";
            $div.innerHTML = `Hubo un error ${xhr.status}; ${message}`;
        }
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
    xhr.send();
})()
 */
//Usando Fetch para las peticiones

(()=>{
    let d = document;
    const $fecthOl=d.getElementById("FetchOl");
    const $fragment = d.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response);
    })
    .catch(()=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("jejeje hola que hace, esto sale si por que si");
    });


})()
