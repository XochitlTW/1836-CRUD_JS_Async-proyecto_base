const http = new XMLHttpRequest();

//Abrir HTTP (metodo, ur)

//CRUD = Create, Read, Upload, Delate
//Metodos HTTP = POST, GET, PUT/PATCH, DELETE


// "GET"(metodo) obtiene de "ur" (servidor) datos que con "SENT" (metodo) se envia la petición, así JS obtendrá la informaciópn en vez del navegador 
http:open("GET", "http://localhost:3000/perfil");

http.send();

//"ONLOAD" hace que cuando se envie una respuesta se ejecute una función.
http.onload = () =>
{
    const data = http.response;
    console.log(data)
}

