function createBtn() {
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
  return deleteButton;
}
function createCheckbox() {
  const checkboxContainer = document.createElement("div");
  const checkbox = document.createElement("input");
  const checkboxSpan = document.createElement("label");
  const checkboxId = "checkbox" + Math.random().toString(36).substr(2, 9);
  checkbox.id = checkboxId;
  checkbox.type = "checkbox";
  checkboxSpan.textContent = "Mark as completed";
  checkboxSpan.setAttribute("for", checkboxId);

  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(checkboxSpan);
  return { checkboxContainer, checkbox };
}
function buttonsListeners() {
  const addButton = document.getElementById("add-button");
  const allBtn = document.getElementById("all");
  const completedBtn = document.getElementById("completed");
  const activeBtn = document.getElementById("active");

  completedBtn.addEventListener("click", () => {
    const liItems = document.querySelectorAll("li");
    liItems.forEach((liItem) => {
      if (liItem.classList.contains("active")) {
        liItem.style.display = "none";
      } else {
        liItem.style.display = "flex";
      }
    });
  });
  allBtn.addEventListener("click", () => {
    const allItems = document.querySelectorAll("li");
    allItems.forEach((liItem) => {
      liItem.style.display = "flex";
    });
  });
  activeBtn.addEventListener("click", () => {
    const activeItems = document.querySelectorAll("li");
    activeItems.forEach((liItem) => {
      if (liItem.classList.contains("marked")) {
        liItem.style.display = "none";
      } else {
        liItem.style.display = "flex";
      }
    });
  });
  addButton.addEventListener("click", add);
}
function deleteBtnListener(deleteBtn, liItem) {
  deleteBtn.addEventListener("click", () => liItem.remove());
}
function checkboxListener(checkbox, liDiv, liItem) {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      liDiv.style.textDecoration = "line-through";
      liItem.style.backgroundColor = "#ffff8c";
      liItem.classList.remove("active");
      liItem.classList.add("marked");
    } else {
      liDiv.style.textDecoration = "none";
      liItem.style.backgroundColor = "";
      liItem.classList.add("active");
      liItem.classList.remove("marked");
    }
  });
}
function enterListener() {
  const input = document.querySelector("#task-input");
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      add();
    }
  });
}

function add() {
  const input = document.querySelector("#task-input");
  const ulList = document.querySelector(".tasks");

  if (input.value.trim() !== "") {
    const liItem = document.createElement("li");
    liItem.style.borderRadius = "5px";
    const liDiv = document.createElement("div");
    liDiv.textContent = input.value;
    liDiv.classList.add("liDiv");

    const { checkboxContainer, checkbox } = createCheckbox();
    const deleteButton = createBtn();

    const containerMax = document.createElement("div");
    containerMax.classList.add("checkboxC");

    containerMax.appendChild(checkboxContainer);

    const checkButtonCont = document.createElement("div");
    checkButtonCont.classList.add("checkButtonCont");
    checkButtonCont.appendChild(containerMax);
    checkButtonCont.appendChild(deleteButton);

    liItem.appendChild(liDiv);
    liItem.appendChild(checkButtonCont);
    liItem.classList.add("active");
    ulList.appendChild(liItem);

    input.value = "";

    deleteBtnListener(deleteButton, liItem);
    checkboxListener(checkbox, liDiv, liItem);
  } else {
    alert("Input can't be left blank");
  }
}
buttonsListeners();
enterListener();
