//the function of delete li
function deleteTitle(event) {

    // 1- Check the event if raised on the button delete
    
    // 2 if yes, get the parent and remove it from the bookList
    if (event.target.className === "delete"){
    event.target.parentElement.remove();
    }
  }
  
  //The function of create new item
  function newElement() {
    
    // 1- Get the title name from the input field
    const item = document.querySelector("#myInput");
    const ul = document.querySelector("ul");
    if (item.value==="") return confirm("input cannot empty");
    
    // 2- Create a new spam titleName for the title name, class name =
    const spanTask = document.createElement("span");
    spanTask.classList.add("name");
    spanTask.textContent = item.value;
  
    // 3- Create a new span deleteBtn for the button delete, class name = delete
    const span_delete = document.createElement("span");
    span_delete.classList.add("delete");
    span_delete.textContent = "detele";
    
    // 4- Create a new li
    const li = document.createElement("li");
    
    // 5- Add titleName and deleteBtn to li and li to the titleList UL
    li.appendChild(spanTask);
    li.appendChild(span_delete);
    ul.appendChild(li);
    
    item.value = "";
    
  }
  
  //The function of search  The Title of item
  function searchTitle(event) {
    // 1- Get the search text
    let search = document.querySelector("input");
    let text = search.value.toLowerCase();
    let ListItem = document.querySelectorAll("li");
    
    // 2- Loop on all LI
    // Update the style of the LI (visible or hidden)
    
    for (let li of ListItem){
        let title = li.firstElementChild.textContent.toLowerCase();
        if (title.indexOf(text)===-1){
            li.style.display = "none";
        }
        else {
            li.style.display = "";
    }
    }
    
  }
  
  // The function of display all the input
  function addTask(event) {
    event.preventDefault();
    const number = document.querySelector('#numberId');
    const dates = document.querySelector('#dateId');
    const time = document.querySelector('#timeId');
  
  
    // if input are empty
    if (number.value === "" || dates.value === "" || time.value === "" ){
        window.confirm("Field cannot empty!");
    }else{
      // create card div
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', index);
  
    // span task number
    const taskNumber = document.createElement('span');
    taskNumber.textContent = number.value;
  
    // span task date 
    const taskDate = document.createElement('span');
    taskDate.textContent = dates.value;
     //span task time
    const taskTime = document.createElement('span');
    taskTime.textContent = time.value
  
    // edit span
    const edit = document.createElement('span');
    edit.classList.add('edit');
    edit.textContent = "edit";
  
    // delete span
    const deleteTask = document.createElement('span');
    deleteTask.classList.add('delete');
    deleteTask.textContent = "delete";
  
    // add to card
    card.appendChild(taskNumber);
    card.appendChild(taskDate);
    card.appendChild(taskTime);
    card.appendChild(edit);
    card.appendChild(deleteTask);
  
    // add card to ouput
    output.appendChild(card);
  
    // increment 
    index++;
  
    dates.value = "";
    number.value = "";
    time.value= "";
    }
  
  }
  
  //The function of display
  function userAction(event) {
  
    let card = event.target.parentElement;
    let number = card.firstElementChild.textContent;
    let time = card.firstElementChild.nextElementSibling.textContent;
    let dates = card.firstElementChild.nextElementSibling.textContent;
    const taskDate = document.querySelector('#dateId');
    const taskTime = document.querySelector('#timeId');
    const taskNumber = document.querySelector('#numberId');
  
    // edit
    if (event.target.className === "edit") {
        taskNumber.value = number;
        taskDate.value = dates;
        taskTime.value = time;
        index = card.id;
       
    }
    // delete or remove
    if (event.target.className === "delete") {
        card.remove();
    }
  }
  
  function  updateTask(event) {
    event.preventDefault();
    let cards = document.querySelectorAll('.card');
    const taskNumber = document.querySelector('#numberId');
    const taskDate = document.querySelector('#dateId');
    const taskTime = document.querySelector('#timeId');
  
    cards[index].firstElementChild.textContent = taskNumber.value;
    cards[index].firstElementChild.nextElementSibling.textContent= taskTime.value;
    cards[index].firstElementChild.nextElementSibling.textContent = taskDate.value;
    
  }
  //the function of hide show element
  // function ShowElement(element, isShow){
  //   if (isShow){
  //     element.style.display = "block";
  //   }else{
  //     element.style.display = "none";
  //   }
  // }
  const btnCreate = document.querySelector('#register');
  const btnClose = document.querySelector('#close');
  const formBox = document.querySelector('.form-box');
  
  btnCreate.addEventListener('click', e => {
  btnClose.style.display = "block";
  formBox.style.display = "block";
  btnCreate.style.display = "none";
  
  });
  btnClose.addEventListener('click', e => {
  btnClose.style.display = "none";
  formBox.style.display = "none";
  btnCreate.style.display = "block"
  });
  
  
  
  //main
  
  const btnAdd = document.querySelector('#add');
  const output = document.querySelector('.output');
  const btnUpdate = document.querySelector('#update');
  
  let index = 0;
  
  btnAdd.addEventListener('click', addTask);
  output.addEventListener('click', userAction);
  btnUpdate.addEventListener('click', updateTask);
  
  
  let ListTitle = document.querySelector("#title");
  ListTitle.addEventListener("click", deleteTitle);
  
  let addForm = document.getElementById("myDIV");
  // addForm.addEventListener("submit", newElement);
  
  let searchTitleInput = document.getElementById("search-title").querySelector("input");
  searchTitleInput.addEventListener("keyup", searchTitle);