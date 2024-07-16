const datosCards = [];

let objetoContenidoNotas = {};
const btnAgregar = document.getElementById('create');
const btnBorrar = document.getElementById('delete');
let idGlobal = 0;

btnAgregar.addEventListener('click', (e) =>{
    e.preventDefault();
    let tituloVacio = document.getElementById('titulo').value;
    let textoVacio = document.getElementById('nota').value;

    idGlobal = idGlobal +1 ;
    if (tituloVacio.length !== 0 & textoVacio.length !== 0) {
        let titulo = document.getElementById('titulo').value;
        let contenidoNota = document.getElementById('nota').value;

        objetoContenidoNotas = {
        id : idGlobal,
        tituloNota : titulo,
        texto : contenidoNota,
        realizada : false
        };

        datosCards.push(objetoContenidoNotas);
        document.getElementById('list').innerHTML += 
        '<div class="card" id="' + idGlobal + '"'+ '>' +
            '<div class="card-header d-flex justify-content-between">'+ `<input onClick="marcarRealizada(${idGlobal})" type="checkbox" ${contenidoNota.realizada? 
                "checked": ""}><h4>`+titulo +'</h4><i class = "fas fa-trash-alt trashIcon icon" onclick="borrarNota('+ idGlobal+ ')"></i>'+'</div>'+
            '<div class="card-body">'+
                '<p class="card-text">' + contenidoNota + '</p>'+ 
            '</div>' +
        '</div>';
    }
    else if(tituloVacio.length === 0 || textoVacio.length === 0){
        alert('Ningun campo puede estar vacio, por favor llena los campos faltantes');
    }
    console.log(datosCards);
    return idGlobal;
});

function borrarNota(idObtenido){
    
    const stringId = String(idObtenido);
    const borrar = document.getElementById(stringId);
    borrar.remove();
    datosCards.splice(idObtenido - 1, 1);
}

btnBorrar.addEventListener('click', (x) => {
    x.preventDefault();
    document.getElementById('titulo').value = ' ';
    document.getElementById('nota').value = '';
});

function marcarRealizada (notaId){
    if (datosCards[notaId -1].realizada === false) {
        datosCards[notaId -1].realizada = true;
    }
    else if(datosCards[notaId -1].realizada === true){
        datosCards[notaId -1].realizada = false;
    }
    return datosCards
}


function filtro() {
    let inputChecked = document.getElementById('filtroRealizada');
    if(inputChecked.checked){
        for (let i = 0; i < datosCards.length; i++){
            if(datosCards[i].realizada === false){
                const filter = document.getElementById(i + 1);
                filter.classList.add("filter");
            }
        }
    }
    else {
        for(let x = 0; x < datosCards.length; x++){
            const filter = document.getElementById(x +1);
            filter.classList.remove("filter");
        }
    }
}

document.querySelector("#busqueda").addEventListener('input', filtroTitulo);

function filtroTitulo(){
    const searchInput = document.querySelector('#busqueda');
    const filtrar = searchInput.value.toLowerCase();
    const listaTitulo = document.querySelectorAll('.card');

    listaTitulo.forEach((item) =>{
        let text = item.textContent;
        if(text.toLocaleLowerCase().includes(filtrar.toLocaleLowerCase())){
            item.classList.remove('filter');
        }
        else{
            item.classList.add('filter');
        }
    })
}
