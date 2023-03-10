import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) =>
    {//".preventDefault" evita que nuestro evento trabaje como está predeterminado en nuestra página
        evento.preventDefault();
        //".value" nos deja acceder al balor del objeto HTML
        const nombre = document.querySelector("[data-nombre]").value;
        const email = document.querySelector("[data-email]").value;
        //con esta siguiente linea podemos empezar a recibir los datos como texto y pasarlos a nuestro servidor como un nuevo "cliente"
        clientService.crearCliente(nombre,email).then (() =>
        {   //esta propiedad evalua la URL dada y te puede ayduar a llevar al cliente a una nueva pagina, en este caso lleva a una donde nos dice que nuestro registro ha sido exitoso
            window.location.href = '/screens/registro_completado.html';
        }
        );
    }
);

