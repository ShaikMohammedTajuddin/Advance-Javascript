let  storedHTML = document.getElementsById("para");


//let  storedHTML = document.getElementsByTagName("p");
console.log(storeHTML);
let htmlData =storedHTML.innerHTML;
let textData=storedHTML.innerText;

console.log(htmlData);
console.log(textData);


document.getElementById("name").innerHTML='<span> XXX </span>';
document.getElementById("age").innerHTML='<span> 35 </span>';
document.getElementById("email").innerHTML='<span> xx@gmail.com </span>';


//Apply style
document.body.style.fontFamily ='Arial';
storeHTML.style.color ="pink";


//create element and append
//Element 1
let imageElement = document.createElement('img');
imageElement.src="nature.jpeg;"
imageElement.height=300;
imageElement.width=300;


//Element 2
let divElement = document.createElement('div');
//Sunrise
divElement.innerText="sunrise";
//Append created elements
// document.body.append(imageElement,divElement);
//document.body.appendChild(imageElement,divElement);


//Select Elements by Class Name and Tag Name
let pTags=document.getElementsByTagName('p');
let paraClass=document.getElementsByClassName('para');
// console.log(pTags);
// console.log(paraClass);
pTags[1].innerText = "Hello Guys..."


//AddRow in the TableElement
function addrow(){
    let tableElement =document.getElementById('table');
    let row=tableElement.insertRow();
    let tdl=row.insertCell();
    tdl.innerText="CCC";
    let td2=row.insertCell();
    td2.innerText="28";
}