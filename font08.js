  }

  function zoomWithWheel(event) {
    event.preventDefault();
    if (event.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  }

  function toggleSecondContainer() {
    const secondContainer = document.getElementById("secondImageContainer");
    secondContainer.style.display = secondContainer.style.display === "none" ? "block" : "none";
  }

  function blockRightClick(event) {
    event.preventDefault();
  }

  document.addEventListener('contextmenu', blockRightClick);

document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowLeft") {
    navigateImages(-1);
  } else if (event.key === "ArrowRight") {
    navigateImages(1);
  } else if (event.key === "Tab") {
    event.preventDefault();
    activeContainer = (activeContainer === 'primary') ? 'secondary' : 'primary';
    highlightSelectedContainer();

    if (activeContainer === 'primary') {
      toggleSecondContainer(); // Hide second container
      showImage(currentImageIndex);
    } else {
      toggleSecondContainer(); // Show second container
      showSecondImage(secondCurrentImageIndex);
    }
  } else if (event.key === "r" || event.key === "R") {
    zoomLevel = 1.0;
    offsetXImageWrapper = 0;
    offsetYImageWrapper = 0;

    const zoomSlider = document.getElementById("zoomSlider");
    zoomSlider.value = "1.0";
    updateZoomValue("1.0");
    applyZoom();
  }
});


  // Initialize highlight
  highlightSelectedContainer();
  
  function openHelp() {
  window.open('help.html', '_blank');
}

document.addEventListener('keydown', function(event) {
  if (event.key === "h" || event.key === "H") {
    const controlsWrapper = document.getElementById("controlsWrapper");
    if (controlsWrapper.style.display === "none") {
      controlsWrapper.style.display = "block";
    } else {
      controlsWrapper.style.display = "none";
    }
  }
});

document.getElementById("zoomSlider").addEventListener("wheel", function(event) {
  event.preventDefault(); // Prevent page scrolling

  const slider = this;
  const step = parseFloat(slider.step);
  const min = parseFloat(slider.min);
  const max = parseFloat(slider.max);
  let value = parseFloat(slider.value);
