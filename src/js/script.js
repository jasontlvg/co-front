// let a=document.getElementById('boton');
// let b=document.getElementById('boton2');
// const cuadro= document.getElementById('son');

// a.addEventListener('click',function(){
//     console.log('Exceleten');
//     cuadro.classList.toggle('animated');
// });

// b.addEventListener('click', function(){
//     console.log('sds')
//     cuadro.classList.toggle('desanimated');
// });

$('.example-1 .button').click(function(){
    $(this).parents('.example-1').toggleClass('is-transitioned');
  });