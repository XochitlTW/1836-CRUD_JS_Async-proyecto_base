const listaCliente = () => fetch("http://localhost:3000/perfil").then((respuesta)=> respuesta.json());

export const clientService =
{
    listaCliente
}

//Backticks para perservar nuestro codigo y, con "${}" podemos remarcar qué partes de este necesitamos que neustra funcion extraiga

/*const crearNuevaLinea = (nombre, email) =>
{
    const linea = document.createElement("tr")
    const contenido =
        `<td class="td" data-td>
        ${nombre}
        </td>
        <td>
        ${email}
        </td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
                </li>
                <li>
                <button class="simple-button simple-button--delete" type="button">
                    Eliminar
                </button>
                </li>
            </ul>
        </td>`
    linea.innerHTML = contenido;
    return linea;
}; */

//para enviar y mostrar lo que queremos obtener para el servidor usarmos esta funcion donde localizamos donde estara nuestra tabla y ponemos la "data" del html para poder pasar la informacion de arriba.
//const table = document.querySelector("[data-table]");

//const http = new XMLHttpRequest();

//Abrir HTTP (metodo, ur)

//CRUD = Create, Read, Upload, Delate
//Metodos HTTP = POST, GET, PUT/PATCH, DELETE

//Fetch API, deriba de una funcion que puedes crear de tu navegador, el Fetch necesita una url y un metodo(por defecto toma "GET"), esto para poder regresarnos un "promise"

//const listaCliente = () => fetch("http://localhost:3000/perfil").then((respuesta)=> respuesta.json());

//la forma de arriba es lo mismo que la de abajo, solo que quita mucho ás espacio del código.
/*const listaClientes = () =>
{   //Abre una conección a la URL, generando una promesa.
    return fetch("http://localhost:3000/perfil").then(respuesta =>
    {//Cuando se completa la promesa se resive aquí y se transforma en un formato .json, así podemos obtener el acceso a "data"
        return respuesta.json();
    });
}*/


/*listaCliente().then((data) =>
{
    data.forEach(perfil => 
        {
            const nuevalinea = crearNuevaLinea(perfil.nombre, perfil.email);
            table.appendChild(nuevalinea);
        }
    );
}).catch((error) => alert ("Ocurrio un error"));*/
/*const listaCliente = () =>
{ //La constante  "promise" es igual a lo que nos regresa la instancia "promise" marcandola como una funsión asincrona(el programa no espera por ella y sigue ejecutando nuestro codigo)
    const promise = new Promise((resolve,reject) =>
    {//Generamos el XMLHttp para poder tener la conección con el BackEnd
        const http = new XMLHttpRequest();     
        http.open("GET", "http://localhost:3000/perfil");

        http.send();
        http.onload = () =>
        {//JSON.parse convierte la respuesta del http en objeto, con el "IF" podemos identificar el estatus y saber si hay algun error podrémos saberlo aunque no sabremos cual sería, si no hay problema nos regresara el objeto de la constante "response"
            const response = JSON.parse(http.response);
            if(http.status >= 400)
            {
                reject(response);
            }
            else
            {
                resolve(response)
            }
        }
    });

    return promise; //cuando lo que obtenemos de "response" sale de nuestra "promise" se convierte en nuestra "data"
}*/




/* "GET"(metodo) obtiene de "ur" (servidor) datos que con "SENT" (metodo) se envia la petición, así JS obtendrá la informaciópn en vez del navegador
 
http.open("GET", "http://localhost:3000/perfil");

http.send();

//"ONLOAD" hace que cuando se envie una respuesta se ejecute una función.
http.onload = () =>
{
    //Dado que "data" no es una "array" y no puede ser formulada así, dejamos que JSON pa interprete y deje que sea ejecutada como tal para poder crear el Array de acuerdo con lo que nuestro Front reciba
    const data = JSON.parse(http.response);
    data.forEach(perfil => 
        {
            const nuevalinea = crearNuevaLinea(perfil.nombre, perfil.email);
            table.appendChild(nuevalinea);
        }
    );

    const http2 = new XMLHttpRequest;
    http2.open("GET", "http://localhost:3000/perfil/hoy")
    http2.send();
    http2.onload = () =>
    {
        const data2 = JSON.parse(http2.response);
    } 
} */



