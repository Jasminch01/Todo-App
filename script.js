//select html items
const addTaskBtn = document.querySelector("#task-btn");
const inputValue = document.querySelector("#input-value");

const addTaskContainer = document.querySelector("#content-container");

let count = 0;
addTaskBtn.addEventListener("click", function () {
  const inputValueText = inputValue.value;

  //create task

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th>${(count += 1)}</th>
    <td>${inputValueText}</td>
    <td>
        <button class="done-btn btn btn-success     btn-xs text-white">Done</button>
        <button class="delete-btn btn btn-error     btn-xs text-white">Delete</button>
    </td>

    `;
    //added the created html element of the addtask container div 
    addTaskContainer.appendChild(tr);

    //clear button

    const deleteBtns = document.querySelectorAll('.delete-btn');

    for (let btns of deleteBtns) {
        
        btns.addEventListener('click', function(e){
            e.target.parentElement.parentElement.style.display = 'none'
        })


    }
    

  
});
