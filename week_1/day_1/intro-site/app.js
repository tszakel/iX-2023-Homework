let intro = document.querySelector('.intro');
let welcome = document.querySelector('.welcome');
let welcomeSpan = document.querySelectorAll('.hello');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        welcomeSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');

            }, (idx + 1) * 400)
        })

        setTimeout(() => {
            welcomeSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000)

        setTimeout(() => {
            intro.style.top = '-100vh'
        },2300)
    })
})