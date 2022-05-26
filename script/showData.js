export const pintarPropiedad = async (arrayDatos, listarHTML)=>{
    let pintar = document.querySelector(".container-container");
    listarHTML.innerHTML = ''
    //pintar.innerHTML=''
    arrayDatos.forEach(propiedades=>{
        const {nombre, precio, tipo, ubicacion, habitaciones, baños, tamaño, image}= propiedades// desestructurando

        listarHTML.innerHTML += /*`
        <div class="card" style="width: 400px; height:300px;">
        <img src=${image} class="card-img-top" alt="...">
        <div class="card-body">
            <h1>${Nombre}</h1>
        </div>
      </div>
        `*/
             `<div id="pintar" class="card-propiedad" >
                    <div style="width: 100%;">
                        <img src=${image} alt="Foto ptopiedad">
                    </div>
                    <div style="margin:5px 20px;">
                        <div style="color:white; font-weight: 900; margin:-40px 0 10px ;" >${precio}</div>
                        <p style="color:#00C194; font-weight: 700;">${tipo}</p>
                        <h5 style="font-weight: 700;">${nombre}</h5>
                        <label for="">${ubicacion}</label>
                        <div style="display: flex; ">
                            <div style=" margin-right:2px; width:14px; height:12px">
                                <img src="https://res.cloudinary.com/df2cmt2rl/image/upload/v1653420555/proyectoSpring1/Mask_Group_2_bhcr5m.png">
                            </div>
                            <p style="margin-right:15px;">${habitaciones}</p>
                            <div style=" margin-right:2px; width:14px; height:12px">
                                <img src="https://res.cloudinary.com/df2cmt2rl/image/upload/v1653420555/proyectoSpring1/Mask_Group_1_fyq3bg.png">
                            </div>
                            <p style="margin-right:15px;">${baños}</p>
                            <div style=" margin-right:2px; width:14px; height:12px">
                                <img src="https://res.cloudinary.com/df2cmt2rl/image/upload/v1653420555/proyectoSpring1/Mask_Group_no4h9f.png">
                            </div>
                            <p style="margin-right:15px;">${tamaño}</p>
                        </div>
                        <button class="btn">Favorito♥</button>
                    </div>
                </div>`
    })
}
