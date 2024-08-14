function downloadImage() {
  // Call the saveCanvas() function from the Processing.js instance
  processingInstance.saveCanvas('pixel-art', 'png');
}
function clearCanvas() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].colour = color(255);
    }
  }
  redraw();
}