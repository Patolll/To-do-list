function add() {
  const input = document.querySelector("#task-input");
  const ulList = document.querySelector(".tasks");

  if (input.value.trim() !== "") {
    try {
      const liItem = document.createElement("li");
      liItem.textContent = input.value;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("noselect", "delete-button");
      deleteButton.style.position = "absolute";
      deleteButton.style.right = "2%";
      const spanText = document.createElement("span");
      spanText.classList.add("text");
      spanText.textContent = "Delete";

      const spanIcon = document.createElement("span");
      spanIcon.classList.add("icon");

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "24");
      svg.setAttribute("height", "24");
      svg.setAttribute("viewBox", "0 0 24 24");

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
      );

      svg.appendChild(path);
      spanIcon.appendChild(svg);
      deleteButton.appendChild(spanText);
      deleteButton.appendChild(spanIcon);
      liItem.appendChild(deleteButton);
      ulList.appendChild(liItem);

      deleteButton.addEventListener("click", () => {
        liItem.remove();
      });

      input.value = "";
    } catch (error) {
      console.error(error);
    }
  }
}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", add);
