// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const inputHeight = document.getElementById('input_height');
const inputWidth = document.getElementById('input_width');

// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener("submit", function(evt){
  evt.preventDefault();
  makeGrid();
});

function makeGrid() {

  var table = document.getElementById('pixel_canvas');

  // delete old rows
  while(table.rows.length > 0)
    table.deleteRow(0);

  // Create rows
  for (var i = 0; i <= inputHeight.value - 1; i++){
    var row = table.insertRow(i);

    // Create cells
    for (var j = 0; j <= inputWidth.value - 1; j++){
      var cell = row.insertCell(j);

      // Add listener to cell
      cell.addEventListener('click', function(e){
        e.target.style.backgroundColor = colorPicker.value;
        e.target.style.borderColor = colorPicker.value;
      })
    }
  }

}
