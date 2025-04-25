<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Image Comparison</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #000;
    color: #6b6b6b;
    user-select: none;
  }

  #controlsWrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 999;
  }

  #controls {
    background-color: rgba(42,42,42,.75)!important;
    padding: 0px 10px 5px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    cursor: move;
    display: inline-block;
    user-select: none;
  }
  
  #blur_01a, #blur_01b  {
	backdrop-filter: blur(16px) saturate(300%);
	//filter: blur(1px);
    //background-color: rgba(42,42,42,.0)!important;
	//z-index: -10;

  }
  
    #dropArea, #secondDropArea {
    border: 2px dashed #666;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
	//backdrop-filter: blur(16px) saturate(300%);
	//filter: blur(1px);
    background-color: rgba(42,42,42,.0)!important;
    margin-bottom: 20px;
	z-index: 10;

  }
  
  #dropArea:hover, #secondDropArea:hover {
  //box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.9);
  box-shadow: inset 0 0 15px 2px rgba(0, 0, 0, 0.9);
}

#dropArea.drag-over, #secondDropArea.drag-over {
	box-shadow: inset 0 0 15px #0ff; /* Inner glow */
}

  .active-container {
    border: 2px solid #4f8282 !important;
  }

#zoomSliderWrapper {
  position: relative;
  height: 100%;
  width: 100%;  
  padding-top: 15px;
  border-radius: 15px;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.8);
  cursor: move;