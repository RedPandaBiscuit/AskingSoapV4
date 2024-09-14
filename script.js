function yesResponse() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = '<span>I love you!</span> You make me the happiest person!';
    responseMessage.style.display = 'block';
  }
  
  function noResponse() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = '<span>Aww...</span> I’ll keep trying 🙄';
    responseMessage.style.display = 'block';
  }
  // Ensure the image scales correctly
window.addEventListener('resize', fitImage);

function fitImage() {
  const imageElement = document.querySelector('.animated-element img');
  const container = document.querySelector('.animated-element');

  if (imageElement && container) {
    // Resize image to fit container while maintaining aspect ratio
    const containerWidth = container.offsetWidth;
    imageElement.style.width = '100%';
    imageElement.style.height = 'auto';

    // Adjust the image's width to fit within the container
    if (imageElement.offsetWidth > containerWidth) {
      imageElement.style.width = 'auto';
      imageElement.style.height = '100%';
    }
  }
}

// Initial fit when the page loads
fitImage();
