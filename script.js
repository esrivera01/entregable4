document.addEventListener('DOMContentLoaded', () => {
    // Reloj en tiempo real
    const reloj = document.getElementById('reloj');
    setInterval(() => {
        const ahora = new Date();
        reloj.textContent = ahora.toLocaleTimeString();
    }, 1000);

    // Confirmación al enviar el formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        const confirmar = confirm('¿Está seguro de que desea enviar este formulario?');
        if (!confirmar) {
            e.preventDefault();
        }
    });
});
