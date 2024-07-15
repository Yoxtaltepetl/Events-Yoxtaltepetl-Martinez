const formularioImc = document.getElementById('formulario');
console.log(formularioImc);

formularioImc.addEventListener("submit",  (e) =>{
    e.preventDefault();
    console.log("Conexion con exito");

    let altura = parseInt(document.getElementById('altura').value);
    let peso = parseInt(document.getElementById('peso').value);
    console.log(peso);
    console.log(altura);
    
    let imc = (peso/((altura/100)**2));
    console.log(imc);

    document.getElementById('resultado').value = imc.toFixed(2);
});



let pesoMexicano = document.getElementById('pesoMexicano').value = 17.83;
let dolarEstadounidense = document.getElementById('dolarEstadosUnidos').value = 1;


let peso = document.getElementById('pesoMexicano');
let dolar = document.getElementById('dolarEstadosUnidos');

peso.addEventListener('focus', () =>{
    peso.addEventListener('keyup', () => {
        pesoMexicano = Number(document.getElementById('pesoMexicano').value);
        dolarEstadounidense = Number(document.getElementById('dolarEstadosUnidos').value);
        console.log(pesoMexicano);
        console.log(dolarEstadounidense);

        dolarEstadounidense = pesoMexicano/17.83;
        document.getElementById('dolarEstadosUnidos').value = dolarEstadounidense.toFixed(2);
    });
});

dolar.addEventListener('focus', () =>{
    dolar.addEventListener('keyup', () => {
        pesoMexicano = Number(document.getElementById('pesoMexicano').value);
        dolarEstadounidense = Number(document.getElementById('dolarEstadosUnidos').value);
        console.log(pesoMexicano);
        console.log(dolarEstadounidense);

        pesoMexicano = dolarEstadounidense * 17.83;
        document.getElementById('pesoMexicano').value = pesoMexicano.toFixed(2);
        
       
    });
})
