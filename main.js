let items = document.querySelector('.items-right');
let menu = document.getElementById('menu').addEventListener('click', function(){
    items.classList.toggle('hide');
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        800,
        'linear'
    )
});