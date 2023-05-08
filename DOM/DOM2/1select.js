function addcountry() {
    //select  the select box{target element to add}
    let selectElement = document.getElementById("country");
    //Create option element
    let newOption = document.createElement("option");
    newOption.innerText = document.getElementById("country-value").value;
    //select the value from textbox to dropdown box
    selectElement.append(newOption);
    document.getElementById("country-value").value = "";
  }
  
  
  function removeCountry(){
    let selectElement = document.getElementById('country');
      selectElement.remove(selectElement.selectedIndex);
   }
  
  
   document.getElementByTagName('ul')[0].setAttribute('id','unordered-list');
  let ul = document.getElementById('unordered-list');
  let li = document.createElement('li');
  li.innerHTML = 'Contact Us';
  ul.append(li);
  
  //Retrieve First and LastName
  let firstElement = ul.firstElementChild.innerText;
  let lastElement = ul.lastElementChild.innerText;
  document.getElementById('appendData').innerHTML += (`First and last ele is <b> ${firstElement} and ${lastElement}`);
  
  
  
  //QuerySelector
  let divElementQuerySelector = document.querySelector('#appendData');
  console.log(divElementQuerySelector);
  
  
  // //setTimeout
  // setTimeout( () => {
  // console.log('Executed after 3 seconds')
  // } , 3000);
  
  
  // //clearTimeout
  // const timeout=() => {console.log('Executed after 5 seconds')};
  // const timer = setTimeout(timeout,5000)
  
  // setTimeout(() => {
  //   clearTimeout(timer)
  // }, 3000);
  
  
  //setInterval
  const intervalTimer = setInterval(() => {
    console.log('Executed after 1 seconds')
  }, 1000);
  
  //clearInterval
  setTimeout(() => {
    clearInterval
  }, 5000);
  
  
  
  
  
  
  
  
  
  