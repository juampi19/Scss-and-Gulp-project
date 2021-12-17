document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();
});


const iniciarApp = () => {
    crearGaleria();
    scrollSection();
    
}

const scrollSection = () =>{
    const enlaces =  document.querySelectorAll('nav a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            
            const target = e.target.attributes.href.value;
            const seccionScroll = document.querySelector(target);
            seccionScroll.scrollIntoView( { behavior: 'smooth' } );
        })
    })
}

const crearGaleria = () => {
    for(let i = 1; i <=12; i++){
        const imagen = document.createElement('picture');
        const galeria = document.querySelector('#galeria-img');

        imagen.innerHTML = `
            <source srcset="/build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="/build/img/thumb/${i}.webp" type="image/webp">
    
            <img loading = "lazy" width="200" height="300" src="/build/img/thumb/${i}.jpg" alt="imagen-galeria">
        `
        
        imagen.onclick = function(){
            mostrarModal(i);
        }

        galeria.appendChild(imagen);    
    }
}

const mostrarModal = (index) => {
    const imagen = document.createElement('picture');
    const body = document.querySelector('body');
    const btnCerrar = document.createElement('P');
    const overlay = document.createElement('DIV');

    imagen.innerHTML = `
            <source srcset="/build/img/grande/${index}.avif" type="image/avif">
            <source srcset="/build/img/grande/${index}.webp" type="image/webp">
    
            <img loading = "lazy" width="200" height="300" src="/build/img/grande/${index}.jpg" alt="imagen-galeria">
        `

    
    overlay.classList.add('overlay');
    overlay.appendChild(imagen);

    btnCerrar.classList.add('btn-cerrar');
    btnCerrar.innerText = 'X';
    overlay.appendChild(btnCerrar);
    btnCerrar.onclick = function(){
        overlay.remove();
    }

    body.appendChild(overlay);
}



