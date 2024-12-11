document.addEventListener('DOMContentLoaded', () => {
    const iconContainer = document.getElementById('icon-container');
    const galleryContainer = document.getElementById('gallery-container');
    const galleryImages = document.querySelectorAll('.gallery-images img');
    const openGalleryLinks = document.querySelectorAll('.open-gallery');

    // Modal Elements
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const backToGallery = document.getElementById('back-to-gallery');
    const prevImage = document.getElementById('prev-image');
    const nextImage = document.getElementById('next-image');

    let currentImageIndex = 0;
    let currentGalleryImages = [];

    // Diccionario con las rutas de imágenes para cada icono
    const galleryData = {
        resort: [
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/RESORT/SUDIX-Beach-Family-Lifestyle01-AM.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/RESORT/SUDIX-BeachCabana-Family-Lifestyle01-AM.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/RESORT/SUDIX-Beach-Kids-Lifestyle10-AM.jpg',
        ],
        restaurants: [
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/RESTAURANTE/SUDIX-RES-Buffet-Windows-V2-BB.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/RESTAURANTE/SUDIX-RES-CocoCafe-V3-BB.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/RESTAURANTE/SUDIX-RES-DeMario-V2-BB.jpg',
        ],
        suites: [
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/SUITES/SUDIX-DLX-OV-DBL-V2-BB.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/SUITES/SUDIX-DLX-POV-DBL-BB.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/SUITES/SUDIX-FamilyRoom2-3-CB.jpg',
        ],
        spas: [
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/SPA/SUDIX-SPA-Cascade1-1-CB.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/SPA/SUDIX-SPA-Cascade2-1-CB.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/SPA/SUDIX-SPA-INT-Massage-Cabin-BB.jpg',
        ],
        bars: [
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/BAR/SUDIX-BAR-Bluewater-V3-BB.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/BAR/SUDIX-BAR-EXT-Barracuda-V3-BB.jpg',
            'Assets/SUNSCAPE DORADO PACIFICO IXTAPA FULL HD/BAR/SUDIX-BAR-Rendezvous-Lobby-Bar-V4-BB.jpg',
        ],
    };

    // Manejar clics en los iconos para abrir la galería
    openGalleryLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const galleryKey = link.getAttribute('data-gallery'); // Obtener la galería seleccionada
            currentGalleryImages = galleryData[galleryKey]; // Obtener imágenes correspondientes

            // Actualizar las imágenes en la galería
            galleryImages.forEach((img, index) => {
                img.src = currentGalleryImages[index] || '';
            });

            // Mostrar la galería y ocultar el contenedor principal
            iconContainer.style.display = 'none';
            galleryContainer.classList.remove('hidden');
        });
    });

    // Manejar el botón "Back" para regresar al menú principal
    backToGallery.addEventListener('click', () => {
        imageModal.style.display = 'none';
        galleryContainer.classList.remove('hidden');
    });

    // Abrir imagen en el modal al hacer clic
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            modalImage.src = img.src;
            imageModal.style.display = 'flex';
        });
    });

    // Cambiar a la imagen anterior
    prevImage.addEventListener('click', () => {
        currentImageIndex =
            (currentImageIndex - 1 + currentGalleryImages.length) %
            currentGalleryImages.length;
        modalImage.src = currentGalleryImages[currentImageIndex];
    });

    // Cambiar a la imagen siguiente
    nextImage.addEventListener('click', () => {
        currentImageIndex =
            (currentImageIndex + 1) % currentGalleryImages.length;
        modalImage.src = currentGalleryImages[currentImageIndex];
    });

    // Cerrar modal al hacer clic fuera de la imagen
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
});