let index = 0;
const images = document.querySelectorAll('.carrousel img');

function afficher() {
  images.forEach(img => img.style.display = 'none');
  images[index].style.display = 'block';
  index = (index + 1) % images.length;
}

if (images.length > 0) {
  afficher();
  setInterval(afficher, 3000);
}
const liens = document.querySelectorAll('.ouvrir');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const fermer = document.getElementById('fermer');
if (lightbox) {
  liens.forEach(lien => {
    lien.addEventListener('click', function(e) {
      e.preventDefault();
      lightboxImg.src = this.href;
      lightbox.style.display = 'flex';
    });
  });

  fermer.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
}