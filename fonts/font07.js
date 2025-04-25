    highlightSelectedContainer();
    secondFilenames = [];
    const files = event.dataTransfer.files;
    const fileUrls = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith("image/")) {
        fileUrls.push(URL.createObjectURL(files[i]));
        secondFilenames.push(files[i].name);
      }
    }
    displaySecondImages(fileUrls);
  }

  function displayImages(urls) {
    const container = document.getElementById("imageContainer");
    container.innerHTML = "";
    urls.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
	  img.draggable = false;
      container.appendChild(img);
    });
    showImage(0);
  }

  function displaySecondImages(urls) {
    const container = document.getElementById("secondImageContainer");
    container.innerHTML = "";
    urls.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
	  img.draggable = false;
      container.appendChild(img);
    });
    showSecondImage(0);
  }

  function startDraggingImageContainer(event) {
    isDraggingImageContainer = true;
    initialXImageContainer = event.clientX - offsetXImageWrapper;
    initialYImageContainer = event.clientY - offsetYImageWrapper;
    document.addEventListener("mousemove", dragImageContainer);
    document.addEventListener("mouseup", stopDraggingImageContainer);
  }

  function dragImageContainer(event) {
    if (isDraggingImageContainer) {
      offsetXImageWrapper = event.clientX - initialXImageContainer;
      offsetYImageWrapper = event.clientY - initialYImageContainer;
      applyZoom();
    }
  }

  function stopDraggingImageContainer() {
    isDraggingImageContainer = false;
    document.removeEventListener("mousemove", dragImageContainer);
    document.removeEventListener("mouseup", stopDraggingImageContainer);
  }

  function startDraggingControls(event) {
    isDraggingControls = true;
    initialXControls = event.clientX - offsetXControls;
    initialYControls = event.clientY - offsetYControls;
    document.addEventListener("mousemove", dragControls);
    document.addEventListener("mouseup", stopDraggingControls);
  }

  function dragControls(event) {
    if (isDraggingControls) {
      offsetXControls = event.clientX - initialXControls;
      offsetYControls = event.clientY - initialYControls;
      document.getElementById("controls").style.transform = `translate(${offsetXControls}px, ${offsetYControls}px)`;
    }
  }

  function stopDraggingControls() {
    isDraggingControls = false;
    document.removeEventListener("mousemove", dragControls);
    document.removeEventListener("mouseup", stopDraggingControls);