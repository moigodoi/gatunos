window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

function valida_envia(){
    //valido el rut
    if (document.fvalida.run.value.length==0){
           alert("Tiene que escribir su Run")
           document.fvalida.run.focus()
           return 0;
    }else{
        const varut=Pn.validaRut(fvalida.run.value)
        if(varut===false){
            alert("run incorrecto")
            document.fvalida.run.focus()
             return 
        }
    }

    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
        alert("Tiene que escribir su Nombre")
        document.fvalida.nombre.focus()
        return 0;
 }
 
    //valido el fecvha nacimiento
    if (document.fvalida.nacimiento.value.length==0){
        alert("Tiene que escribir su Ferha de Nacimiento")
        document.fvalida.nacimiento.focus()
        return 0;
 }
 
    //valido la region
    if (document.fvalida.regiones.selectedIndex==0){
        alert("Tiene que seleccionar una Region")
        document.fvalida.comuna.focus()
        return 0;
 }

    //valido la comuna
    if (document.fvalida.comunas.selectedIndex==0){
        alert("Tiene que seleccionar una Ciudad")
        document.fvalida.comuna.focus()
        return 0;
 }

     //valido el telefono
     if (document.fvalida.telefono.value.length==0){
        alert("Tiene que escribir su telefono")
        document.fvalida.telefono.focus()
        return 0;
 }

    //valido tipo de vivienda
    if (document.fvalida.tipovivienda.selectedIndex==0){
        alert("Tiene que seleccionar un tipo de vivienda")
        document.fvalida.tipovivienda.focus()
        return 0;
 }


 
    //el formulario se envia


    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}

function dgv(T)    //digito verificador
{  
      var M=0,S=1;
	  for(;T;T=Math.floor(T/10))
      S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
      
//      alert(S?S-1:'k');
 }

 var Pn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		return (Pn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}
