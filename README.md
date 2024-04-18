<button id="imageButton" type="button" onclick="toggleOverlay()">Image</button>

<div id="overlayPanel" class="overlayPanel">
  
<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
      <th>Column 4</th>
      <th>Column 5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
      <td>Row 1, Column 3</td>
      <td>Row 1, Column 4</td>
      <td>Row 1, Column 5</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
      <td>Row 2, Column 3</td>
      <td>Row 2, Column 4</td>
      <td>Row 2, Column 5</td>
    </tr>
    <tr>
      <td>Row 3, Column 1</td>
      <td>Row 3, Column 2</td>
      <td>Row 3, Column 3</td>
      <td>Row 3, Column 4</td>
      <td>Row 3, Column 5</td>
    </tr>
    <tr>
      <td>Row 4, Column 1</td>
      <td>Row 4, Column 2</td>
      <td>Row 4, Column 3</td>
      <td>Row 4, Column 4</td>
      <td>Row 4, Column 5</td>
    </tr>
    <tr>
      <td>Row 5, Column 1</td>
      <td>Row 5, Column 2</td>
      <td>Row 5, Column 3</td>
      <td>Row 5, Column 4</td>
      <td>Row 5, Column 5</td>
    </tr>
  </tbody>
</table>
</div>

.overlayPanel {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.overlayPanel img {
  max-width: 100%;
  height: auto;
}

function toggleOverlay() {
  var overlay = document.getElementById("overlayPanel");
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }
}
