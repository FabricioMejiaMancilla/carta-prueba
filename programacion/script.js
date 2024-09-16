const texto = document.getElementById('text');
const mensaje = "Hola amor, espero que te guste este pequeño detalle que te hice, solo quería decirte que gracias por estos 6 meses que llevamos juntos. Te agradezco por estar conmigo y llegar a mi vida. Espero que podamos seguir más meses juntos. Te agradezco por todo lo que has hecho por mí. Lamento que a veces sea frío o no lo exprese como me gustaría. Trato de mejorar, espero que no te aburras por mi culpa. Sin más, solo te agradezco por llegar y hacerme feliz. Te amo, mi patita. ¡Feliz 6 meses! ❤️";

let index = 0;

function carta() {
    if (index < mensaje.length) {
        texto.innerHTML += mensaje.charAt(index);
        index++;
        setTimeout(carta, 200);
    }
}
window.onload = () => {
    carta();
};