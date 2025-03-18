function add() {
  const input = document.querySelector("#task-input");
  const ulList = document.querySelector(".tasks");

  if (input.value.trim() !== "") {
    const liDiv = document.createElement("div");
    liDiv.textContent = input.value;
    const liItem = document.createElement("li");
    liDiv.classList.add(liDiv);
    const containerMax = document.createElement("div");
    const checkboxContainer = document.createElement("div");
    const checkButtonCont = document.createElement("div");
    const checkbox = document.createElement("input");
    const checkboxSpan = document.createElement("label");

    checkboxSpan.textContent = "Mark as completed";
    const checkboxId = "checkbox" + Math.random().toString(36).substr(2, 9); // Generujemy unikalne id
    checkboxSpan.setAttribute("for", checkboxId);
    checkbox.type = "checkbox";
    checkbox.id = checkboxId; // Ustawiamy unikalne id dla checkboxa
    checkButtonCont.classList.add("checkButtonCont");

    containerMax.classList.add("checkboxC");
    containerMax.appendChild(checkboxContainer);
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkboxSpan);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("noselect", "delete-button");
    deleteButton.style.position = "relative";
    deleteButton.style.marginLeft = "auto";

    const spanText = document.createElement("span");
    spanText.classList.add("text");
    spanText.textContent = "Delete";

    const spanIcon = document.createElement("span");
    spanIcon.classList.add("icon");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
    );

    svg.appendChild(path);
    spanIcon.appendChild(svg);
    deleteButton.appendChild(spanText);
    deleteButton.appendChild(spanIcon);

    checkButtonCont.appendChild(containerMax);
    checkButtonCont.appendChild(deleteButton);

    liItem.appendChild(liDiv);
    liItem.appendChild(checkButtonCont);

    ulList.appendChild(liItem);

    deleteButton.addEventListener("click", () => {
      liItem.remove();
    });

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        liItem.style.backgroundColor = "black";
        liItem.style.color = "white"; // Można dodać zmianę koloru tekstu, żeby lepiej pasowało
      } else {
        liItem.style.backgroundColor = "white";
        liItem.style.color = "black"; // Przywrócenie normalnego koloru tekstu
      }
    });

    input.value = "";
  } else {
    alert("Input can't be left blank");
  }
}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", add);
