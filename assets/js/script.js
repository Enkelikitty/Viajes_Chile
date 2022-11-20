//cambio color navbar
function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}

window.addEventListener('scroll', scrollValue);

//cerrar tarjeta quienes somos
$(document).ready(function() {
    $("#QS").click(function(){
    $(".c-cuerpo").toggle();
  });
});  

//Tooltips
var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})
//deshabilitar boton enviar contacto
$(document).ready(function() {
    $('.form-control').on('input change', function() {
        if($(this).val() != '') {
            $('#submit').prop('disabled', false);
        } else {
            $('#submit').prop('disabled', true);
        }
    });
});
