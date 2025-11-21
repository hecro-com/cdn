const button = document.getElementById('user-menu-button');
const dropdown = document.getElementById('user-dropdown');
let isOpen = false;

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
    if (isOpen && !dropdown.contains(e.target) && !button.contains(e.target)) {
        closeProfileDropdown();
    }
});

// Abrir o cerrar al hacer clic en el botón
button.addEventListener('click', (e) => {
    e.stopPropagation(); // evitar que se cierre inmediatamente
    if (!isOpen) openProfileDropdown();
    else closeProfileDropdown();
});

// Función para abrir el dropdown con animación y ajuste de posición
function openProfileDropdown() {
    dropdown.classList.remove('pointer-events-none');
    dropdown.style.transform = 'translateY(-10px)';

    // Posición inteligente: si sobresale a la derecha, alinear a la derecha del botón
    const btnRect = button.getBoundingClientRect();
    const dropdownWidth = dropdown.offsetWidth;
    const windowWidth = window.innerWidth;

    if (btnRect.left + dropdownWidth > windowWidth) {
        dropdown.style.left = 'auto';
        dropdown.style.right = '0';
    } else {
        dropdown.style.left = '0';
        dropdown.style.right = 'auto';
    }

    anime({
        targets: dropdown,
        opacity: [0, 1],
        translateY: [-10, 0],
        duration: 300,
        easing: 'easeOutQuad'
    });

    isOpen = true;
}

// Función para cerrar el dropdown con animación
function closeProfileDropdown() {
    anime({
        targets: dropdown,
        opacity: [1, 0],
        translateY: [0, -10],
        duration: 200,
        easing: 'easeInQuad',
        complete: () => {
            dropdown.classList.add('pointer-events-none');
            dropdown.style.transform = 'translateY(-10px)';
        }
    });

    isOpen = false;
}
