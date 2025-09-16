/* ========================================
   JAVASCRIPT PARA PANTALLA DE AMOR
   ======================================== */

/* ========================================
   ELEMENTOS DEL DOM
   ======================================== */

const btnVolver = document.getElementById('btn-volver');

/* ========================================
   FUNCIONES PRINCIPALES
   ======================================== */

// 🔙 Volver a pantalla inicial
function volverInicio() {
    // Redirigir de vuelta a la página principal
    window.location.href = 'index.html';
}

// 🎊 Función para crear efectos adicionales (opcional)
function efectosEspeciales() {
    // Aquí puedes agregar efectos especiales como confeti, sonidos, etc.
    console.log('💕 Efectos especiales activados');
}

/* ========================================
   EVENT LISTENERS
   ======================================== */

// 🔙 Botón volver al inicio
btnVolver.addEventListener('click', volverInicio);

// 🎨 Efecto adicional al cargar la página (opcional)
window.addEventListener('load', () => {
    // Pequeña animación de entrada
    const ventanaAmor = document.querySelector('.ventana-amor');
    if (ventanaAmor) {
        ventanaAmor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        ventanaAmor.style.opacity = '0';
        
        setTimeout(() => {
            ventanaAmor.style.transition = 'all 0.8s ease-out';
            ventanaAmor.style.transform = 'translate(-50%, -50%) scale(1)';
            ventanaAmor.style.opacity = '1';
        }, 200);
    }
});

// ⌨️ Tecla ESC para volver (opcional)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        volverInicio();
    }
});

/* ========================================
   INICIALIZACIÓN
   ======================================== */

console.log('💖 Pantalla de amor cargada correctamente');
console.log('💡 Presiona ESC para volver al inicio');