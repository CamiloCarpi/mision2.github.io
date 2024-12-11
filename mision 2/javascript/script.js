const contenedor = document.getElementById('contenedor')
function ocultar(){
    contenedor.classList.toggle('oculto')
}

function mover(){
    contenedor.classList.toggle('secundaria')
    contenedor.style.marginLeft = '400px'
}

function cambiar(){
    contenedor.classList.toggle('secundaria')
    contenedor.style.backgroundColor = 'blueviolet'
    const nuevoDiv = document.createElement('div');
    const imagen = document.createElement('img')
    imagen.src ='foto de perfil.png'
    imagen.alt ='imagen 1'
    
    document.body.appendChild(nuevoDiv);
    nuevoDiv.appendChild(imagen);
    
    

    //nuevoDiv.textContent = 'Soy un nuevo DIV';    
    //document.body.appendChild(nuevoDiv);
}

