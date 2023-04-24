// scrollspy

$('body').scrollspy({target: 'menu-navegacion'});

//scroll suavizado

$('#menu-navegacion a').on('click', function(event){
    if(this.has != ""){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        })
    }
});