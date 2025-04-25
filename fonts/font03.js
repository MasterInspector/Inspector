#zoomSlider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #ccc;
  border: 2px solid #444;
  border-radius: 50%;
  position: relative;
  z-index: 20;
}

/* Internet Explorer / old Edge */
#zoomSlider::-ms-track {
  background: transparent;
  color: transparent; /* Hides the filled portion */
  height: 100%;
  border: none;
}

#zoomSlider::-ms-fill-lower,
#zoomSlider::-ms-fill-upper {
  background: transparent;
}

#zoomSlider::-ms-thumb {
  width: 20px;
  height: 20px;
  background: #ccc;
  border: 2px solid #444;
  border-radius: 50%;
  position: relative;
  z-index: 20;
}

  #zoomValue {
    color: #6b6b6b;
    margin-top: 5px;
  }

  #imageContainerWrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    overflow: hidden;
  }

  #imageWrapper {
    position: relative;
    width: 1080px;
    height: 1080px;
    border: 0px solid #666;
    cursor: move;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  input[type="text"] {
    padding: 10px;
    width: 300px;
    border: 1px solid #666;
    border-radius: 5px;
    font-size: 16px;
    background-color: #333;
    color: #fff;
  }
