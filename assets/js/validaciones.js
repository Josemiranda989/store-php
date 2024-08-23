$("#form_cat").submit(function () {
    let categorias = $("#categorias").val();

    if ($.trim(categorias) === '') {
        alert('debe completar la categoría \n -- José Miranda')
        return false;
    }

    return true;
})

$("#form_prod").submit(function () {
    let nombre = $("#nombre").val();
    let imagen = $("#imagen").val();
    let descripcion = $("#descripcion").val();
    let categoria = $("#categoria").val();

    let errores = []



    if ($.trim(nombre) === '') {
        errores.push('Debe ingresar un nombre')
    }

    //   if($.trim(imagen) === ''){
    //     errores.push('Debe ingresar una imagen')
    //  }

    if ($.trim(descripcion) === '') {
        errores.push('Debe ingresar una descripcion')
    }

    if ($.trim(categoria) === '') {
        errores.push('Debe ingresar una categoria')
    }
    
    if (errores.length > 0){
        errores.push ('-- José Miranda')
        alert(errores.join('\n'))
        return false
    }
    
    return true;

})