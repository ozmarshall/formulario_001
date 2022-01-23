function capturar() {//001 CREA LA FUNCION

    const arreglo_card = document.getElementById("arreglo_card");//010 defino una variable para enviarlo al index
    console.log(arreglo_card);

    const form = document.querySelector("form");//002 ATRAPAS AL FORMULARIO

    form.addEventListener("submit", function (event) {//003 LLAMAS AL FORMULARIO ATRAVEZ DE SUS VARIABLES
        event.preventDefault();//004 LE QUITAS EL RESET A TU FROMULARIO

        const name = this.querySelector(".minombre");//005 CREA VARIABLE Y LLAMA LOS DATOS INSERTADOS
        const lastname = this.querySelector(".miapellido");//005 CREA VARIABLE Y LLAMA LOS DATOS INSERTADOS
        const age = this.querySelector(".miedad");//005 CREA VARIABLE Y LLAMA LOS DATOS INSERTADOS
        const country = this.querySelector(".mipais");//005 CREA VARIABLE Y LLAMA LOS DATOS INSERTADOS
        const yurl = this.querySelector(".miurl");//005 CREA VARIABLE Y LLAMA LOS DATOS INSERTADOS
        const mail = this.querySelector(".micorreo");//005 CREA VARIABLE Y LLAMA LOS DATOS INSERTADOS
        const areaa = this.querySelector(".miarea");//005 CREA VARIABLE Y LLAMA LOS DATOS INSERTADOS


        console.log("%O", name.value);//006 IMPRIMER PARA VERIFICAR
        console.log(lastname.value);//006 IMPRIMER PARA VERIFICAR
        console.log(age.value);//006 IMPRIMER PARA VERIFICAR
        console.log(country.value);//006 IMPRIMER PARA VERIFICAR
        console.log(yurl.value);//006 IMPRIMER PARA VERIFICAR
        console.log(mail.value);//006 IMPRIMER PARA VERIFICAR
        console.log(areaa.value);//006 IMPRIMER PARA VERIFICAR

        const articulo = document.createElement('div');//007 CREAMOS CON CREATE_ELEMENT ATRAVEZ DE VARIABLE
        console.log("%O", articulo);//008 IMPRIMES PARA VERIFICAR

        articulo.innerHTML = ` ${name.value} ${lastname.value} ${age.valu} ${country.valu} ${yurl.value}  ${mail.value} ${areaa.value} `;//009 INGRESAMOS LAS PROPIEDADES DEL OBJETO AL HTML
        
        arreglo_card.appendChild(articulo);//011 lo insertas en el contenerdor

    })
    
} capturar();







/*

    const producto = {
        nombre: 'manzana',
        categoria: 'frutas',
        precio: 1.99
      }
        
      console.log(producto); */

