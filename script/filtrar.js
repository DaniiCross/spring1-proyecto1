 //import { pintarPropiedad } from "./showData.js"
 
 export const llenarSelect = async ()=> {
    let opciones = ['Tipo','Casa','Familiar','Cabaña','Casa de playa','Apartamento'];
    let select =document.querySelector(".form-selector");

        for(let i=0; i < opciones.length; i++){
            let option = document.createElement("option"); 
            option.innerHTML = opciones[i]; //metemos el texto en la opcion
            select.appendChild (option); //meter la opcion en el selec
    }
}

//let btnSelector = document.querySelector ('butn');
//let tipoSeletor = document.querySelector('form-selector').value

 /*function filtrar async ()=>{
     if(tipoSeletor === 'Casa'){
        console.log("casa")
     }
 }*/


