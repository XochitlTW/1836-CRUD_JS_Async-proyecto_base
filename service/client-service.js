const listaCliente = () => fetch("http://localhost:3000/perfil").then((respuesta)=> respuesta.json());

//Esta funcion recibira los datos y los enviara a nuestro servidor.
const crearCliente = (nombre, email) =>
{ //fetch recive primero la dirección http, seguido del metodo el cual usara para enviar la información (Agregamos el "retur" para que pueda compartir la información con el "export")
    return fetch ("http://localhost:3000/perfil", {
        method: "POST",
        // Eeste es el incio de la petición (Una peticion se utiliza para interacutarcon los datos del servidor)
        headers:
        {   //"Content-Type" convierte los datos en un objeto adaptado para que JSON pueda leerlo y, posteriormente, peuda ser leido. "application/json" la función predeterminada para este proceso
            "Content-Type": "application/json"
        },
        //Con JSON.stringify convierte los objetos "nombre" e "email" a texto. El "ID" lo estamos fabricando con una libreria (en este caso es uuid la cual ya referenciamos en nuestro HTML, esto NO en el HEAD si no antes de que termine nuestro BODY como un <script>, este es sacado de internet y se puede buscar en google)la ucual ponemos como función.
        body: JSON.stringify({nombre,email, id: uuid.v4()})
    }
    )
}

const eliminarCliente = (id) =>
{   //en esta funcion de JSON no estamos haciendo una petición de datos, al contrario, estamos pidiendo una acción, por eso tenemos que identificar la acción y lo que se requiere, en este ejemplo se está pidiendo un "DELETE" para eliminar datos del server, no lo estámos reciviendo ni enviando, pero debemos espesificar que datos se deben eliminar, en este caso se usan las backticks para poder agregar el identificador que se busca eliminar como es el "ID" 
    return fetch (`http://localhost:3000/perfil/${id}`, 
    {
        method: "DELETE"
    })
}

export const clientService =
{
    listaCliente,
    crearCliente,
    eliminarCliente
};

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



