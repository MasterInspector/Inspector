  }

  function showImage(index) {
    const images = document.querySelectorAll('#imageContainer img');
    if (images.length > 0) {
      images.forEach(img => img.style.opacity = 0);
      images[index].style.opacity = 1;
      document.getElementById("imageName").textContent = filenames[index] || "";
    }
  }

  function showSecondImage(index) {
    const images = document.querySelectorAll('#secondImageContainer img');
    if (images.length > 0) {
      images.forEach(img => img.style.opacity = 0);
      images[index].style.opacity = 1;
      document.getElementById("imageName").textContent = secondFilenames[index] || "";
    }
  }

  function navigateImages(direction) {
    if (activeContainer === 'primary') {
      const total = document.querySelectorAll('#imageContainer img').length;
      if (total > 0) {
        currentImageIndex = (currentImageIndex + direction + total) % total;
        showImage(currentImageIndex);
      }
    } else {
      const total = document.querySelectorAll('#secondImageContainer img').length;
      if (total > 0) {
        secondCurrentImageIndex = (secondCurrentImageIndex + direction + total) % total;
        showSecondImage(secondCurrentImageIndex);
      }
    }
  }

  function zoomIn() {
    zoomLevel += parseFloat(document.getElementById("zoomSlider").value);
    applyZoom();
  }

  function zoomOut() {
    zoomLevel -= parseFloat(document.getElementById("zoomSlider").value);
    applyZoom();
  }

  function applyZoom() {
    const imageWrapper = document.getElementById("imageWrapper");
    imageWrapper.style.transform = `scale(${zoomLevel}) translate(${offsetXImageWrapper}px, ${offsetYImageWrapper}px)`;
    document.getElementById("zoomValue").textContent = `Zoom: ${zoomLevel.toFixed(1)}`;
  }

  function updateZoomValue(value) {
    document.getElementById("zoomValue").textContent = `Zoom: ${parseFloat(value).toFixed(1)}`;
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    activeContainer = 'primary';
    highlightSelectedContainer();
    filenames = [];
    const files = event.dataTransfer.files;
    const fileUrls = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith("image/")) {
        fileUrls.push(URL.createObjectURL(files[i]));
        filenames.push(files[i].name);
      }
    }
    displayImages(fileUrls);
  }

  function handleSecondDrop(event) {
    event.preventDefault();
    activeContainer = 'secondary';