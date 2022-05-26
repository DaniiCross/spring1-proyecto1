export const cardAsesores = async (arrayData, listaHTML)=>{
    arrayData.forEach(asesores=>{
        const {nombre, zona, telefono,  image}= asesores// desestructurando

        listaHTML.innerHTML += `
        <div id="asesores" class="card-propiedad">
            <div style="width: 100%;">
                <img src=${image} alt="Foto ptopiedad">
            </div>
            <div style="margin-top:5px ">
                <h5 style="font-weight: 700;">${nombre}</h5>
                <div style=" color:#00C194; margin: 0px 0 10px;" >${zona}</div> 
                <div style="display:flex; flex-direction:row;">
                    <div style=" margin-right:10px; width:10px; height:"8px">
                        <img src="https://res.cloudinary.com/df2cmt2rl/image/upload/v1653420558/proyectoSpring1/fi-rr-call-outgoing_yneq9v.png" alt="Telefono">
                    </div>
                    <label for="">${telefono}</label>
                </div>
             </div>
        </div>`
    })
}