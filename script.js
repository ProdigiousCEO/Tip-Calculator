// let bill = document.getElementsByClassName('cal-input');
// let bodyCount = document.getElementById('people-count');
// let tipPercentage;

// function billSpread (bill, bodyCount, totalTip) {
//     if(bill.value == 0 || bodyCount.value == 0) return 'Invalid Input!'
//     let chargePerPerson = bill / bodyCount;
//     let totalCharge = chargePerPerson + totalTip;
//     return totalCharge;
//     //document.getElementById('total').innerText = totalCharge;
// };

// const tipPerPerson = (bill, bodyCount, tipPercentage) => {
//     let indBill = bill / bodyCount;
//     let totalTip = indBill * tipPercentage
//     return totalTip;
//     //document.getElementById('output').innerText = totalTip;
// }
// console.log(tipPerPerson(400, 15, 0.50))
// console.log(billSpread(400, 15, 13.2))


// // bodyCount.addEventListener('input', billSpread)
// // bodyCount.addEventListener('input', tipPerPerson)

// // let fivePercent = document.getElementsByClassName('tip-item-5')
// // .addEventListener('click', function(){tipPercentage = 0.05})

// // let tenPercent = document.getElementsByClassName('tip-item-10')
// // .addEventListener('click', function(){tipPercentage = 0.10})

// // let fifteenPercent = document.getElementsByClassName('tip-item-15')
// // .addEventListener('click', function(){tipPercentage = 0.15})

// // let twentyPercent = document.getElementsByClassName('tip-item-20')
// // .addEventListener('click', function(){tipPercentage = 0.20})

// // let thirtyPercent = document.getElementsByClassName('tip-item-30')
// // .addEventListener('click', function(){tipPercentage = 0.30})


    


const billInput = document.querySelector('.cal-input');
const tipOptions = document.querySelectorAll('.tip-item');
const tipCustom = document.querySelector('#custom');
const peopleInput = document.querySelector('.cal-input2');
const errorMsg = document.querySelector('.error-msg');
const result = document.querySelector('#output');
const results = document.querySelector('#output2');
const reset = document.querySelector('.reset');

let billInputValue = 0.0;//default
let tipPercentage = 0.0; //default
let bodyCount = 0;

const validateFloat = (s) => {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}


const validateInt = (s) => {
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}

 billInput.addEventListener('input', function (){

 if(billInput.value.includes(',')){
     billInput.value = billInput.value.replace(',', '.');
 }  

 if(!validateFloat(billInput.value)){
     billInput.value = billInput.value.substring(0, billInput.value.length - 1);
 }

billInputValue = parseFloat(billInput.value)

calcTipSplitter();

console.log(billInputValue)
 })

 tipCustom.addEventListener('input', function(){
    if(!validateInt(tipCustom.value)){
        tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length - 1)
    }
    tipPercentage = parseFloat(tipCustom.value/100);

    tipOptions.forEach(btn =>{
        btn.classList.remove('btn-active')
    })

    if(tipCustom.value !== ''){
        calcTipSplitter();
    }
 });

 tipOptions.forEach(btn => {
     btn.addEventListener('click', handleClick);
 })

 function handleClick(event){
     tipOptions.forEach(btn => {
         btn.classList.remove('btn-active')

         if(event.target.innerHTML == btn.innerHTML){
             btn.classList.add('btn-active');
             tipPercentage = parseFloat(btn.innerHTML)/100;
         }
     });

     tipCustom.value = '';

     calcTipSplitter();
 }

 peopleInput.addEventListener('input', function (){
    if(!validateInt(peopleInput.value)){
        peopleInput.value = peopleInput.value.substring(0, peopleInput.value.length - 1)
    }

    bodyCount = parseFloat(peopleInput.value)

    if(bodyCount <= 0) {
        //console.log('transmission done')
        errorMsg.style.opacity = 1;
    } else {
            errorMsg.style.opacity = 0;
        
    }
    calcTipSplitter();
    // console.log(bodyCount)
})

reset.addEventListener('click', function(){
    billInput.value = '0'
    peopleInput.value = '0'
    result.value = "$0.00"
    results.value = "$0.00"
})

let calcTipSplitter = () => {
    // console.log(bodyCount);
    let tipPerPerson = (billInputValue * tipPercentage) / bodyCount;
    let totalTip = billInputValue * (tipPercentage + 1) / bodyCount;
    result.value = "$" + tipPerPerson.toFixed(2);
    results.value = "$" + totalTip.toFixed(2);
    // let totalPerPerson = (bill + totalTip) / numberOfPeople;
    // return [tipPerPerson, totalPerPerson]
}



// const peopleInput = document.querySelector('.cal-input2');
// peopleInput.addEventListener('keyup', function (){
//     var numberOfPeople = peopleInput.value;
//     document.querySelector('#output2').value = calcTipSplitter(bill, numberOfPeople, tipPercentage)[1].toFixed(2)
// })

// const tipButton5 = document.querySelector('.tip-item-5');
// tipButton5.addEventListener('click', function(){
//     let tipPercentage = 0.05;
//     return tipPercentage
//     //document.querySelector('#output2').value = calcTipSplitter(bill, numberOfPeople, tipPercentage)[1].toFixed(2)
// })

// const tipButton10 = document.querySelector('.tip-item-10');
// tipButton10.addEventListener('click', function(){
//     let tipPercentage = 0.10;
//     return tipPercentage
//     //document.querySelector('#output2').value = calcTipSplitter(bill, numberOfPeople, tipPercentage)[1].toFixed(2)
// })

// const tipButton15 = document.querySelector('.tip-item-15');
// tipButton15.addEventListener('click', function(){
//     let tipPercentage = 0.15;
//     return tipPercentage
//     //document.querySelector('#output2').value = calcTipSplitter(bill, numberOfPeople, tipPercentage)[1].toFixed(2)
// })

// const tipButton20 = document.querySelector('.tip-item-20');
// tipButton20.addEventListener('click', function(){
//     let tipPercentage = 0.20;
//     return tipPercentage
//     //document.querySelector('#output2').value = calcTipSplitter(bill, numberOfPeople, tipPercentage)[1].toFixed(2)
// })

// const tipButton30 = document.querySelector('.tip-item-30');
// tipButton30.addEventListener('click', function(){
//     let tipPercentage = 0.30;
//     return tipPercentage
//     //document.querySelector('#output2').value = calcTipSplitter(tipPercentage)[1].toFixed(2)
// })


// document.querySelector('#output').value = calcTipSplitter(bill, numberOfPeople, tipPercentage)[0].toFixed(2);
// document.querySelector('#output2').value = calcTipSplitter(50, 15, .5)[1].toFixed(2);