/* ========================================
   CONFIGURACIÓN PRINCIPAL - PANTALLA AMISTAD
   ======================================== */

// 🔧 CÓDIGO SECRETO (cámbialo aquí)
const CODIGO_SECRETO = "amor2025";

// 📱 MENSAJES PERSONALIZABLES
const MENSAJES = {
    error: "Código incorrecto, inténtalo de nuevo",
    exito: "¡Código correcto! Mostrando mensaje especial..."
};

/* ========================================
   ELEMENTOS DEL DOM
   ======================================== */

const candado = document.getElementById('candado');
const modalCodigo = document.getElementById('modal-codigo');
const codigoInput = document.getElementById('codigo-input');
const btnConfirmar = document.getElementById('btn-confirmar');
const btnCancelar = document.getElementById('btn-cancelar');
const errorMensaje = document.getElementById('error-mensaje');

/* ========================================
   FUNCIONES PRINCIPALES
   ======================================== */

// 🔓 Mostrar modal del código
function mostrarModalCodigo() {
    modalCodigo.classList.remove('oculto');
    codigoInput.focus();
    // Limpiar campo y errores previos
    codigoInput.value = '';
    errorMensaje.classList.add('oculto');
}

// ❌ Ocultar modal del código
function ocultarModalCodigo() {
    modalCodigo.classList.add('oculto');
    codigoInput.value = '';
    errorMensaje.classList.add('oculto');
}

// ✅ Verificar código ingresado
function verificarCodigo() {
    const codigoIngresado = codigoInput.value.trim();
    
    if (codigoIngresado === CODIGO_SECRETO) {
        // Código correcto - redirigir a página de amor
        window.location.href = 'amor.html';
    } else {
        // Código incorrecto - mostrar error
        mostrarError();
    }
}

// ❌ Mostrar mensaje de error
function mostrarError() {
    errorMensaje.textContent = MENSAJES.error;
    errorMensaje.classList.remove('oculto');
    
    // Efecto visual en el input
    codigoInput.style.borderColor = '#f44336';
    codigoInput.value = '';
    
    // Restaurar color del borde después de 2 segundos
    setTimeout(() => {
        codigoInput.style.borderColor = '#ddd';
    }, 2000);
}

/* ========================================
   EVENT LISTENERS
   ======================================== */

// 🖱️ Click en el candado
candado.addEventListener('click', mostrarModalCodigo);

// ✅ Confirmar código
btnConfirmar.addEventListener('click', verificarCodigo);

// ❌ Cancelar modal
btnCancelar.addEventListener('click', ocultarModalCodigo);

// ⌨️ Presionar Enter en el input
codigoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verificarCodigo();
    }
});

// 🖱️ Cerrar modal al hacer click fuera (opcional)
modalCodigo.addEventListener('click', (e) => {
    if (e.target === modalCodigo) {
        ocultarModalCodigo();
    }
});

/* ========================================
   FUNCIONES DE PERSONALIZACIÓN
   ======================================== */

// 🎨 Función para cambiar el código secreto desde consola
function cambiarCodigo(nuevoCodigo) {
    CODIGO_SECRETO = nuevoCodigo;
    console.log(`Código cambiado a: ${nuevoCodigo}`);
}

// 📝 Función para personalizar mensajes
function cambiarMensaje(tipo, nuevoMensaje) {
    if (MENSAJES[tipo]) {
        MENSAJES[tipo] = nuevoMensaje;
        console.log(`Mensaje de ${tipo} cambiado a: ${nuevoMensaje}`);
    }
}

/* ========================================
   INICIALIZACIÓN
   ======================================== */

console.log('🌸 Pantalla de amistad cargada correctamente');
console.log('💡 Para cambiar el código secreto, usa: cambiarCodigo("tu_nuevo_codigo")');
console.log(`🔑 Código actual: ${CODIGO_SECRETO}`);