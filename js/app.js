
/*let ingresos ={
    Quincena:9000,
    Venta:400
};
 
let egresos ={
    Renta:900,
    Ropa:400
};*/



const ingresos = [];
ingresos.push(new Ingreso('Salario', 200));
ingresos.push(new Ingreso('Venta auto', 5008));

const egresos = [];
egresos.push(new Egreso('Renta', 4000));
egresos.push(new Egreso('Ropa', 800));

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}


const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = totalEgresos() / totalIngresos()


    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);

    /* console.log(formatoMoneda(presupuesto));
     console.log(formatoPorcentaje(porcentajeEgreso));
     console.log(formatoMoneda(totalIngresos()));
     console.log(formatoMoneda(totalEgresos()));*/

}


const totalIngresos = () => {
    let totalIngresos = 0;
    ingresos.forEach((element) => { totalIngresos += element.valor })
    return totalIngresos;
}

const totalEgresos = () => {
    let totalEgresos = 0;
    egresos.forEach((element) => { totalEgresos += element.valor })
    return totalEgresos;
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });

}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    ingresos.forEach((element) => {
        ingresosHTML += crearIngresoHTML(element);
    })

    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}



const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
            <div class='elemento limpiarEstilos'>
                <div class='elemento_descripcion'>${ingreso.descripcion}</div>
                <div class='derecha limpiarEstilos'>
                    <div class='elemento_valor'>+${formatoMoneda(ingreso.valor)}</div>
                    <div class='elemento_eliminar'>
                        <button class='elemento_eliminar--btn'>
                        <span class="material-symbols-outlined"  onclick='eliminarIngreso(${ingreso.id})'>close</span>
                        </button>
                    </div>
                </div>
            </div>
            `;

    return ingresoHTML;
}

const eliminarIngreso = (id) => {
   /* const indice = (id) => {
        for (let i = 0; i < ingresos.length; i++) {
            if (id === ingresos[i].id) { return i; }
        }
    }*/

    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = () => {
    let egresosHTML = '';
    egresos.forEach((element) => {
        egresosHTML += crearEgresoHTML(element);
    })

    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
            <div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${egreso.descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
                    <div class=" elemento_porcentaje">
                    ${formatoPorcentaje(egreso.valor / totalEgresos())}</div>
                    <div class="elemento_eliminar">
                        <button class='elemento_eliminar--btn'>
                            <span class='material-symbols-outlined' onclick='eliminarEgreso(${egreso.id})'>close</span>
                            </button>
                    </div>
                </div>
            </div>
            `;

    return egresoHTML;
}

const eliminarEgreso = (id) => {
   /* const indice = (id) => {
        for (let i = 0; i < egresos.length; i++) {
            if (id === egresos[i].id) { return i; }
        }
    }*/

    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}



const agregarDato = () => {

    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
if(descripcion.value !== '' && valor.value !== ''){
    if (tipo.value === 'ingreso') {
       // const nuevoIngreso = new Ingreso(descripcion.value, +valor.value);
        ingresos.push(new Ingreso(descripcion.value, +valor.value));
        cargarCabecero();
        cargarIngresos();
    }
    else if (tipo.value === 'egreso') {
       // const nuevoEgreso = ;
        egresos.push(new Egreso(descripcion.value, +valor.value));
        cargarCabecero();
        cargarEgresos();
    }
}


//    document.getElementById("descripcion").value = "";
//    document.getElementById("valor").value = null;

}


/*const totalIngresos = () => {
    let totalIngresos = 0

    for (const key in ingresos)
        totalIngresos += ingresos[key]

    return totalIngresos
}

const totalEgresos = () => {
    let totalEgresos = 0

    for (const key in egresos)
        totalEgresos += egresos[key]

        
    return totalEgresos
}

const formatoMoneda = (valor) => {
 
    return valor.toLocaleString("es-MX", {
        style: "currency", currency: "MXN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString("es-MX", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}*/