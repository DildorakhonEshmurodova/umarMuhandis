let nightMode = document.querySelector(".night-mode");
let dayMode = document.querySelector(".day-mode");
let body = document.querySelector("body");
let modal = document.querySelector(".modal");
let searchIcon = document.querySelector(".search-icon");
let followButton = document.querySelector(".follow-btn");
let followModal = document.querySelector(".follow-modal");
let followClose = document.querySelector(".follow-close");
let downArrowBtn = document.querySelector(".downArrow");
let downArrowModal = document.querySelector(".downArrow-modal");
var subscribeInput = document.getElementById("myInput");
var subscribeAdd = document.querySelector(".subscribe-add");
var subscribeBtn = document.querySelector(".subscribe-link");



nightMode.addEventListener("click", e=>{
    dayMode.style.display = "block";
    nightMode.style.display = "none";
    body.style.backgroundColor = "rgba(17, 24, 39)";
})
dayMode.addEventListener("click", e=>{
    nightMode.style.display = "block";
    dayMode.style.display = "none";
    body.style.backgroundColor = "white";
})
// searchIcon.addEventListener("click", toggleFunction{
//     modal.style.display = "block";
// })
searchIcon.addEventListener("click", e=>{
    modal.style.display = "block";
    followModal.style.display = "none";
    downArrowModal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    else if (event.target == followModal) {
        followModal.style.display = "none";
      }
    // else if (event.target == downArrowModal) {
    //     downArrowModal.style.display = "none";
    //   }
    
  }
 
followButton.addEventListener("click", e=>{
    followModal.style.display = "block";
    modal.style.display = "none";
    downArrowModal.style.display = "none";
})
followClose.addEventListener("click", e=>{
    followModal.style.display = "none";
})
downArrowBtn.addEventListener("click", e=>{
    downArrowModal.style.display = "block";
    followModal.style.display = "none";
    modal.style.display = "none";
})
downArrowBtn.addEventListener("dblclick", e=>{
    downArrowModal.style.display = "none";
})

subscribeBtn.addEventListener("click", function(){
    let inputValue = subscribeInput.value;

    let text = document.createElement("div");
    text.classList.add("text");

    let parag = document.createElement("input");
    parag.type = "text";
    parag.value = inputValue;
    parag.setAttribute("readonly", "readonly");
    parag.classList.add("parag");
    text.appendChild(parag);

    let editBox = document.createElement("div");
    editBox.classList.add("boxlist");

    let edit = document.createElement("button");
    edit.textContent = "edit";
    edit.classList.add("edit");

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete");
    deleteBtn.value = "delete";

    subscribeAdd.appendChild(text);

    editBox.appendChild(edit);
    editBox.appendChild(deleteBtn);
    text.appendChild(editBox);

    edit.addEventListener("click", function () {
        if (edit.innerText.toLowerCase() == "edit") {
          edit.innerText = "save";
          parag.classList.add("paragPress");
          parag.removeAttribute("readonly");
          parag.focus();
        } 
        else {
          edit.innerText = "edit";
          parag.classList.remove("paragPress");
          parag.setAttribute("readonly", "readonly");
        }
      });
    
      deleteBtn.addEventListener("click", () => {
        subscribeAdd.removeChild(text);
      });

})