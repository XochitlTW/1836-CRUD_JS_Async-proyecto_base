import { clientService } from "../service/client-service.js";


console.log(clientService)

const crearNuevaLinea = (nombre, email, id) =>
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
                <button class="simple-button simple-button--delete" type="button" id="${id}">
                    Eliminar
                </button>
                </li>
            </ul>
        </td>`
    linea.innerHTML = contenido;
    //Aqui ponos una constante que identifique lel evento sobre el boto de "Eliminar" así, cuandos ea precionado podemos asignarle otra funcion que nos ayude a enviar la acción al servidor, la acción aqui es "DELETE" que elimina los datos de la tabla del formulario de nuestro HTML
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () =>
    {  
        const id = btn.id;
        //aqui con la ayuda de "export" solo asignamos la acción al propio boton, no necesitamos poner nada en la funcion porque la propia acción está en "clientService" pero es necesario ponerla para que se comunique del boton HTTP al servidor.
        clientService.eliminarCliente(id).then ((respuesta) =>
            {

            }).catch((err) => alert ("Ocurrió un error"))
    }
    )
    return linea;
};

const table = document.querySelector("[data-table]");

clientService.listaCliente().then((data) =>
{
    data.forEach(({nombre,email,id}) => 
    
        {
            const nuevalinea = crearNuevaLinea(nombre,email,id);
            table.appendChild(nuevalinea)
        }
    );

}).catch((error) => alert ("Ocurrio un error"));
