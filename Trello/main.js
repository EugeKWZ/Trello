const selectorDeTablas = document.querySelector("select");
const addBtn = document.querySelector(".btn-add");
const tables = document.querySelector(".tareasTable");

select.value = "";

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  switch (selectorDeTablas.value) {
    case "1":
      createTable();
      break;

    case "2":
      createTable();
      createTable();
      break;

    case "3":
      createTable();
      createTable();
      createTable();
      break;

    case "4":
      createTable();
      createTable();
      createTable();
      createTable();
      break;
  }
  select.value = "";
});

function createTable() {
  const table = document.createElement("div");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const modal = document.createElement("div");
  const popUpBtn = document.createElement("button");
  const config = document.createElement("img");
  config.className = "config";
  popUpBtn.className = "popUpBtn";
  popUpBtn.appendChild(config);
  config.setAttribute("src", "tres-puntos.png");
  const removeTable = document.createElement("button");
  removeTable.className = "removeTable";
  removeTable.textContent = "x";
  modal.className = "popUp";
  input.className = "placeholder";
  input.setAttribute("placeholder", "Agregá tu tarea..");
  const addTask = document.createElement("button");
  const tituloTarea = document.createElement("h3");
  const seleccionaColor = document.createElement("h4");
  seleccionaColor.className = "seleccionaColor";
  const selectColorTable = document.createElement("form");
  const btnColor = document.createElement("input");
  tables.appendChild(table);
  table.appendChild(removeTable);
  table.appendChild(popUpBtn);
  table.appendChild(modal);
  modal.appendChild(selectColorTable);
  selectColorTable.appendChild(seleccionaColor);
  seleccionaColor.textContent = "Seleccioná el color de la tabla:";
  selectColorTable.appendChild(btnColor);
  btnColor.className = "type";
  btnColor.className = "btnColor";
  btnColor.setAttribute("type", "color");
  tituloTarea.textContent = "Agregá título a tu tabla";
  table.className = "tareas";
  addTask.className = "btn-add-task";
  addTask.textContent = "+";
  table.appendChild(tituloTarea);
  table.appendChild(form);
  form.appendChild(input);
  form.appendChild(addTask);
  tituloTarea.className = "contenteditable";
  tituloTarea.setAttribute("contenteditable", "true");

  addTask.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      const p = document.createElement("p");
      table.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(addDeleteBtn());
      p.textContent = text;
    }
    input.value = "";
    tituloTarea.execCommand("DefaultParagraphSeparator", true, "h3");
  });

  function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "x";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {
      const item = document.querySelector("li");
      item.remove();

      const items = document.querySelectorAll("li");

      if (items.length === 0) {
        empty.style.display = "block";
      }
    });

    return deleteBtn;
  }

  btnColor.addEventListener("input", (e) => {
    e.preventDefault();

    table.style.backgroundColor = e.target.value;
  });

  popUpBtn.addEventListener("click", (e) => {
    modal.style.display = "block";

    popUpBtn.addEventListener("click", (e) => {
      modal.style.display = "none";
    });
  });

  removeTable.addEventListener("click", (e) => {
    table.remove();
  });
}
