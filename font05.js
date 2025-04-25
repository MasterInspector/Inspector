     ondragover="allowDrop(event)" 
     onclick="selectPrimaryContainer()">
  <p id="text-001a">Image Group 1</p>
</div></div>
	  <div id="blur_01b">
<div id="secondDropArea" 
     ondrop="handleSecondDrop(event)" 
     ondragover="allowDrop(event)" 
     onclick="selectSecondaryContainer()">
  <p id="text-001b">Image Group 2</p>
</div></div>
    </div>
	
    <button id="prevButton" onclick="navigateImages(-1)">◄</button>
    <button id="nextButton" onclick="navigateImages(1)">►</button>
	  
    <div id="zoomSliderWrapper">		 

		<input type="range" id="zoomSlider" min="0.1" max="0.5" step="0.1" value="1" oninput="updateZoomValue(this.value)">
      <div id="zoomValue">Zoom: 0.5</div>
    </div>
  </div>
</div>

<div id="imageContainerWrapper" onwheel="zoomWithWheel(event)">
  <div id="imageWrapper" onmousedown="startDraggingImageContainer(event)">
    <div id="imageContainer"></div>
    <div id="secondImageContainer"></div>
  </div>
</div>

<button id="toggleButton" onclick="toggleSecondContainer()">Toggle Second Container</button>

<script>
  let currentImageIndex = 0;
  let secondCurrentImageIndex = 0;
  let zoomLevel = 1;
  let offsetXImageWrapper = 0;
  let offsetYImageWrapper = 0;
  let isDraggingImageContainer = false;
  let isDraggingControls = false;
  let initialXImageContainer;
  let initialYImageContainer;
  let initialXControls;
  let initialYControls;
  let offsetXControls = 0;
  let offsetYControls = 0;
  let filenames = [];
  let secondFilenames = [];
  let activeContainer = 'primary';
  
  function selectPrimaryContainer() {
  activeContainer = 'primary';
  highlightSelectedContainer();

  if (document.getElementById("secondImageContainer").style.display !== "none") {
    toggleSecondContainer(); // Hide second container
  }
  showImage(currentImageIndex);
}

function selectSecondaryContainer() {
  activeContainer = 'secondary';
  highlightSelectedContainer();

  if (document.getElementById("secondImageContainer").style.display === "none") {
    toggleSecondContainer(); // Show second container
  }
  showSecondImage(secondCurrentImageIndex);
}

  function highlightSelectedContainer() {
    document.getElementById('dropArea').classList.remove('active-container');
    document.getElementById('secondDropArea').classList.remove('active-container');
    if (activeContainer === 'primary') {
      document.getElementById('dropArea').classList.add('active-container');
    } else {
      document.getElementById('secondDropArea').classList.add('active-container');
    }