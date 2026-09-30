const mountainBlue = document.querySelector("#mountain-blue");
const mountainRed = document.querySelector("#mountain-red");
const treesLeft = document.querySelector("#trees-left");
const treesBottom = document.querySelector("#trees-bottom");
const man = document.querySelector("#man");
const plants = document.querySelector("#plants");
const titulo = document.querySelector("#titulo");
const footerContent = document.querySelector("#footer-content");

let scrollY = window.scrollY;
let ticking = false;

// Delegar el repintado al navegador usando requestAnimationFrame
window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax();
            ticking = false;
        });
        ticking = true;
    }
});

function updateParallax() {
    // Usar 'transform: translate' es exponencialmente más rápido y fluido que 'left' o 'right'
    if (mountainBlue) mountainBlue.style.transform = `translateX(${scrollY * 0.3}px)`;
    if (mountainRed) mountainRed.style.transform = `translateX(${scrollY * 0.2}px)`;
    
    // Movimiento combinado para los árboles laterales
    if (treesLeft) treesLeft.style.transform = `translate(${scrollY * -0.5}px, ${scrollY * 0.1}px)`;
    if (treesBottom) treesBottom.style.transform = `translateX(${scrollY * 0.4}px)`;
    
    if (man) man.style.transform = `translateX(${scrollY * -0.6}px)`;
    if (plants) plants.style.transform = `translateX(${scrollY * -0.9}px)`;
    
    // El título se mueve ligeramente a la derecha mientras hace scroll
    // Conservamos el translateY(-50%) original definido en CSS
    if (titulo) titulo.style.transform = `translate(${scrollY * 1.2}px, -50%)`;




    
}