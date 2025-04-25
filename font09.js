  if (event.deltaY < 0) {
    value = Math.min(value + step, max); // Scroll up -> increase
  } else {
    value = Math.max(value - step, min); // Scroll down -> decrease
  }

  slider.value = value.toFixed(1);
  updateZoomValue(slider.value);
});

const dropArea = document.getElementById('dropArea');

dropArea.addEventListener('dragenter', () => {
  dropArea.classList.add('drag-over');
});
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('drag-over');
});
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault(); // Required to allow dropping
});
dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.classList.remove('drag-over');
  handleDrop(e); // Your existing function
});

const secondDropArea = document.getElementById('secondDropArea');

secondDropArea.addEventListener('dragenter', () => {
  secondDropArea.classList.add('drag-over');
});
secondDropArea.addEventListener('dragleave', () => {
  secondDropArea.classList.remove('drag-over');
});
secondDropArea.addEventListener('dragover', (e) => {
  e.preventDefault(); // Required to allow dropping
});
secondDropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  secondDropArea.classList.remove('drag-over');
  handleSecondDrop(e); // Your existing function
});

const wrapper = document.getElementById('zoomSliderWrapper');
const slider = document.getElementById('zoomSlider');

wrapper.addEventListener('mouseenter', () => {
  slider.classList.add('hovered');
});
wrapper.addEventListener('mouseleave', () => {
  slider.classList.remove('hovered');
});

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F12' || // F12
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || // Ctrl+Shift+I/J/C
    (e.ctrlKey && e.key === 'U') // Ctrl+U for view source
  ) {
    e.preventDefault();
  }
});


    DisableDevtool({
      // Optional configurations:
      url: '', // Redirect URL when devtools is detected
      rewriteHTML: '<h1></h1>', // Replace the DOM when detected
      disableMenu: true,
      disableCopy: true,
      disablePaste: true,
      disableSelect: true,
    });


</script>
</body>
</html>