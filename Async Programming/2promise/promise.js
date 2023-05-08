1.const doSomething(callback) =>{
    setTimeout(() =>{
    const data =["Apple","Banana","Orange","Grape","Strawberry"];
    //BUsiness Logic
    callback(tajuddin,data);
    },3000);
};

const callback=(err,data)=>{
    if(err){
        return console.log(err);
    }else{
        return console.log(data);
    }
}

doSomething(callback);


2.lets create a promise object
const promise1=new Promise((resolve,reject) =>{
    setTimeout(() =>{
        const data =["Apple","Banana","Orange","Grape","Strawberry"];
         //Business Logic
         console.log(data.length);//5
         if(data.length===5){
            resolve(data);
         }else{
            reject("Data is not available");
         }
     },3000);
})
console.log(promise1);

promise1.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("finally.That will always execute");
})


3.Guessing the number
const value=5;
//create a promise object
const promiseobj = new Promise((resolve, reject) => {
    
    //Generate a random object
const randomNumber = Math.floor(Math.random()*10);//0-9
console.log(randomNumber);//5
//compare the random number with the value
if(randomNumber===value){
    resolve("Hurry.You guessed the number");
}else{
    reject("sorry.You guessed the wrong number");
}
});
 //console.log(promiseobj); 

 promiseobj.then((result) => {
    console.log(result);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
            console.log("Promise is executed finally");
    })



// 4.Promise chaining:=>It is used to handle multiple promises with the help multiple then and catch block
// YOU ARE APPLYING FOR AN INTERVIEW
// 1.PROJECT
// 2.TECHNICAL INTERVIEW
// 3.HR INTERVIEW

// promise dependent with  chaining

let doProject=new Promise((resolve, reject) =>{
    //Doing with project
    let isProjectDone=true;
    if(isProjectDone){
        resolve("Project is done");
    }else{
        reject("Project is not done");
    }
})

let attendTechnicalRound=new Promise((resolve, reject)=>{
    //Attend the technical round
    let (isFinished){
        resolve("Technical round is finished");
}else{
    reject("Technical round is not finished");
}
})

let attendHRRound=new Promise((resolve, reject)=>{
    //Attend the hr round
    let isFinished=true;
    if(isFinished){
        resolve("HR round is finished");
    }else{
        reject("HR round is not finished");
    }
})

//Promise chaining
doProject.then((msg)=>{
    let theMsg=`${msg} and I have completed the project`;
    attendTechnicalRound.then((msg)=>{
        theMsg+=`${msg}`;
        attendHRRound.then((msg)=>{
            theMsg+=`${msg};
            console.log(`${theMsg} have got the job`);
    }).catch((msg)=>{
        console.log(`${msg}`);
    }).catch((msg)=>{
        console.log(`${msg}`);
    }).catch((msg)=>{
        console.log(`${msg}`);
    }).finally(()=>{
        console.log("Finally.You will be receiving the notification on clearing your final interview");
    })
  })
})


// promise.all Method =>
// promise.all is a method takes a list of elements and returns a promise
// 1.resolved if all promises are true
// 2.if any promise gets rejected, all promises will be rejected

// syntax:
// promise.all([promise1,promise2,promise3])

// let allPromises =promise.all([doproject,attendTechnicalRound,attendHRRound])
// console.log(allPromises);
//**settled=showing the status of all promises
let allPromises =promise.allSettled([doproject,attendTechnicalRound,attendHRRound])
console.log(allPromises);


5.create a promise as given below(Dependent)
1.roomClean
2.removeGarbage
3.GetThePrice

1.use promise chaining Mechanism
2.use promise.all& promise.allSettledMethod

promise.race()


Use of fetch =>
web apis:
Application Programming Interface

//6.restcountries name
const url="https://restcountries.com/v3.1/all";
fetch (url)
.then((resp)=>resp.json())
.then((data)=>
//get the data from the api
console.log(data[179].capital)
).catch((err)=>{
    //if any error
    console.log(err);
});