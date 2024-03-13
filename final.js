/* SOLER, JULIETA NATALÍ */

'use strict';

window.onload = function(){
    crearCabecera();
    cargarProductos(aProductos);  
}

const d = document; 
let pasoBandera=false;
let timer;
let body = d.getElementsByTagName('body');
d.addEventListener('keydown', TeclaPresionada); 
let contProductos = 0;

let carritoCompras = {
    Productos: [],
    Cantidad: [],
    Precio:[],
    Total: 0,
};

if(localStorage.carritoCompras){
    carritoCompras = JSON.parse(localStorage.carritoCompras); 
}else{
    localStorage.carritoCompras = JSON.stringify(carritoCompras);
}
let total=0;
carritoCompras.Cantidad.forEach((val)=>{total=total+val});

let aProductos = [
    {
        Nombre: 'Botas Smooth',
        Descripcion: 'Su diseño es inconfundible: el emblemático cuero suave Smooth, la suela con cámara de aire y surcos laterales y el pespunte amarillo.',
        Precio: 12500,
        Imagen: 'imagenes/botas1.jpg',
        Categoria: 1,
    },
    {
        Nombre: 'Botas Chelsea',
        Descripcion: 'Material sintético muy brillante, con un tacto muy agradable y un sutil acabado en dos tonos. Hecho 100% con productos veganos.',
        Precio: 11900,
        Imagen: 'imagenes/botas2.jpg',
        Categoria: 1,
    },
    {
        Nombre: 'Botas Sinclair',
        Descripcion: 'Oxford es nuestro material vegano: es tan resistente como la piel y está elaborado sin ningún producto de origen animal.',
        Precio: 13900,
        Imagen: 'imagenes/botas3.jpg',
        Categoria: 1,
    },
    {
        Nombre: 'Botas Angel',
        Descripcion: 'Felix Rub Off es nuestro material vegano por excelencia y funciona tan bien como el cuero. Con un diseño bordeado a mano único.',
        Precio: 14200,
        Imagen: 'imagenes/botas4.jpg',
        Categoria: 1,
    },
    {
        Nombre: 'Botas Flower',
        Descripcion: 'Es una bota con certificación vegana. Está construida sobre suela con cámara de aire AirWair™, resistente al aceite y la grasa, antiabrasión y antideslizante.',
        Precio: 13150,
        Imagen: 'imagenes/botas5.jpg',
        Categoria: 1,
    },
    {
        Nombre: 'Botas Bex',
        Descripcion: 'Felix Rub Off es nuestro material sintético vegano. Con un diseño simple, minimalista y elegante, ideal para usarlos en cualquier ocasión.',
        Precio: 14500,
        Imagen: 'imagenes/botas6.jpg',
        Categoria: 1,
    },
    {
        Nombre: 'Sandalias Margo',
        Descripcion: 'Sandalias super cómodas para que te acompañen por una larga temporada de verano. Hechas con Felix Rub Off, nuestro material sintético vegano.',
        Precio: 6500,
        Imagen: 'imagenes/sandalias1.jpg',
        Categoria: 2,
    },
    {
        Nombre: 'Sandalias Cancún',
        Descripcion: 'Sandalias fabricadas con material vegano. Con detalle charolado y un taco súper cómodo. Ideales para cualquier salida.',
        Precio: 7200,
        Imagen: 'imagenes/sandalias2.jpg',
        Categoria: 2,
    },
    {
        Nombre: 'Sandalias Hawai',
        Descripcion: 'Ideales para todos los días, cuenta con abrojos para ajustar al pie. Estas sandalias están hechas con nuestro material sintético vegano por excelencia.',
        Precio: 6000,
        Imagen: 'imagenes/sandalias3.jpg',
        Categoria: 2,
    },
    {
        Nombre: 'Sandalias Saona',
        Descripcion: 'Sandalias tipo suecos confeccionadas en sintético PU liso. Son mega livianas e ideales para este verano, con un diseño clásico y único.',
        Precio: 5480,
        Imagen: 'imagenes/sandalias4.jpg',
        Categoria: 2,
    },
    {
        Nombre: 'Sandalias Nasáu',
        Descripcion: 'Si lo que buscás es la comodidad, frescura y liviandad, estas sandalias veganas son para vos. Cuentan con abrojos para ajustar el pie.',
        Precio: 7500,
        Imagen: 'imagenes/sandalias5.jpg',
        Categoria: 2,
    },
    {
        Nombre: 'Sandalias Havana',
        Descripcion: 'Sandalia baja confeccionada en ecocuero PU. Estilo deportivas. Son de taco bajo y tienen goma antideslizante.',
        Precio: 8000,
        Imagen: 'imagenes/sandalias6.jpg',
        Categoria: 2,
    },
    {
        Nombre: 'Zapatos Caicos',
        Descripcion: 'Nuestro negro Felix Rub Off es un material sintético muy brillante, de tacto muy agradable y con un sutil acabado de dos tonos.',
        Precio: 9090,
        Imagen: 'imagenes/zapatos1.jpg',
        Categoria: 3,
    },
    {
        Nombre: 'Zapatos Vito',
        Descripcion: 'Zapatos con plataforma de 6cm. Súper elegantes y acompañan a cada uno de tus prendas de una manera única.',
        Precio: 10500,
        Imagen: 'imagenes/zapatos2.jpg',
        Categoria: 3,
    },
    {
        Nombre: 'Zapatos Anse',
        Descripcion: 'Zapatos de ecocuero bordados con estilo inglés y un taco bajo de 3cm de color madera. Una elegancia y diseño nunca antes vistos. ',
        Precio: 8750,
        Imagen: 'imagenes/zapatos3.jpg',
        Categoria: 3,
    },
    {
        Nombre: 'Zapatos Maui',
        Descripcion: 'Nuestro negro Felix Rub Off es un material sintético muy brillante, de tacto muy agradable y con un sutil acabado de dos tonos.',
        Precio: 8200,
        Imagen: 'imagenes/zapatos4.jpg',
        Categoria: 3,
    },
    {
        Nombre: 'Zapatos Male',
        Descripcion: 'Oxford es nuestro material vegano: este sustituto de cuero sintético es tan resistente como la piel y está elaborado sin ningún producto de origen animal.',
        Precio: 9500,
        Imagen: 'imagenes/zapatos5.jpg',
        Categoria: 3,
    },
    {
        Nombre: 'Zapatos Lucky',
        Descripcion: 'Zapatos veganos con acabado mate, cordones y apliques que los hacen únicos y diferentes al resto. Ideales para resaltar en las fiestas.',
        Precio: 11120,
        Imagen: 'imagenes/zapatos6.jpg',
        Categoria: 3,
    }
]

function crearCabecera(){
    let header = d.querySelector('header');
    let nav = d.createElement('nav');
    header.appendChild(nav);
    let ul = d.createElement('ul');
    nav.appendChild(ul);
    let liTodo = d.createElement('li');
    let aTodo  = d.createElement('a');
    aTodo.setAttribute('href', '#');
    aTodo.addEventListener('click', ()=> cargarProductos(aProductos));
    aTodo.innerHTML = 'Ver todo';
    liTodo.appendChild(aTodo);
    ul.appendChild(liTodo);
    let liBotas = d.createElement('li');
    let aBotas = d.createElement('a');
    aBotas.innerHTML = 'Botas';
    aBotas.setAttribute('href', '#');
    aBotas.addEventListener('click', ()=> mostrarCategoriaFiltrada(1));
    aBotas.addEventListener('click', ()=> bannerPromocion("Botas"));
    liBotas.appendChild(aBotas);
    ul.appendChild(liBotas);
    let liSandalias = d.createElement('li');
    let aSandalias = d.createElement('a');
    aSandalias.innerHTML = 'Sandalias';
    aSandalias.setAttribute('href', '#');
    aSandalias.addEventListener('click', ()=> mostrarCategoriaFiltrada(2));
    aSandalias.addEventListener('click', ()=> bannerPromocion("Sandalias"));
    liSandalias.appendChild(aSandalias);
    ul.appendChild(liSandalias);
    let liZapatos = d.createElement('li');
    let aZapatos = d.createElement('a');
    aZapatos.innerHTML = 'Zapatos';
    aZapatos.setAttribute('href', '#');
    aZapatos.addEventListener('click', ()=> mostrarCategoriaFiltrada(3));
    aZapatos.addEventListener('click', ()=> bannerPromocion("Zapatos"));
    liZapatos.appendChild(aZapatos);
    ul.appendChild(liZapatos);
}

function mostrarCategoriaFiltrada(_categoria){
let categoriaFiltrada = filtrarXCategoria(_categoria);
cargarProductos(categoriaFiltrada);
}


function filtrarXCategoria(_categoria){
    let arrayFiltro=[];
    for(let elemento of aProductos){
        if(elemento.Categoria==_categoria){
            arrayFiltro.push(elemento); 
        }
    }
    return arrayFiltro;
}

let banner = d.getElementById('banner');
banner.style.width = '970px';
banner.style.height = '250px';
banner.style.position = 'fixed';
banner.style.left = 'calc(50% - 485px)';
banner.style.top = 'calc(50% - 125px)';
let cerrarBanner = d.createElement('a');
cerrarBanner.setAttribute('href', '#');
cerrarBanner.innerHTML = 'X';
banner.appendChild(cerrarBanner);
let imgBanner = d.createElement('img');
banner.appendChild(imgBanner);
banner.style.display = 'none';

function bannerPromocion(calzado){
    
    banner.style.display = 'block';
    switch(calzado){
        case "Sandalias":imgBanner.setAttribute('src', 'imagenes/banner.png'); break;
        case "Botas":imgBanner.setAttribute('src', 'imagenes/bannerBotas.png'); break;
        case "Zapatos":imgBanner.setAttribute('src', 'imagenes/bannerZapatos.png'); break;
    }
    if(pasoBandera){
        clearTimeout(timer);    
    }
        pasoBandera=true;
        timer = setTimeout(() => {
            banner.style.display = 'none';  
            pasoBandera=false; 
            }
            ,10000);   
}
cerrarBanner.onclick = function(){
    banner.style.display = 'none';
}

function cargarProductos(arregloProductos){
    let divProductos = d.getElementById('productos');
    divProductos.innerHTML=""; 
    divProductos.setAttribute('class', 'container');
    let divRow = d.createElement('div');
    divRow.setAttribute('class', 'row');
    divProductos.appendChild(divRow);

    for(let productos of arregloProductos){
    
    let divCol = d.createElement('div');
    divCol.setAttribute('class', 'col-lg-4 mt-4');
    divRow.appendChild(divCol);

    let divCard = d.createElement('div');
    divCard.setAttribute('class', 'card');
    divCol.appendChild(divCard);

    let img = d.createElement('img');
    img.setAttribute('src', productos.Imagen);
    img.setAttribute('alt', productos.Nombre);
    img.setAttribute('class', 'card-img-top');
    divCard.appendChild(img);
    img.onclick=()=>{
      modalProducto.style.display = 'block'; 
      titProducto.innerHTML = img.alt; 
      imgProducto.setAttribute('src', img.src); 
      imgProducto.setAttribute('alt', img.alt);
      precioProducto.innerHTML = `$${productos.Precio}`;
      descProducto.innerHTML = desc;
      boton.setAttribute('data-id', productos.Nombre);
      boton.setAttribute('data-val', productos.Precio);
    }

    let divCardBody = d.createElement('div');
    divCardBody.setAttribute('class', 'card-body');
    divCard.appendChild(divCardBody);

    let titulo = d.createElement('h2');
    titulo.innerHTML = productos.Nombre;
    divCardBody.appendChild(titulo);

    let precio = d.createElement('p');
    precio.setAttribute('class', 'costo');
    precio.innerHTML = `$${productos.Precio}`;
    divCardBody.appendChild(precio);

    let descripcion = d.createElement('p');
    descripcion.innerHTML = `${productos.Descripcion}`;
    divCardBody.appendChild(descripcion);
    let desc = productos.Descripcion;

    let botonAgregar = d.createElement('button'); 
    botonAgregar.setAttribute('type', 'button');
    botonAgregar.setAttribute('class', 'btn fondoBoton');
    botonAgregar.innerHTML = 'Añadir al carrito ';
    botonAgregar.setAttribute('data-id', productos.Nombre);
    botonAgregar.setAttribute('data-val', productos.Precio);
    divCardBody.appendChild(botonAgregar);
    let iconoAdd = d.createElement('i');
    iconoAdd.setAttribute('class', 'bi bi-plus-circle');
    botonAgregar.appendChild(iconoAdd);
    
    botonAgregar.onclick = function(){
        window.scrollTo(0, 10); 
        let nombreProd = this.dataset.id;
        let precioProd = parseInt(this.dataset.val);
        contProductos++;

        let prodExistente = carritoCompras.Productos.indexOf(nombreProd);
        if (prodExistente != -1){ 
            carritoCompras.Cantidad[prodExistente]++;
        } else {
        carritoCompras.Productos.push(nombreProd);
        carritoCompras.Precio.push(precioProd);
        carritoCompras.Cantidad.push(1);
        }

    carritoCompras.Total = parseInt(carritoCompras.Total) + precioProd;

    localStorage.carritoCompras = JSON.stringify(carritoCompras);

    let total=0;
    carritoCompras.Cantidad.forEach((val)=>{total=total+val});

    cantProductos.innerHTML = `Productos agregados: ${total}`;
    pTotal.innerHTML = `Total: $${carritoCompras.Total}`; 
    }
}
}

let modalProducto = d.createElement('div');
modalProducto.setAttribute('id', 'modalProducto');
d.body.appendChild(modalProducto);
let cerrar = d.createElement('a');
cerrar.setAttribute('href', '#');
cerrar.innerHTML = 'X';
modalProducto.appendChild(cerrar);
let num = 1;
let anterior = d.createElement('input');
anterior.setAttribute('type', 'button');
anterior.setAttribute('value', '<');
anterior.setAttribute('class', 'antSig fondoBoton');
function Anterior(){
    num--; 
    if(imgProducto.alt === 'Botas Smooth' && num === 2){
        imgProducto.src = 'imagenes/botas1-1.jpg'; 
    }
    else if(imgProducto.alt === 'Botas Smooth' && num === 1){
        imgProducto.src = 'imagenes/botas1.jpg';
    }
    else if(imgProducto.alt === 'Botas Smooth' && num<1){
        num=3;
        imgProducto.src = 'imagenes/botas1-2.jpg';
    } 
    else if(imgProducto.alt === 'Botas Chelsea' && num === 2){
        imgProducto.src = 'imagenes/botas2-1.jpg'; 
    }
    else if(imgProducto.alt === 'Botas Chelsea' && num === 1){
        imgProducto.src = 'imagenes/botas2.jpg';
    }
    else if(imgProducto.alt === 'Botas Chelsea' && num<1){
        num=3;
        imgProducto.src = 'imagenes/botas2-2.jpg';
    }
    else if(imgProducto.alt === 'Botas Sinclair' && num === 2){
        imgProducto.src = 'imagenes/botas3-1.jpg'; 
    }
    else if(imgProducto.alt === 'Botas Sinclair' && num === 1){
        imgProducto.src = 'imagenes/botas3.jpg';
    }
    else if(imgProducto.alt === 'Botas Sinclair' && num<1){
        num=3;
        imgProducto.src = 'imagenes/botas3-2.jpg';
    }
    else if(imgProducto.alt === 'Botas Angel' && num === 2){
        imgProducto.src = 'imagenes/botas4-1.jpg'; 
    }
    else if(imgProducto.alt === 'Botas Angel' && num === 1){
        imgProducto.src = 'imagenes/botas4.jpg';
    }
    else if(imgProducto.alt === 'Botas Angel' && num<1){
        num=3;
        imgProducto.src = 'imagenes/botas4-2.jpg';
    }   
    else if(imgProducto.alt === 'Botas Flower' && num === 2){
        imgProducto.src = 'imagenes/botas5-1.jpg'; 
    }
    else if(imgProducto.alt === 'Botas Flower' && num === 1){
        imgProducto.src = 'imagenes/botas5.jpg';
    }
    else if(imgProducto.alt === 'Botas Flower' && num<1){
        num=3;
        imgProducto.src = 'imagenes/botas5-2.jpg';
    }
    else if(imgProducto.alt === 'Botas Bex' && num === 2){
        imgProducto.src = 'imagenes/botas6-1.jpg'; 
    }
    else if(imgProducto.alt === 'Botas Bex' && num === 1){
        imgProducto.src = 'imagenes/botas6.jpg';
    }
    else if(imgProducto.alt === 'Botas Bex' && num<1){
        num=3;
        imgProducto.src = 'imagenes/botas6-2.jpg';
    } 
    else if(imgProducto.alt === 'Sandalias Margo' && num === 2){
        imgProducto.src = 'imagenes/sandalias1-1.jpg'; 
    }
    else if(imgProducto.alt === 'Sandalias Margo' && num === 1){
        imgProducto.src = 'imagenes/sandalias1.jpg';
    }
    else if(imgProducto.alt === 'Sandalias Margo' && num<1){
        num=3;
        imgProducto.src = 'imagenes/sandalias1-2.jpg';
    }  
    else if(imgProducto.alt === 'Sandalias Cancún' && num === 2){
        imgProducto.src = 'imagenes/sandalias2-1.jpg'; 
    }
    else if(imgProducto.alt === 'Sandalias Cancún' && num === 1){
        imgProducto.src = 'imagenes/sandalias2.jpg';
    }
    else if(imgProducto.alt === 'Sandalias Cancún' && num<1){
        num=3;
        imgProducto.src = 'imagenes/sandalias2-2.jpg';
    } 
    else if(imgProducto.alt === 'Sandalias Hawai' && num === 2){
        imgProducto.src = 'imagenes/sandalias3-1.jpg'; 
    }
    else if(imgProducto.alt === 'Sandalias Hawai' && num === 1){
        imgProducto.src = 'imagenes/sandalias3.jpg';
    }
    else if(imgProducto.alt === 'Sandalias Hawai' && num<1){
        num=3;
        imgProducto.src = 'imagenes/sandalias3-2.jpg';
    }
    else if(imgProducto.alt === 'Sandalias Saona' && num === 2){
        imgProducto.src = 'imagenes/sandalias4-1.jpg'; 
    }
    else if(imgProducto.alt === 'Sandalias Saona' && num === 1){
        imgProducto.src = 'imagenes/sandalias4.jpg';
    }
    else if(imgProducto.alt === 'Sandalias Saona' && num<1){
        num=3;
        imgProducto.src = 'imagenes/sandalias4-2.jpg';
    }
    else if(imgProducto.alt === 'Sandalias Nasáu' && num === 2){
        imgProducto.src = 'imagenes/sandalias5-1.jpg'; 
    }
    else if(imgProducto.alt === 'Sandalias Nasáu' && num === 1){
        imgProducto.src = 'imagenes/sandalias5.jpg';
    }
    else if(imgProducto.alt === 'Sandalias Nasáu' && num<1){
        num=3;
        imgProducto.src = 'imagenes/sandalias5-2.jpg';
    }
    else if(imgProducto.alt === 'Sandalias Havana' && num === 2){
        imgProducto.src = 'imagenes/sandalias6-1.jpg'; 
    }
    else if(imgProducto.alt === 'Sandalias Havana' && num === 1){
        imgProducto.src = 'imagenes/sandalias6.jpg';
    }
    else if(imgProducto.alt === 'Sandalias Havana' && num<1){
        num=3;
        imgProducto.src = 'imagenes/sandalias6-2.jpg';
    } 
    else if(imgProducto.alt === 'Zapatos Caicos' && num === 2){
        imgProducto.src = 'imagenes/zapatos1-1.jpg'; 
    }
    else if(imgProducto.alt === 'Zapatos Caicos' && num === 1){
        imgProducto.src = 'imagenes/zapatos1.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Caicos' && num<1){
        num=3;
        imgProducto.src = 'imagenes/zapatos1-2.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Vito' && num === 2){
        imgProducto.src = 'imagenes/zapatos2-1.jpg'; 
    }
    else if(imgProducto.alt === 'Zapatos Vito' && num === 1){
        imgProducto.src = 'imagenes/zapatos2.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Vito' && num<1){
        num=3;
        imgProducto.src = 'imagenes/zapatos2-2.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Anse' && num === 2){
        imgProducto.src = 'imagenes/zapatos3-1.jpg'; 
    }
    else if(imgProducto.alt === 'Zapatos Anse' && num === 1){
        imgProducto.src = 'imagenes/zapatos3.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Anse' && num<1){
        num=3;
        imgProducto.src = 'imagenes/zapatos3-2.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Maui' && num === 2){
        imgProducto.src = 'imagenes/zapatos4-1.jpg'; 
    }
    else if(imgProducto.alt === 'Zapatos Maui' && num === 1){
        imgProducto.src = 'imagenes/zapatos4.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Maui' && num<1){
        num=3;
        imgProducto.src = 'imagenes/zapatos4-2.jpg';
    } 
    else if(imgProducto.alt === 'Zapatos Male' && num === 2){
        imgProducto.src = 'imagenes/zapatos5-1.jpg'; 
    }
    else if(imgProducto.alt === 'Zapatos Male' && num === 1){
        imgProducto.src = 'imagenes/zapatos5.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Male' && num<1){
        num=3;
        imgProducto.src = 'imagenes/zapatos5-2.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Lucky' && num === 2){
        imgProducto.src = 'imagenes/zapatos6-1.jpg'; 
    }
    else if(imgProducto.alt === 'Zapatos Lucky' && num === 1){
        imgProducto.src = 'imagenes/zapatos6.jpg';
    }
    else if(imgProducto.alt === 'Zapatos Lucky' && num<1){
        num=3;
        imgProducto.src = 'imagenes/zapatos6-2.jpg';
    }         
}
anterior.onclick = function(){
    Anterior();               
}
modalProducto.appendChild(anterior);
let imgProducto = d.createElement('img');
modalProducto.appendChild(imgProducto);
let siguiente = d.createElement('input');
siguiente.setAttribute('type', 'button');
siguiente.setAttribute('value', '>');
siguiente.setAttribute('class', 'antSig fondoBoton');
function Siguiente(){
    num++;
        if(imgProducto.alt === 'Botas Smooth' && num === 2){
            imgProducto.src = 'imagenes/botas1-1.jpg';
          }
        else if(imgProducto.alt === 'Botas Smooth' && num === 3){
            imgProducto.src = 'imagenes/botas1-2.jpg'; 
        }
        else if(imgProducto.alt === 'Botas Smooth' && num>3){
             num=1;
             imgProducto.src = 'imagenes/botas1.jpg';  
        }
        else if(imgProducto.alt === 'Botas Chelsea' && num === 2){
            imgProducto.src = 'imagenes/botas2-1.jpg';
        } 
        else if(imgProducto.alt === 'Botas Chelsea' && num === 3){
            imgProducto.src = 'imagenes/botas2-2.jpg';
        }  
        else if(imgProducto.alt === 'Botas Chelsea' && num>3){
            num=1;
            imgProducto.src = 'imagenes/botas2.jpg';
        } 
        else if(imgProducto.alt === 'Botas Sinclair' && num === 2){
            imgProducto.src = 'imagenes/botas3-1.jpg';
        } 
        else if(imgProducto.alt === 'Botas Sinclair' && num === 3){
            imgProducto.src = 'imagenes/botas3-2.jpg';
        }  
        else if(imgProducto.alt === 'Botas Sinclair' && num>3){
            num=1;
            imgProducto.src = 'imagenes/botas3.jpg';
        }
        else if(imgProducto.alt === 'Botas Angel' && num === 2){
            imgProducto.src = 'imagenes/botas4-1.jpg';
        } 
        else if(imgProducto.alt === 'Botas Angel' && num === 3){
            imgProducto.src = 'imagenes/botas4-2.jpg';
        }  
        else if(imgProducto.alt === 'Botas Angel' && num>3){
            num=1;
            imgProducto.src = 'imagenes/botas4.jpg';
        }
        else if(imgProducto.alt === 'Botas Flower' && num === 2){
            imgProducto.src = 'imagenes/botas5-1.jpg';
        } 
        else if(imgProducto.alt === 'Botas Flower' && num === 3){
            imgProducto.src = 'imagenes/botas5-2.jpg';
        }  
        else if(imgProducto.alt === 'Botas Flower' && num>3){
            num=1;
            imgProducto.src = 'imagenes/botas5.jpg';
        }
        else if(imgProducto.alt === 'Botas Bex' && num === 2){
            imgProducto.src = 'imagenes/botas6-1.jpg';
        } 
        else if(imgProducto.alt === 'Botas Bex' && num === 3){
            imgProducto.src = 'imagenes/botas6-2.jpg';
        }  
        else if(imgProducto.alt === 'Botas Bex' && num>3){
            num=1;
            imgProducto.src = 'imagenes/botas6.jpg';
        }
        else if(imgProducto.alt === 'Sandalias Margo' && num === 2){
            imgProducto.src = 'imagenes/sandalias1-1.jpg';
        } 
        else if(imgProducto.alt === 'Sandalias Margo' && num === 3){
            imgProducto.src = 'imagenes/sandalias1-2.jpg';
        }  
        else if(imgProducto.alt === 'Sandalias Margo' && num>3){
            num=1;
            imgProducto.src = 'imagenes/sandalias1.jpg';
        }
        else if(imgProducto.alt === 'Sandalias Cancún' && num === 2){
            imgProducto.src = 'imagenes/sandalias2-1.jpg';
        } 
        else if(imgProducto.alt === 'Sandalias Cancún' && num === 3){
            imgProducto.src = 'imagenes/sandalias2-2.jpg';
        }  
        else if(imgProducto.alt === 'Sandalias Cancún' && num>3){
            num=1;
            imgProducto.src = 'imagenes/sandalias2.jpg';
        }
        else if(imgProducto.alt === 'Sandalias Hawai' && num === 2){
            imgProducto.src = 'imagenes/sandalias3-1.jpg';
        } 
        else if(imgProducto.alt === 'Sandalias Hawai' && num === 3){
            imgProducto.src = 'imagenes/sandalias3-2.jpg';
        }  
        else if(imgProducto.alt === 'Sandalias Hawai' && num>3){
            num=1;
            imgProducto.src = 'imagenes/sandalias3.jpg';
        }
        else if(imgProducto.alt === 'Sandalias Saona' && num === 2){
            imgProducto.src = 'imagenes/sandalias4-1.jpg';
        } 
        else if(imgProducto.alt === 'Sandalias Saona' && num === 3){
            imgProducto.src = 'imagenes/sandalias4-2.jpg';
        }  
        else if(imgProducto.alt === 'Sandalias Saona' && num>3){
            num=1;
            imgProducto.src = 'imagenes/sandalias4.jpg';
        }
        else if(imgProducto.alt === 'Sandalias Nasáu' && num === 2){
            imgProducto.src = 'imagenes/sandalias5-1.jpg';
        } 
        else if(imgProducto.alt === 'Sandalias Nasáu' && num === 3){
            imgProducto.src = 'imagenes/sandalias5-2.jpg';
        }  
        else if(imgProducto.alt === 'Sandalias Nasáu' && num>3){
            num=1;
            imgProducto.src = 'imagenes/sandalias5.jpg';
        }
        else if(imgProducto.alt === 'Sandalias Havana' && num === 2){
            imgProducto.src = 'imagenes/sandalias6-1.jpg';
        } 
        else if(imgProducto.alt === 'Sandalias Havana' && num === 3){
            imgProducto.src = 'imagenes/sandalias6-2.jpg';
        }  
        else if(imgProducto.alt === 'Sandalias Havana' && num>3){
            num=1;
            imgProducto.src = 'imagenes/sandalias6.jpg';
        }
        else if(imgProducto.alt === 'Zapatos Caicos' && num === 2){
            imgProducto.src = 'imagenes/zapatos1-1.jpg';
        } 
        else if(imgProducto.alt === 'Zapatos Caicos' && num === 3){
            imgProducto.src = 'imagenes/zapatos1-2.jpg';
        }  
        else if(imgProducto.alt === 'Zapatos Caicos' && num>3){
            num=1;
            imgProducto.src = 'imagenes/zapatos1.jpg';
        }
        else if(imgProducto.alt === 'Zapatos Vito' && num === 2){
            imgProducto.src = 'imagenes/zapatos2-1.jpg';
        } 
        else if(imgProducto.alt === 'Zapatos Vito' && num === 3){
            imgProducto.src = 'imagenes/zapatos2-2.jpg';
        }  
        else if(imgProducto.alt === 'Zapatos Vito' && num>3){
            num=1;
            imgProducto.src = 'imagenes/zapatos2.jpg';
        }
        else if(imgProducto.alt === 'Zapatos Anse' && num === 2){
            imgProducto.src = 'imagenes/zapatos3-1.jpg';
        } 
        else if(imgProducto.alt === 'Zapatos Anse' && num === 3){
            imgProducto.src = 'imagenes/zapatos3-2.jpg';
        }  
        else if(imgProducto.alt === 'Zapatos Anse' && num>3){
            num=1;
            imgProducto.src = 'imagenes/zapatos3.jpg';
        }
        else if(imgProducto.alt === 'Zapatos Maui' && num === 2){
            imgProducto.src = 'imagenes/zapatos4-1.jpg';
        } 
        else if(imgProducto.alt === 'Zapatos Maui' && num === 3){
            imgProducto.src = 'imagenes/zapatos4-2.jpg';
        }  
        else if(imgProducto.alt === 'Zapatos Maui' && num>3){
            num=1;
            imgProducto.src = 'imagenes/zapatos4.jpg';
        }
        else if(imgProducto.alt === 'Zapatos Male' && num === 2){
            imgProducto.src = 'imagenes/zapatos5-1.jpg';
        } 
        else if(imgProducto.alt === 'Zapatos Male' && num === 3){
            imgProducto.src = 'imagenes/zapatos5-2.jpg';
        }  
        else if(imgProducto.alt === 'Zapatos Male' && num>3){
            num=1;
            imgProducto.src = 'imagenes/zapatos5.jpg';
        }
        else if(imgProducto.alt === 'Zapatos Lucky' && num === 2){
            imgProducto.src = 'imagenes/zapatos6-1.jpg';
        } 
        else if(imgProducto.alt === 'Zapatos Lucky' && num === 3){
            imgProducto.src = 'imagenes/zapatos6-2.jpg';
        }  
        else if(imgProducto.alt === 'Zapatos Lucky' && num>3){
            num=1;
            imgProducto.src = 'imagenes/zapatos6.jpg';
        }
    }
siguiente.onclick = function(){
    Siguiente();
}
modalProducto.appendChild(siguiente);
let titProducto = d.createElement('h2');
modalProducto.appendChild(titProducto);
let precioProducto = d.createElement('p');
modalProducto.appendChild(precioProducto);
let descProducto = d.createElement('p');
modalProducto.appendChild(descProducto);
modalProducto.style.display = 'none';
let boton = d.createElement('button');
boton.setAttribute('type', 'button');
boton.setAttribute('class', 'btn fondoBoton mt-3');
boton.innerHTML = 'Añadir al carrito';
modalProducto.appendChild(boton);
function TeclaPresionada(event){
    const teclaPresionada = event.key;
    if(teclaPresionada == 'Escape'){
     modalProducto.style.display = 'none';
     banner.style.display = 'none';
     divGrac.style.display = 'none';
     modalCarrito.style.display = 'none';
    }
    else if(teclaPresionada == 'ArrowRight'){
        Siguiente();
    }
    else if(teclaPresionada == 'ArrowLeft'){
        Anterior();
    }

 }
boton.onclick = function(){  
    let nombreProd = boton.dataset.id;
    let precioProd = parseInt(boton.dataset.val);

    let prodExistente = carritoCompras.Productos.indexOf(nombreProd);
    if (prodExistente != -1){
        carritoCompras.Cantidad[prodExistente]++;
    } else {
    carritoCompras.Productos.push(nombreProd);
    carritoCompras.Precio.push(precioProd);
        carritoCompras.Cantidad.push(1);
    }

carritoCompras.Total = parseInt(carritoCompras.Total) + precioProd;
localStorage.carritoCompras = JSON.stringify(carritoCompras);
let total=0;
carritoCompras.Cantidad.forEach((val)=>{total=total+val});

cantProductos.innerHTML = `Productos agregados: ${total}`;
pTotal.innerHTML = `Total: $${carritoCompras.Total}`;  

AniadoProd(nombreProd);
}

function AniadoProd(nombreProd){

    let div = d.createElement('div');
    div.setAttribute('class', 'alert alert-success alert-dismissible fade show');
    div.setAttribute('role', 'alert');
    let pAlerta = d.createElement('p');
    pAlerta.innerHTML = `${nombreProd} se agregó correctamente al carrito`;
    div.appendChild(pAlerta);
    let icono = d.createElement('i');
    icono.setAttribute('class', 'bi bi-check-circle');
    pAlerta.appendChild(icono);
    let buton = d.createElement('button');
    buton.setAttribute('type', 'button');
    buton.setAttribute('class', 'btn-close');
    buton.setAttribute('data-bs-dismiss', 'alert');
    buton.setAttribute('aria-label', 'Close');
    div.appendChild(buton);
    modalProducto.appendChild(div);
    buton.onclick = function(){div.style.display = 'none';}
    cerrar.onclick = function(){
        div.style.display = 'none';
        modalProducto.style.display = 'none';
    } 
    
    function PresionarEsc(e){
        let esc = e.keyCode; 
        if(esc == 27){ 
            div.style.display = 'none';
        }
    }
    window.onkeydown = PresionarEsc;

    if(pasoBandera){
        clearTimeout(timer); 
    }

        pasoBandera=true;
        timer = setTimeout(() => {
            div.style.display = 'none';  
            pasoBandera=false; 
            }
            ,2000);

}

cerrar.onclick = function(){
    modalProducto.style.display = 'none';
}

let miniCarrito = d.getElementById('minicarrito');
let cantProductos = d.createElement('p');
cantProductos.innerHTML = `Productos agregados: ${total}`;
miniCarrito.appendChild(cantProductos);
let pTotal = d.createElement('p');
pTotal.innerHTML = `Total: $${carritoCompras.Total}`;
miniCarrito.appendChild(pTotal); 
let verCarrito = d.createElement('button');
verCarrito.setAttribute('class', 'btn btn-dark');
miniCarrito.appendChild(verCarrito);
verCarrito.innerHTML = 'Ver carrito ';
let iconoCarrito = d.createElement('i');
iconoCarrito.setAttribute('class', 'bi bi-cart3');
verCarrito.appendChild(iconoCarrito);

let modalCarrito = d.getElementById('modalCarrito');
let alerta = d.createElement('div');
let btnAlerta = d.createElement('button');
let pAlerta = d.createElement('p');
alerta.style.display = 'none';
modalCarrito.style.display = 'none';
verCarrito.onclick = function(){
    modalCarrito.style.display = 'block';
    document.getElementById('modalCarrito').innerHTML = '';
    let cerrarModal  = d.createElement('a');
    cerrarModal.setAttribute('href', '#');
    cerrarModal.innerHTML = 'X'
    modalCarrito.appendChild(cerrarModal);
    let h2 = d.createElement('h2');
    h2.innerHTML = 'Tu carrito ';
    modalCarrito.appendChild(h2);
    let icono = d.createElement('i');
    icono.setAttribute('class', 'bi bi-cart3');
    h2.appendChild(icono);
    let ulCarrito = d.createElement('ul');
    modalCarrito.appendChild(ulCarrito);
    let pCarrito = d.createElement('p');
    pCarrito.innerHTML = `TOTAL: $${carritoCompras.Total}`;
    modalCarrito.appendChild(pCarrito);
    let btnEliminar = d.createElement('button');
    btnEliminar.setAttribute('class', 'btn fondoBoton2');
    btnEliminar.innerHTML = 'Vaciar carrito ';
    modalCarrito.appendChild(btnEliminar);
    let iconoBorrar = d.createElement('i');
    iconoBorrar.setAttribute('class', 'bi bi-trash');
    btnEliminar.appendChild(iconoBorrar);
    let confirmar = d.createElement('button');
    confirmar.setAttribute('class', 'btn fondoBoton');
    confirmar.innerHTML = 'Proceder al pago';
    modalCarrito.appendChild(confirmar);
    confirmar.addEventListener('click', ()=> confirmarCarrito());
    alerta.setAttribute('class', 'alert alert-warning alert-dismissible fade show');
    alerta.setAttribute('role', 'alert');
    pAlerta.innerHTML = '¡No se añadió ningún producto al carrito! ';
    alerta.appendChild(pAlerta);
    let iconAlert = d.createElement('i');
    iconAlert.setAttribute('class', 'bi bi-exclamation-circle');
    pAlerta.appendChild(iconAlert);
    btnAlerta.setAttribute('type', 'button');
    btnAlerta.setAttribute('class', 'btn-close');
    btnAlerta.setAttribute('data-bs-dismiss', 'alert');
    btnAlerta.setAttribute('aria-label', 'Close');
    alerta.appendChild(btnAlerta);
    modalCarrito.appendChild(alerta);
    function PresionarEsc(e){
        let esc = e.keyCode; 
        if(esc == 27){
            alerta.style.display = 'none';
        }
    }
    window.onkeydown = PresionarEsc;

    cerrarModal.onclick = function(){
        modalCarrito.style.display = 'none';
        alerta.style.display = 'none';
    }

    if(carritoCompras.Productos.length==0){
        cantProductos.innerHTML = `Productos agregados: 0`;
        pTotal.innerHTML = `Total: $0`;
    }else{
     for(let i=0; i < carritoCompras.Productos.length; i++ ){

        let liCarrito = d.createElement('li');
        ulCarrito.appendChild(liCarrito);
        liCarrito.innerHTML = `Producto: ${carritoCompras.Productos[i]} - Cantidad: ${carritoCompras.Cantidad[i]} - SubTotal: $${carritoCompras.Cantidad[i] *  carritoCompras.Precio[i]} ` ;
        let btnQuitar = d.createElement('button');
        btnQuitar.setAttribute('class', 'btn fondoBoton2');
        btnQuitar.innerHTML = 'Quitar ';
        liCarrito.appendChild(btnQuitar);
        btnQuitar.setAttribute('data-id', carritoCompras.Productos[i]);
        btnQuitar.setAttribute('data-val', carritoCompras.Precio[i]);
        let iconoQuitar = d.createElement('i');
        iconoQuitar.setAttribute('class', 'bi bi-x-circle');
        btnQuitar.appendChild(iconoQuitar);
        btnQuitar.onclick = function(){
            let nombreProd = this.dataset.id;
            let precioProd = parseInt(this.dataset.val);
            let prodExistente = carritoCompras.Productos.indexOf(nombreProd);
            if(prodExistente != -1){
                if(carritoCompras.Cantidad[prodExistente] > 1){
                    carritoCompras.Cantidad[prodExistente]--; 
                    carritoCompras.Total = parseInt(carritoCompras.Total) - precioProd;
                    localStorage.carritoCompras = JSON.stringify(carritoCompras);   
                }
                else{ 
                    carritoCompras.Cantidad[prodExistente]--; 
                    carritoCompras.Total = parseInt(carritoCompras.Total) - precioProd;
                    carritoCompras.Cantidad.splice(prodExistente, 1); 
                    carritoCompras.Precio.splice(prodExistente, 1); 
                    carritoCompras.Productos.splice(prodExistente, 1);                  
                    localStorage.carritoCompras = JSON.stringify(carritoCompras);
                }
                verCarrito.onclick();
                }
            }
  
            btnEliminar.onclick = function(){
                localStorage.clear();
                location.reload(); 
             } 
     
    }
    }
}

function confirmarCarrito(){
    if(carritoCompras.Total === 0){
        alerta.style.display = 'block';
        btnAlerta.onclick = function(){
            alerta.style.display = 'none';
        }
    }
    else{
        let modalDatos = d.createElement('aside');
        modalDatos.setAttribute('id', 'modalDatos');
        d.body.appendChild(modalDatos);
        let cerrarModal = d.createElement('a');
        cerrarModal.setAttribute('href', '#');
        cerrarModal.innerHTML = 'X';
        modalDatos.appendChild(cerrarModal);
        let h2Modal = d.createElement('h2');
        h2Modal.innerHTML = 'Detalle de envío y pago';
        modalDatos.appendChild(h2Modal);
        let form = d.createElement('form');
        form.setAttribute('class', 'container');
        form.setAttribute('action', 'index.html#gracias');
        form.setAttribute('method', 'post');
        form.setAttribute('enctype','application/x-www-form-urlencoded');
        modalDatos.appendChild(form);
        let dtosPers = d.createElement('fieldset');
        dtosPers.setAttribute('class', 'row');
        form.appendChild(dtosPers);
        let legendPers = d.createElement('legend');
        legendPers.innerHTML = 'Datos de envío';
        dtosPers.appendChild(legendPers);
        let divNom = d.createElement('div');
        divNom.setAttribute('class','form-floating mb-3 col-lg-6 validar');
        dtosPers.appendChild(divNom);
        let inputNom = d.createElement('input');
        inputNom.setAttribute('class', 'form-control');
        inputNom.setAttribute('id', 'nombreFlotado');
        inputNom.setAttribute('type', 'text');
        inputNom.setAttribute('name', 'nombre');
        inputNom.setAttribute('placeholder', 'Ingresa tu nombre');
        inputNom.setAttribute('required', 'true');
        inputNom.setAttribute('aria-describedby', 'validacionNombre');
        divNom.appendChild(inputNom);
        let spanNom = d.createElement('span');
        spanNom.setAttribute('id', 'validacionNombre');
        spanNom.setAttribute('class', 'textoForm');
        spanNom.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanNom.style.display = 'none';        
        divNom.appendChild(spanNom);
        let labelNom = d.createElement('label');
        labelNom.setAttribute('for', 'nombreFlotado');
        labelNom.innerHTML = 'Nombre*';
        divNom.appendChild(labelNom);

        let divApe = d.createElement('div');
        divApe.setAttribute('class','form-floating mb-3 col-lg-6 validar');
        dtosPers.appendChild(divApe);
        let inputApe = d.createElement('input');
        inputApe.setAttribute('class', 'form-control');
        inputApe.setAttribute('id', 'apellidoFlotado');
        inputApe.setAttribute('type', 'text');
        inputApe.setAttribute('name', 'apellido');
        inputApe.setAttribute('placeholder', 'Ingresa tu apellido');
        inputNom.setAttribute('aria-describedby', 'validacionApellido');    
        inputApe.setAttribute('required', 'true');
        divApe.appendChild(inputApe);
        let labelApe = d.createElement('label');
        labelApe.setAttribute('for', 'apellidoFlotado');
        labelApe.innerHTML = 'Apellido*';
        divApe.appendChild(labelApe);
        let spanApe = d.createElement('span');
        spanApe.setAttribute('id', 'validacionApellido');
        spanApe.setAttribute('class', 'textoForm');
        spanApe.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanApe.style.display = 'none';
        divApe.appendChild(spanApe);

        let divNro = d.createElement('div');
        divNro.setAttribute('class', 'form-floating mb-3 col-lg-12 validar');
        dtosPers.appendChild(divNro);
        let inputNro = d.createElement('input');
        inputNro.setAttribute('class', 'form-control');
        inputNro.setAttribute('id', 'nroFlotado');
        inputNro.setAttribute('type', 'tel');
        inputNro.setAttribute('name', 'telefono');
        inputNro.setAttribute('placeholder', 'Ingresa tu número de celular');
        inputNro.setAttribute('aria-describedby', 'validacionCelular');
        inputNro.setAttribute('required', 'true');
        divNro.appendChild(inputNro);
        let labelNro = d.createElement('label');
        labelNro.setAttribute('for', 'nroFlotado');
        labelNro.innerHTML = 'Celular*';
        divNro.appendChild(labelNro);
        let spanNro = d.createElement('span');
        spanNro.setAttribute('id', 'validacionCelular');
        spanNro.setAttribute('class', 'textoForm');
        spanNro.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanNro.style.display = 'none';
        divNro.appendChild(spanNro);        

        let divDire = d.createElement('div');
        divDire.setAttribute('class', 'form-floating mb-3 col-lg-8 validar');
        dtosPers.appendChild(divDire);
        let inputDire = d.createElement('input');
        inputDire.setAttribute('class', 'form-control');
        inputDire.setAttribute('id', 'direccionFlotada');
        inputDire.setAttribute('type', 'text');
        inputDire.setAttribute('name', 'direccion');
        inputDire.setAttribute('placeholder', 'Ingresá tu dirección');
        inputDire.setAttribute('required', 'true');
        inputDire.setAttribute('aria-describedby', 'validacionDireccion');
        divDire.appendChild(inputDire);
        let labelDire = d.createElement('label');
        labelDire.setAttribute('for', 'direccionFlotada');
        labelDire.innerHTML = 'Dirección*';
        divDire.appendChild(labelDire);
        let spanDire = d.createElement('span');
        spanDire.setAttribute('id', 'validacionDireccion');
        spanDire.setAttribute('class', 'textoForm');
        spanDire.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanDire.style.display = 'none';
        divDire.appendChild(spanDire);        

        let divNum = d.createElement('div');
        divNum.setAttribute('class', 'form-floating mb-3 col-lg-4');
        dtosPers.appendChild(divNum);
        let inputNum = d.createElement('input');
        inputNum.setAttribute('class', 'form-control');
        inputNum.setAttribute('id', 'numeroFlotado');
        inputNum.setAttribute('type', 'number');
        inputNum.setAttribute('name', 'numeracion');
        inputNum.setAttribute('placeholder', 'Ingresa tu numeracion');
        inputNum.setAttribute('min', '0');
        inputNum.setAttribute('max', '27700');
        divNum.appendChild(inputNum);
        let labelNum = d.createElement('label');
        labelNum.setAttribute('for', 'numeroFlotado');
        labelNum.innerHTML = 'Numeración';
        divNum.appendChild(labelNum);

        let divMail = d.createElement('div');
        divMail.setAttribute('class', 'form-floating mb-3 col-lg-8 validar');
        dtosPers.appendChild(divMail);
        let inputMail = d.createElement('input');
        inputMail.setAttribute('class', 'form-control');
        inputMail.setAttribute('id', 'emailFlotado');
        inputMail.setAttribute('type', 'email');
        inputMail.setAttribute('name', 'email');
        inputMail.setAttribute('placeholder', 'tumail@mail.com');
        inputMail.setAttribute('required', 'true');
        inputMail.setAttribute('aria-describedby', 'validacionMail');
        divMail.appendChild(inputMail);
        let labelMail = d.createElement('label');
        labelMail.setAttribute('for', 'emailFlotado');
        labelMail.innerHTML = 'Email*';
        divMail.appendChild(labelMail);
        let spanMail = d.createElement('span');
        spanMail.setAttribute('id', 'validacionMail');
        spanMail.setAttribute('class', 'textoForm');
        spanMail.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanMail.style.display = 'none';
        divMail.appendChild(spanMail);        

        let divDate = d.createElement('div');
        divDate.setAttribute('class', 'form-floating mb-3 col-lg-4' );
        dtosPers.appendChild(divDate);
        let inputDate = d.createElement('input');
        inputDate.setAttribute('class', 'form-control');
        inputDate.setAttribute('id', 'dateFlotado');
        inputDate.setAttribute('type', 'date');
        inputDate.setAttribute('name', 'date');
        inputDate.setAttribute('placeholder', 'Ingresa la fecha de entrega');
        divDate.appendChild(inputDate);
        let labelDate = d.createElement('label');
        labelDate.setAttribute('for', 'dateFlotado');
        labelDate.innerHTML = 'Fecha de entrega';
        divDate.appendChild(labelDate);

        let dtosPago = d.createElement('fieldset');
        dtosPago.setAttribute('class', 'row justify-content-center');
        form.appendChild(dtosPago);
        let legendPago = d.createElement('legend');
        legendPago.innerHTML = 'Forma de pago';
        dtosPago.appendChild(legendPago);

        let divCheck1 = d.createElement('div');
        divCheck1.setAttribute('class', 'form-check col-lg-8');
        dtosPago.appendChild(divCheck1);
        let inputTrans = d.createElement('input');
        inputTrans.setAttribute('class', 'form-check-input');
        inputTrans.setAttribute('type', 'radio');
        inputTrans.setAttribute('name', 'flexRadioDefault');
        inputTrans.setAttribute('id', 'transferencia');
        inputTrans.setAttribute('checked', 'true');
        divCheck1.appendChild(inputTrans);
        let infoTrans = d.createElement('p');
        infoTrans.setAttribute('class', 'txtInfo');
        infoTrans.innerHTML = 'Únicamente por transferencia, NO depósito. Tenés 2 horas para completar el pago sino será cancelado el pedido automáticamente.';
        dtosPago.appendChild(infoTrans);
        let labelTrans = d.createElement('label');
        labelTrans.setAttribute('class', 'form-check-label');
        labelTrans.setAttribute('for', 'transferencia');
        labelTrans.innerHTML = 'Transferencia Bancaria Directa (10% OFF)';
        divCheck1.appendChild(labelTrans);

        let divCheck2 = d.createElement('div');
        divCheck2.setAttribute('class', 'form-check col-lg-8');
        dtosPago.appendChild(divCheck2);
        let inputTarj = d.createElement('input');
        inputTarj.setAttribute('class', 'form-check-input');
        inputTarj.setAttribute('type', 'radio');
        inputTarj.setAttribute('name', 'flexRadioDefault');
        inputTarj.setAttribute('id', 'tarjeta');
        inputTrans.onclick = ()=>{
            divNroTarj.style.display = 'none';
            inputNroTarj.removeAttribute('required');
            divTtTarj.style.display = 'none';
            inputTtTarj.removeAttribute('required');
            divVenc.style.display = 'none';
            inputVenc.removeAttribute('required');
            divCodSeg.style.display = 'none';
            inputCodSeg.removeAttribute('required');
            divCuotas.style.display = 'none';
            divDNI.style.display = 'none'; 
            inputDNI.removeAttribute('required');
            infoTrans.style.display = 'block';
            pMercado.style.display = 'none';
        }        
        inputTarj.onclick = ()=>{
            divNroTarj.style.display = 'block';
            inputNroTarj.setAttribute('required', 'true');
            divTtTarj.style.display = 'block';
            inputTtTarj.setAttribute('required', 'true');
            divVenc.style.display = 'block';
            inputVenc.setAttribute('required', 'true');
            divCodSeg.style.display = 'block';
            inputCodSeg.setAttribute('required', 'true');
            divCuotas.style.display = 'block'; 
            divDNI.style.display = 'block';
            inputDNI.setAttribute('required', 'true');
            infoTrans.style.display = 'none';
            pMercado.style.display = 'none';
        }
        divCheck2.appendChild(inputTarj);
        let labelTarj = d.createElement('label');
        labelTarj.setAttribute('class', 'form-check-label');
        labelTarj.setAttribute('for', 'tarjeta');
        labelTarj.innerHTML = 'Tarjeta de Crédito';
        divCheck2.appendChild(labelTarj);
        let divNroTarj = d.createElement('div');
        divNroTarj.setAttribute('class', 'form-floating mb-2 col-lg-5 validar');
        dtosPago.appendChild(divNroTarj);
        let inputNroTarj = d.createElement('input');
        inputNroTarj.setAttribute('class', 'form-control');
        inputNroTarj.setAttribute('id', 'nroTarjFlotado');
        inputNroTarj.setAttribute('type', 'number');
        inputNroTarj.setAttribute('name', 'nrotarj');
        inputNroTarj.setAttribute('placeholder', 'Ingresa el número de la tarjeta');
        inputNroTarj.setAttribute('aria-describedby', 'validacionTarj');
        divNroTarj.appendChild(inputNroTarj);
        let labelNroTarj = d.createElement('label');
        labelNroTarj.setAttribute('for', 'nroTarjFlotado');
        labelNroTarj.innerHTML = 'Número de tarjeta';
        divNroTarj.appendChild(labelNroTarj);
        let spanNroTarj = d.createElement('span');
        spanNroTarj.setAttribute('id', 'validacionTarj');
        spanNroTarj.setAttribute('class', 'textoForm');
        spanNroTarj.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanNroTarj.style.display = 'none';
        divNroTarj.appendChild(spanNroTarj); 
        divNroTarj.style.display = 'none';

        let divTtTarj = d.createElement('div');
        divTtTarj.setAttribute('class', 'form-floating mb-2 col-lg-5 validar');
        dtosPago.appendChild(divTtTarj);
        let inputTtTarj = d.createElement('input');
        inputTtTarj.setAttribute('class', 'form-control');
        inputTtTarj.setAttribute('id', 'ttTarjFlotado');
        inputTtTarj.setAttribute('type', 'text');
        inputTtTarj.setAttribute('name', 'ttTarjeta');
        inputTtTarj.setAttribute('placeholder', 'Titular de la tarjeta');
        inputTtTarj.setAttribute('aria-describedby', 'validacionTtTarj');
        divTtTarj.appendChild(inputTtTarj);
        let labelTtTarj = d.createElement('label');
        labelTtTarj.setAttribute('for', 'ttTarjFlotado');
        labelTtTarj.innerHTML = 'Titular de la tarjeta';
        divTtTarj.appendChild(labelTtTarj);
        divTtTarj.style.display = 'none';
        let spanTtTarj = d.createElement('span');
        spanTtTarj.setAttribute('id', 'validacionTtTarj');
        spanTtTarj.setAttribute('class', 'textoForm');
        spanTtTarj.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanTtTarj.style.display = 'none';
        divTtTarj.appendChild(spanTtTarj); 

        let divVenc = d.createElement('div');
        divVenc.setAttribute('class', 'form-floating mb-2 col-lg-5 validar');
        dtosPago.appendChild(divVenc);
        let inputVenc = d.createElement('input');
        inputVenc.setAttribute('class', 'form-control');
        inputVenc.setAttribute('id', 'vencFlotado');
        inputVenc.setAttribute('type', 'month');
        inputVenc.setAttribute('name', 'vencTarj');
        inputVenc.setAttribute('placeholder', 'Ingrese vencimiento de tarjeta');
        inputVenc.setAttribute('aria-describedby', 'validacionVenc');
        divVenc.appendChild(inputVenc);  
        let labelVenc = d.createElement('label');
        labelVenc.setAttribute('for', 'vencFlotado');
        labelVenc.innerHTML = 'Vencimiento (mes/año)';   
        divVenc.appendChild(labelVenc);
        divVenc.style.display = 'none';
        let spanVenc = d.createElement('span');
        spanVenc.setAttribute('id', 'validacionVenc');
        spanVenc.setAttribute('class', 'textoForm');
        spanVenc.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanVenc.style.display = 'none';
        divVenc.appendChild(spanVenc); 

        let divCodSeg = d.createElement('div');
        divCodSeg.setAttribute('class', 'form-floating mb-2 col-lg-5 validar');
        dtosPago.appendChild(divCodSeg);  
        let inputCodSeg = d.createElement('input');
        inputCodSeg.setAttribute('class', 'form-control');
        inputCodSeg.setAttribute('id', 'codigoSegFlotado');
        inputCodSeg.setAttribute('type', 'number');
        inputCodSeg.setAttribute('name', 'codigoSeguridad');
        inputCodSeg.setAttribute('placeholder', 'Ingrese código de seguridad de tarjeta');
        inputVenc.setAttribute('aria-describedby', 'validacionCS');
        divCodSeg.appendChild(inputCodSeg); 
        let labelCodSeg = d.createElement('label');
        labelCodSeg.setAttribute('for', 'codigoSegFlotado');
        labelCodSeg.innerHTML = 'CVV';
        divCodSeg.appendChild(labelCodSeg);  
        let p = d.createElement('p');
        p.setAttribute('class', 'aclaracion');
        p.innerHTML = '*Código de seguridad de 3 o 4 dígitos numéricos en el reverso de la tarjeta.';            
        divCodSeg.appendChild(p); 
        divCodSeg.style.display = 'none';
        let spanCS = d.createElement('span');
        spanCS.setAttribute('id', 'validacionCS');
        spanCS.setAttribute('class', 'textoForm');
        spanCS.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanCS.style.display = 'none';
        divCodSeg.appendChild(spanCS);

        let divCuotas = d.createElement('div');
        divCuotas.setAttribute('class', 'form-floating col-lg-5');
        dtosPago.appendChild(divCuotas);   
        let selector = d.createElement('select');
        selector.setAttribute('class', 'form-select');
        selector.setAttribute('id', 'floatingSelect');
        selector.setAttribute('aria-label', 'Elige cantidad de cuotas');
        divCuotas.appendChild(selector);
        divCuotas.style.display = 'none';        

        let unPago = d.createElement('option');
        unPago.setAttribute('selected', 'true');
        unPago.setAttribute('value', '1');
        unPago.innerHTML = `1 cuota de $${carritoCompras.Total}`;
        selector.appendChild(unPago);
        let tresPago = d.createElement('option');
        tresPago.setAttribute('value', '2');
        tresPago.innerHTML = `3 cuotas de $${Math.round(carritoCompras.Total / 3)}`;
        selector.appendChild(tresPago);
        let seisPago = d.createElement('option');
        seisPago.setAttribute('value', '3');
        seisPago.innerHTML = `6 cuotas de $${Math.round(carritoCompras.Total / 6)}`;
        selector.appendChild(seisPago);
        let docePago = d.createElement('option');
        docePago.setAttribute('value', '4');
        docePago.innerHTML = `12 cuotas de $${Math.round(carritoCompras.Total / 12)}`;
        selector.appendChild(docePago);
        let labelCuotas = d.createElement('label');
        labelCuotas.setAttribute('for', 'floatingSelect');
        labelCuotas.innerHTML = 'Seleccione cantidad de cuotas';
        divCuotas.appendChild(labelCuotas);

        let divDNI = d.createElement('div');
        divDNI.setAttribute('class', 'form-floating mb-2 col-lg-5 validar');
        dtosPago.appendChild(divDNI);
        let inputDNI = d.createElement('input');
        inputDNI.setAttribute('class', 'form-control');
        inputDNI.setAttribute('id', 'dniFlotado');
        inputDNI.setAttribute('type', 'number');
        inputDNI.setAttribute('name', 'dni');
        inputDNI.setAttribute('placeholder', 'Ingrese su DNI');
        inputDNI.setAttribute('aria-describedby', 'validacionDNI');
        divDNI.appendChild(inputDNI);
        let labelDNI = d.createElement('label');
        labelDNI.setAttribute('for', 'dniFlotado');
        labelDNI.innerHTML = 'Documento de titular*';
        divDNI.appendChild(labelDNI);
        divDNI.style.display = 'none';
        let spanDNI = d.createElement('span');
        spanDNI.setAttribute('id', 'validacionDNI');
        spanDNI.setAttribute('class', 'textoForm');
        spanDNI.innerHTML = 'Debe completar este campo. No puede dejarlo vacío.';
        spanDNI.style.display = 'none';
        divDNI.appendChild(spanDNI); 

        let divCheck3 = d.createElement('div');
        divCheck3.setAttribute('class', 'form-check col-lg-8');
        dtosPago.appendChild(divCheck3);
        let inputMercado = d.createElement('input');
        inputMercado.setAttribute('class', 'form-check-input');
        inputMercado.setAttribute('type', 'radio');
        inputMercado.setAttribute('name', 'flexRadioDefault');
        inputMercado.setAttribute('id', 'mercado');
        divCheck3.appendChild(inputMercado);
        let labelMercado = d.createElement('label');
        labelMercado.setAttribute('class', 'form-check-label');
        labelMercado.setAttribute('for', 'mercado');
        labelMercado.innerHTML = 'Mercado Pago';
        divCheck3.appendChild(labelMercado);
        let pMercado = d.createElement('p');
        pMercado.setAttribute('class', 'txtInfo');
        pMercado.innerHTML = 'Pagá de manera segura mediante Mercado Pago. Sólo para la República Argentina.';
        pMercado.style.display = 'none';
        dtosPago.appendChild(pMercado);
        inputMercado.onclick = ()=>{
            divNroTarj.style.display = 'none';
            inputNroTarj.removeAttribute('required');
            divTtTarj.style.display = 'none';
            inputTtTarj.removeAttribute('required');
            divVenc.style.display = 'none';
            inputVenc.removeAttribute('required');
            divCodSeg.style.display = 'none';
            inputCodSeg.removeAttribute('required');
            divCuotas.style.display = 'none';
            divDNI.style.display = 'none';
            inputDNI.removeAttribute('required');
            infoTrans.style.display = 'none'; 
            pMercado.style.display = 'block';
        }              

        let borrar = d.createElement('input');
        borrar.setAttribute('type', 'reset');
        borrar.setAttribute('value', 'limpiar datos');
        borrar.setAttribute('class', 'btn fondoBoton2 mt-3 me-3');
        borrar.onclick = function(){
            divNroTarj.style.display = 'none';
            inputNroTarj.removeAttribute('required');
            divTtTarj.style.display = 'none';
            inputTtTarj.removeAttribute('required');
            divVenc.style.display = 'none';
            inputVenc.removeAttribute('required');
            divCodSeg.style.display = 'none';
            inputCodSeg.removeAttribute('required');
            divCuotas.style.display = 'none';
            divDNI.style.display = 'none';
            inputDNI.removeAttribute('required');
            infoTrans.style.display = 'none';
            pMercado.style.display = 'none';  
            infoTrans.style.display = 'block';          
        }
        form.appendChild(borrar);

        let enviar = d.createElement('input');
        enviar.setAttribute('type', 'submit');
        enviar.setAttribute('value', 'Confirmar compra');
        enviar.setAttribute('class', 'btn fondoBoton mt-3');
        form.appendChild(enviar);
        let pForm = d.createElement('p');
        pForm.setAttribute('id', 'pForm');
        pForm.innerHTML = 'Debe completar todos los datos requeridos';
        form.appendChild(pForm);
        pForm.style.display = 'none';
        let iconP = d.createElement('i');
        iconP.setAttribute('class', 'bi bi-exclamation-circle');
        pForm.appendChild(iconP);
        cerrarModal.onclick = function(){modalDatos.style.display = 'none'; } 
        
        function PresionarEsc(e){
            let esc = e.keyCode; 
            if(esc == 27){ 
            modalDatos.style.display = 'none';
            }
        }
        window.onkeydown = PresionarEsc; 

        let inputs = d.querySelectorAll('input');

        let campos = {
            nombre: false,
            apellido: false,
            telefono: false,
            direccion: false,
            email: false,
            numeroTarjeta: false,
            ttTarjeta: false,
            vencTarj: false,
            codigoSeguridad: false,
            dni: false

        }
        
        function ValidarForm(e){
            switch(e.target.name){
                case 'nombre':
                   if(/^\s+$/.test(e.target.value) || inputNom.value == 0){
                     inputNom.classList.add('inputNoValido');
                     inputNom.classList.remove('inputValido');
                     inputNom.classList.add('is-invalid');
                     inputNom.classList.remove('is-valid');
                     spanNom.style.display = 'block';
                     campos['nombre'] = false;
                   }
                   else{
                       inputNom.classList.remove('inputNoValido');
                       inputNom.classList.add('inputValido');
                       inputNom.classList.remove('is-invalid');
                       inputNom.classList.add('is-valid');
                       spanNom.style.display = 'none';
                       campos['nombre'] = true;
                    }
                break;
                case 'apellido':
                    if(/^\s+$/.test(e.target.value) || inputApe.value == 0){
                        inputApe.classList.add('inputNoValido');
                        inputApe.classList.remove('inputValido');
                        inputApe.classList.add('is-invalid');
                        inputApe.classList.remove('is-valid');
                        spanApe.style.display = 'block';
                        campos['apellido'] = false;
                      }
                      else{
                          inputApe.classList.remove('inputNoValido');
                          inputApe.classList.add('inputValido');
                          inputApe.classList.remove('is-invalid');
                          inputApe.classList.add('is-valid');
                          spanApe.style.display = 'none';
                          campos['apellido'] = true;
                      }
                break;
                case 'telefono':
                    if(/^\s+$/.test(e.target.value) || inputNro.value == 0){
                        inputNro.classList.add('inputNoValido');
                        inputNro.classList.remove('inputValido');
                        inputNro.classList.add('is-invalid');
                        inputNro.classList.remove('is-valid');
                        spanNro.style.display = 'block';
                        campos['telefono'] = false;
                      }
                      else{
                          inputNro.classList.remove('inputNoValido');
                          inputNro.classList.add('inputValido');
                          inputNro.classList.remove('is-invalid');
                          inputNro.classList.add('is-valid');
                          spanNro.style.display = 'none';
                          campos['telefono'] = true;
                      }
                break;
                case 'direccion':
                    if(/^\s+$/.test(e.target.value) || inputDire.value == 0){
                        inputDire.classList.add('inputNoValido');
                        inputDire.classList.remove('inputValido');
                        inputDire.classList.add('is-invalid');
                        inputDire.classList.remove('is-valid');
                        spanDire.style.display = 'block';
                        campos['direccion'] = false;
                      }
                      else{
                         inputDire.classList.remove('inputNoValido');
                         inputDire.classList.add('inputValido');
                         inputDire.classList.remove('is-invalid');
                         inputDire.classList.add('is-valid');
                         spanDire.style.display = 'none';
                         campos['direccion'] = true;
                      }
                break; 
                case 'email':
                    if(/^\s+$/.test(e.target.value) || inputMail.value == 0){
                        inputMail.classList.add('inputNoValido');
                        inputMail.classList.remove('inputValido');
                        inputMail.classList.add('is-invalid');
                        inputMail.classList.remove('is-valid');
                        spanMail.style.display = 'block';
                        campos['email'] = false;
                      }
                      else{
                        inputMail.classList.remove('inputNoValido');
                        inputMail.classList.add('inputValido');
                        inputMail.classList.remove('is-invalid');
                        inputMail.classList.add('is-valid');
                        spanMail.style.display = 'none';
                        campos['email'] = true;
                      }
                break;
                case 'nrotarj':
                    if(inputNroTarj.length==0 || inputNroTarj.value == 0){
                        inputNroTarj.classList.add('inputNoValido');
                        inputNroTarj.classList.remove('inputValido');
                        inputNroTarj.classList.add('is-invalid');
                        inputNroTarj.classList.remove('is-valid');
                        spanNroTarj.style.display = 'block';
                        campos['numeroTarjeta'] = false;                        
                    }
                    else{
                        inputNroTarj.classList.remove('inputNoValido');
                        inputNroTarj.classList.add('inputValido');
                        inputNroTarj.classList.remove('is-invalid');
                        inputNroTarj.classList.add('is-valid');
                        spanNroTarj.style.display = 'none';
                        campos['numeroTarjeta'] = true;
                      }
                break;    
               case 'ttTarjeta':
                    if(inputTtTarj.length==0 || /^\s+$/.test(e.target.value) || inputTtTarj.value == 0){
                        inputTtTarj.classList.add('inputNoValido');
                        inputTtTarj.classList.remove('inputValido');
                        inputTtTarj.classList.add('is-invalid');
                        inputTtTarj.classList.remove('is-valid');
                        spanTtTarj.style.display = 'block';
                        campos['ttTarjeta'] = false;                        
                    }
                    else{
                        inputTtTarj.classList.remove('inputNoValido');
                        inputTtTarj.classList.add('inputValido');
                        inputTtTarj.classList.remove('is-invalid');
                        inputTtTarj.classList.add('is-valid');
                        spanTtTarj.style.display = 'none';
                        campos['ttTarjeta'] = true;
                      }
                break;
                case 'vencTarj':
                    if(inputVenc.length==0 || /^\s+$/.test(e.target.value) || inputVenc.value == 0){
                        inputVenc.classList.add('inputNoValido');
                        inputVenc.classList.remove('inputValido');
                        inputVenc.classList.add('is-invalid');
                        inputVenc.classList.remove('is-valid');
                        spanVenc.style.display = 'block';
                        campos['vencTarj'] = false;                        
                    }
                    else{
                        inputVenc.classList.remove('inputNoValido');
                        inputVenc.classList.add('inputValido');
                        inputVenc.classList.remove('is-invalid');
                        inputVenc.classList.add('is-valid');
                        spanVenc.style.display = 'none';
                        campos['vencTarj'] = true;
                      }
                break; 
                case 'codigoSeguridad':
                    if(inputCodSeg.length==0 || /^\s+$/.test(e.target.value) || inputCodSeg.value == 0){
                        inputCodSeg.classList.add('inputNoValido');
                        inputCodSeg.classList.remove('inputValido');
                        inputCodSeg.classList.add('is-invalid');
                        inputCodSeg.classList.remove('is-valid');
                        spanCS.style.display = 'block';
                        campos['codigoSeguridad'] = false;                        
                    }
                    else{
                        inputCodSeg.classList.remove('inputNoValido');
                        inputCodSeg.classList.add('inputValido');
                        inputCodSeg.classList.remove('is-invalid');
                        inputCodSeg.classList.add('is-valid');
                        spanCS.style.display = 'none';
                        campos['codigoSeguridad'] = true;
                      }
                break;  
                case 'dni':
                    if(inputDNI.length==0 || /^\s+$/.test(e.target.value) || inputDNI.value == 0){
                        inputDNI.classList.add('inputNoValido');
                        inputDNI.classList.remove('inputValido');
                        inputDNI.classList.add('is-invalid');
                        inputDNI.classList.remove('is-valid');
                        spanDNI.style.display = 'block';
                        campos['dni'] = false;                        
                    }
                    else{
                        inputDNI.classList.remove('inputNoValido');
                        inputDNI.classList.add('inputValido');
                        inputDNI.classList.remove('is-invalid');
                        inputDNI.classList.add('is-valid');
                        spanDNI.style.display = 'none';
                        campos['dni'] = true;
                      }
                break;  
            }
        }

        inputs.forEach((input) =>{
           input.addEventListener('keyup', ValidarForm);
           input.addEventListener('blur', ValidarForm);
        });

        enviar.addEventListener('click', (e)=>{
            if(campos.nombre && campos.apellido && campos.telefono && campos.direccion && campos.email){
                localStorage.clear();
            }
            else{
                pForm.style.display = 'block';
            }             
        })

    }


}

let divGrac = d.createElement('div');
divGrac.setAttribute('id', 'gracias');
d.body.appendChild(divGrac);
let imgGrac = d.createElement('img');
imgGrac.setAttribute('src', 'imagenes/check-circle.svg');
imgGrac.setAttribute('alt', 'confirmacion');
imgGrac.setAttribute('width', '60');
imgGrac.setAttribute('height', '60');
divGrac.appendChild(imgGrac);
let titGrac = d.createElement('h2');
titGrac.innerHTML = '¡Gracias por tu compra!';
divGrac.appendChild(titGrac);
let closeDiv = d.createElement('a');
closeDiv.setAttribute('href', '#');
closeDiv.innerHTML = 'X';
divGrac.appendChild(closeDiv);
closeDiv.onclick=()=>{divGrac.style.display = 'none';} 
let pGrac = d.createElement('p');
pGrac.innerHTML = 'Te estará llegando a tu mail la factura, si no te llegó corroborá tu bandeja de spam.';
divGrac.appendChild(pGrac);
let pGrac2 = d.createElement('p');
pGrac2.innerHTML = '¡Que lo disfrutes!';
divGrac.appendChild(pGrac2);

