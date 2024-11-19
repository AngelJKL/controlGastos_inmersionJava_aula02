let listaNombresGastos = [];
let listaValoresGastos = [];
///funcion que se usa al  hacer click al boton

function clickBoton(){
    let nombreGasto = document.getElementById ('nombreGasto').value;
    let valorGasto =document.getElementById ('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);
    

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    
    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert ('Click del usuario')
    actualizarListaGastos();
}


function actualizarListaGastos(){

    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let htmlLista= '';
    let totalGastos= 0;
    listaNombresGastos.forEach ((elemento,posicion ) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li> ${elemento}- USD ${valorGasto.toFixed(2)}
            <button onclick="eliminarGasto (${posicion});">Eliminar </button>
        </li>` ;
        ///sumatoria total de gastos

        totalGastos +=Number(valorGasto);
        console.log(totalGastos)
    });
    
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);

    if (totalGastos>150){
        mostrarAlerta(totalGastos)
    }

    limpiar();
}


function limpiar(){
    let nombreGasto = document.getElementById ('nombreGasto').value = '';
    let valorGasto =document.getElementById ('valorGasto').value = '';
}

function eliminarGasto (posicion){
    console.log(posicion);
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}
 
function mostrarAlerta(totalGastos) {
    alert(`¡Alerta! El flujo de gasto es demasiado alto: USD ${totalGastos.toFixed(2)}`);
}