document.addEventListener("DOMContentLoaded",()=>{iniciarApp()});const iniciarApp=()=>{crearGaleria(),scrollSection()},scrollSection=()=>{document.querySelectorAll("nav a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})},crearGaleria=()=>{for(let e=1;e<=12;e++){const t=document.createElement("picture"),i=document.querySelector("#galeria-img");t.innerHTML=`\n            <source srcset="/build/img/thumb/${e}.avif" type="image/avif">\n            <source srcset="/build/img/thumb/${e}.webp" type="image/webp">\n    \n            <img loading = "lazy" width="200" height="300" src="/build/img/thumb/${e}.jpg" alt="imagen-galeria">\n        `,t.onclick=function(){mostrarModal(e)},i.appendChild(t)}},mostrarModal=e=>{const t=document.createElement("picture"),i=document.querySelector("body"),n=document.createElement("P"),a=document.createElement("DIV");t.innerHTML=`\n            <source srcset="/build/img/grande/${e}.avif" type="image/avif">\n            <source srcset="/build/img/grande/${e}.webp" type="image/webp">\n    \n            <img loading = "lazy" width="200" height="300" src="/build/img/grande/${e}.jpg" alt="imagen-galeria">\n        `,a.classList.add("overlay"),a.appendChild(t),n.classList.add("btn-cerrar"),n.innerText="X",a.appendChild(n),n.onclick=function(){a.remove()},i.appendChild(a)};