//select html items
const addTaskBtn = document.querySelector("#task-btn");
const inputValue = document.querySelector("#input-value");

const addTaskContainer = document.querySelector("#content-containe");

let count = 0;
addTaskBtn.addEventListener("click", function () {
  const inputValueText = inputValue.value;

  //create task

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th>${(count += 1)}</th>
    <td>${inputValueText}</td>
    <td>
        <button class="done-btn btn btn-success     btn-xs">Done</button>
        <button class="delete-btn btn btn-error     btn-xs">Delete</button>
    </td>

    `;
  console.log(tr);
});
