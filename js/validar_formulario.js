$(document).ready(function() {
    jQuery.validator.addMethod("letras", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
      }, "Debe tener solo letras");

    jQuery.validator.addMethod("mail", function(value, element) {
    return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
    }, 'Por favor ingrese un correo valido.');

    jQuery.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
       }, "Debe seleccionar una region.");


    $("#formulario").validate({
        rules: {
            correo:{
                mail:true,
                required: true
            },
            run:{
                required: true
            },
            nombre:{
                required: true,
                letras:true
            },
            nacimiento:{
                required: true
            },
            regiones:{
                valueNotEquals: true
            },
            comunas:{
                required: true
            },
            tipovivienda:{
                required: true
            }
        },
        messages:{
            correo:{
                required:"Debe ingresar un correo de contacto."
            },
            run:{
                required:"El rut ingresado no es correcto."
            },
            nombre:{
                required:"Debe ingresar su nombre."
            },
            nacimiento:{
                required:"Debe ingresar una fecha."
            },
            tipovivienda:{
                required:"Debe selecionar un tipo de vivienda."
            }
        }
    });
});