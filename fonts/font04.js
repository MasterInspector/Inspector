  #prevButton, #nextButton {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    
	color: #bfbfbf;
    border: none;
    border-radius: 10px;
    margin: 0 10px;
	margin-bottom: 15px;
	
	background-color: rgba(42,42,42,.85)!important;
	backdrop-filter: blur(16px) saturate(200%);
	  
	box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.8);
  }
	
	#prevButton:hover, #nextButton:hover {
    	  
	box-shadow: inset  0 0 15px 2px rgba(220, 220, 220, 0.3);
  }


  #imageName {
    background-color: rgba(17, 17, 17, 0.5);
    padding: 10px 20px;
    border-radius: 5px;
    position: fixed;
    top: 8px;
    left: 8px;
    color: #bfbfbf;
    z-index: 9999;
  }

  #toggleButton {
    display: none;
  }
  
#helpButton {
  background-color: #000;
  color: #666;
  border: 2px solid #666;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  padding: 0;
}

#helpContainer {
  padding: 5px 0px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

#text-001a, #text-001b {
  position: relative;
  z-index: -100; /* Lower number = further back */
}

</style>
</head>
<body>
<script src="googlefontface_dis.ink"></script>  
<div><p id="imageName"></p></div>
<div id="controlsWrapper">
  <div id="controls" onmousedown="startDraggingControls(event)">
  <div id="helpContainer">
  <button id="helpButton" onclick="openHelp()">?</button>
  </div>
    <div id="folderInput">
	    <div id="blur_01a">
      <div id="dropArea" 
     ondrop="handleDrop(event)" 