let locations = ["surat", "vadodara", "rajkot", "ahemdabad"];
let html = ""

for (let i = 0; i < locations.length; i++) {
    html += `
                <div class="drag-container">
                    <div id="${locations[i]}" class="drag-name" draggable="true">${locations[i]}</div>
                </div>
    `
}

document.getElementById("location").innerHTML = html

const dragName = document.querySelectorAll(".drag-name");
const dragContainers = document.querySelectorAll(".drag-container");

dragName.forEach((dragname) => {
  dragname.addEventListener("dragstart", dragStart);
  dragname.addEventListener("dragend", dragEnd);
});

dragContainers.forEach((container) => {
  container.addEventListener("dragover", dragOver);
  container.addEventListener("drop", drop);
});

function dragStart(event) {
  event.dataTransfer.setData("draggedImageId", event.target.id);
  setTimeout(() => event.target.classList.toggle("hidden"));
}

function dragEnd(event) {
  event.target.classList.toggle("hidden");
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  const draggedImageId = event.dataTransfer.getData("draggedImageId");
  const draggedImage = document.getElementById(draggedImageId);
  const fromContainer = draggedImage.parentNode;
  const toContainer = event.currentTarget;

  if (toContainer !== fromContainer) {
    fromContainer.appendChild(toContainer.firstElementChild);
    toContainer.appendChild(draggedImage);
  }
}

