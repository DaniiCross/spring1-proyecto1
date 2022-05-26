import {getData} from "./getData.js"
import { pintarPropiedad } from "./showData.js"
import {cardAsesores} from"./cardAsesores.js"
import {llenarSelect} from "./filtrar.js"

const propiedades = await getData ('https://api-casas.herokuapp.com/propiedades');
const asesores = await getData ('https://api-casas.herokuapp.com/asesores');


let parking = document.getElementById("parking-space");
let pool = document.getElementById("swimming-pool");
let security = document.getElementById("security");
let salud = document.getElementById("salud");
let king = document.getElementById("king");
let inteligente = document.getElementById('inteligente');
let kids = document.getElementById("kids");



let pintar = document.getElementById("pintar");
let pintarCardAses = document.getElementById('cards-agentes');
let traerTodas = document.getElementById('propiedadesTodas');

llenarSelect();

if (document.readyState !== 'loading') {
    cardAsesores(asesores,pintarCardAses);
} else {
    document.addEventListener('DOMContentLoaded', function () {
        cardAsesores(asesores,pintarCardAses);
    });
}

traerTodas.addEventListener('click', ()=>{
    pintarPropiedad(propiedades,pintar);

})





parking.addEventListener('click', async()=>{
    const propiedadesConParqueadero = []
    propiedades.forEach(propiedad => {
        if(propiedad["parqueadero"]==="Si"){
            propiedadesConParqueadero.push(propiedad);
        }
    });
    pintarPropiedad(propiedadesConParqueadero, pintar)
});

pool.addEventListener('click', async()=>{
    const propiedadesConPiscina = []
    propiedades.forEach(propiedad => {
        if(propiedad["piscina"]==="Si"){
            propiedadesConPiscina.push(propiedad);
        }
    });
    pintarPropiedad(propiedadesConPiscina, pintar)
});

security.addEventListener('click', async()=>{
    const propiedadesConSeguridad = []
    propiedades.forEach(propiedad => {
        if(propiedad["seguridadPrivada"]==="Si"){
            propiedadesConSeguridad.push(propiedad);
        }
    });
    pintarPropiedad(propiedadesConSeguridad, pintar)
});

salud.addEventListener('click', async()=>{
    const propiedadesConSalud = []
    propiedades.forEach(propiedad => {
        if(propiedad["centroMedico"]==="Si"){
            propiedadesConSalud.push(propiedad);
        }
    });
    pintarPropiedad(propiedadesConSalud, pintar)
});

library.addEventListener('click', async()=>{
    const propiedadesConLibreria = []
    propiedades.forEach(propiedad => {
        if(propiedad["libreria"]==="Si"){
            propiedadesConLibreria.push(propiedad);
        }
    });
    pintarPropiedad(propiedadesConLibreria, pintar)
});

king.addEventListener('click', async()=>{
    const propiedadesConKing = []
    propiedades.forEach(propiedad => {
        if(propiedad["camaKingSize"]==="Si"){
            propiedadesConKing.push(propiedad);
        }
    });
    pintarPropiedad(propiedadesConKing, pintar)
});

inteligente.addEventListener('click', async()=>{
    const propiedadesinteligente = []
    propiedades.forEach(propiedad => {
        if(propiedad["inteligente"]==="Si"){
            propiedadesinteligente.push(propiedad);
        }
    });
    pintarPropiedad(propiedadesinteligente, pintar)
});

kids.addEventListener('click', async()=>{
    const propiedadesConKids = []
    propiedades.forEach(propiedad => {
        if(propiedad["zonaNiños"]==="Si"){
            propiedadesConKids.push(propiedad);
        }
    });
    pintarPropiedad(propiedadesConKids, pintar)
});