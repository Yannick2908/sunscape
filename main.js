document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container'); 
    const videoContainer = document.getElementById('video-container'); 
    const openVideo = document.getElementById('open-video'); 
    const returnButton = document.querySelector('.bi-arrow-left-circle');
    const video = document.getElementById('sunscape-video'); 

    
    videoContainer.style.display = 'none';

   
    openVideo.addEventListener('click', (e) => {
        e.preventDefault(); 
        imageContainer.style.display = 'none'; 
        videoContainer.style.display = 'block'; 
        video.currentTime = 0; 
        video.play().catch((err) => console.error("Error al reproducir el video:", err));
    });

    returnButton.addEventListener('click', (e) => {
        e.preventDefault();
        video.pause(); 
        video.currentTime = 0; 
        videoContainer.style.display = 'none'; 
        imageContainer.style.display = 'flex'; 
    });


    video.addEventListener('ended', () => {
        if (videoContainer.style.display === 'block') {
            video.play().catch((err) => console.error("Error al reiniciar el video:", err));
        }
    });
});


