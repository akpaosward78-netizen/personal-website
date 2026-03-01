function showMessage() {
    document.getElementById("message").innerHTML =
        "You can contact me at: osward@email.com";
        
}
const gallery = document.querySelector('.gallery');
const images = ['image1.jpg', 'image2.jpg', /* more images */];

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  gallery.appendChild(img);
});