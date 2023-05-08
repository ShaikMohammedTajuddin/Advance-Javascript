//Select Course Task
const selectBox = document.getElementById("select-Courses");
const spanTag = document.getElementById("selected-value");


selectBox.addEventListener("change",function(){
spanTag.innerText = selectBox.value
})


