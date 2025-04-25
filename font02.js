}

#zoomSlider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 85%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 10;
  cursor: ew-resize;
}

  #zoomSlider:hover {
    -webkit-appearance: none;
    -moz-appearance: none;
    box-shadow: inset 0 0 15px 2px rgba(0, 0, 0, 0.9);
	border-radius: 15px;


}
	
/* Triangular background using ::before (works in all browsers) */
#zoomSlider::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #000 0%, #7d7d7d 85%, #d1d1d1 100%);
  clip-path: polygon(100% 100%, -50% 100%, 100% 0%);
  z-index: 1;
  pointer-events: none;
  border-radius: 3px;
}

/* Chrome, Safari, Edge */
#zoomSlider::-webkit-slider-runnable-track {
  background: transparent;
  height: 100%;
  z-index: 1;
  filter: blur(1px);
}

#zoomSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1px;
  height: 20px;
  background: #ccc;
  border: 2px solid #4f8282;
  border-radius: 20%;
  position: relative;
  z-index: 20;
  margin-top: 0px; /* Adjusts for vertical alignment */
}
	
#zoomSlider.hovered::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 3px solid #1dd1d1;
}
	
#zoomSlider.hovered::-moz-range-thumb {
	  border: 3px solid #1dd1d1;
}
	
#zoomSlider.hovered::-ms-thumb {
		  border: 3px solid #1dd1d1;
}

/* Firefox */
#zoomSlider::-moz-range-track {
  background: transparent;
  height: 100%;
  z-index: 1;
  filter: blur(1px);
}
