// calculate()
document.querySelector('#submit').addEventListener('click', event =>{
    event.preventDefault();
    let flag=checkInputs();
    if (flag===true)
    {changeButtonValue()
    calculate()
}

})
const trigger = document.querySelector('#submit');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal();
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        closeModal();
    }
})

function openModal() {
    modalWrapper.classList.add('active');
}
function closeModal() {
    modalWrapper.classList.remove('active');
}


function checkInputs(){

const unitPrice = document.getElementById("unitPrice").value;
const unitWeight= document.getElementById("unitWeight").value;
const materialCost = document.getElementById("materialCost").value;
const unitPerYear = document.getElementById("unitPerYear").value;
const directLabor = document.getElementById("directLabor").value;
let flag=0
  // If x is Not a Number or less than one or greater than 10

  if (isNaN(unitPrice) || unitPrice < 1) {
    document.getElementById("unitPriceFail").innerHTML = "Enter a valid number";
    flag=1
  } else {
    document.getElementById("unitPriceFail").innerHTML = "";

  }
  
  if (isNaN(unitWeight) || unitWeight < 1 ){
    document.getElementById("unitWeightFail").innerHTML = "Enter a valid number";
    flag=1
  } else {
    document.getElementById("unitWeightFail").innerHTML = "";

  }
  if (isNaN(materialCost) || materialCost < 1) {
    document.getElementById("materialCostFail").innerHTML = "Enter a valid number";
    flag=1
  } else {
    document.getElementById("materialCostFail").innerHTML = "";

  }
  if (isNaN(unitPerYear) || unitPerYear < 1) {
    document.getElementById("unitsPerYearFail").innerHTML = "Enter a valid number";
    flag=1
  } else {
    document.getElementById("unitsPerYearFail").innerHTML = "";

  }
  if (isNaN(directLabor) || directLabor < 1) {
    document.getElementById("directLaborFail").innerHTML = "Enter a valid number";
    flag=1
  } else {
    document.getElementById("directLaborFail").innerHTML = "";

  }

  if (flag===0){
    return true
  } 
  else{
    return false
  }
}
function changeButtonValue() // no ';' here
{
    var elem = document.getElementById("submit");
    if (elem.value=="calculate") elem.value = "reset";

    else elem.value = "calculate";

    var table= document.getElementById("the__table");
    if (table.style.display==="none"){
        table.style.display='block';
        table.style.overflow='scroll';

        
    }
    else {table.style.display='none' 
    document.getElementById("unitPrice").value=""
    document.getElementById("unitWeight").value=""
    document.getElementById("materialCost").value=""
    document.getElementById("unitPerYear").value=""
    document.getElementById("directLabor").value=""
    }
}
function calculate(){

//Below are constants for debugging
// const productPrice=5000
// const unitPrice = 0
// const materialCost = 1500
// const directLabor = 50
// const unitWeight= 50
// const unitPerYear = 100

//below are 5 inputs to be taken from user
const productPrice=document.getElementById("unitPrice").value; //this is kept fixed 
const unitPrice = None;
const unitWeight= document.getElementById("unitWeight").value;
const materialCost = document.getElementById("materialCost").value;
const unitPerYear = document.getElementById("unitPerYear").value;
const directLabor = document.getElementById("directLabor").value;

var unitCost= document.getElementsByName("unitCost")
for (var i=0;i<unitCost.length;i++){
  unitCost[i].innerHTML="$" + unitPrice
}
var materialCostName= document.getElementsByName("materialCost")
for (var i=0;i<materialCostName.length;i++){
  materialCostName[i].innerHTML="$" + materialCost
}
var directLaborName= document.getElementsByName("directLaborhrs")
for (var i=0;i<directLaborName.length;i++){
  directLaborName[i].innerHTML="$" + directLabor
}


const materialOverhead= materialCost*0.03
var materials= document.getElementsByName("materialOverhead")

for(var i =0; i<materials.length;i++){
  materials[i].innerHTML="$" + materialOverhead.toFixed(2)
}
var unitsPerYearName= document.getElementsByName("unitsPerYear")
for(var i= 0; i<unitsPerYearName.length;i++){
  unitsPerYearName[i].innerHTML="$" + unitPerYear
}
//labor charges
const lcCACA= (50*directLabor).toFixed(2)
const lcCHCA= (10*directLabor).toFixed(2)
const lcCACH= (50*directLabor).toFixed(2)
const lcCHCH= (10*directLabor).toFixed(2)
const lcMECA= (20*directLabor).toFixed(2)

document.getElementById("lcCACA").innerHTML= "$" + lcCACA
document.getElementById("lcCHCA").innerHTML= "$" + lcCHCA
document.getElementById("lcCACH").innerHTML= "$" + lcCACH
document.getElementById("lcCHCH").innerHTML= "$" + lcCHCH
document.getElementById("lcMECA").innerHTML= "$" + lcMECA





//for duty charge
const dutyChargeCACA = (productPrice * 0).toFixed(2)
const dutyChargeCHCA = (productPrice * 0.25).toFixed(2)
const dutyChargeCACH = (productPrice * 0.20).toFixed(2)
const dutyChargeCHCH = (productPrice * 0).toFixed(2)
const dutyChargeMECA = (productPrice * 0.03).toFixed(2)

document.getElementById("dutyChargeCACA").innerHTML= "$" + dutyChargeCACA
document.getElementById("dutyChargeCHCA").innerHTML= "$" + dutyChargeCHCA
document.getElementById("dutyChargeCACH").innerHTML= "$" + dutyChargeCACH
document.getElementById("dutyChargeCHCH").innerHTML= "$" +  dutyChargeCHCH
document.getElementById("dutyChargeMECA").innerHTML= "$" + dutyChargeMECA




//for custom fees
const customFeesCACA= (productPrice * 0).toFixed(2)
const customFeesCHCA= (productPrice * 0.0159).toFixed(2)
const customFeesCACH= (productPrice * 0.0339).toFixed(2)
const customFeesCHCH= (productPrice * 0).toFixed(2)
const customFeesMECA= (productPrice * 0.0159).toFixed(2)
document.getElementById("customFeesCACA").innerHTML= "$" + customFeesCACA
document.getElementById("customFeesCHCA").innerHTML= "$" + customFeesCHCA
document.getElementById("customFeesCACH").innerHTML= "$" + customFeesCACH
document.getElementById("customFeesCHCH").innerHTML= "$" + customFeesCHCH
document.getElementById("customFeesMECA").innerHTML= "$" + customFeesMECA

//Ocean Freight Cost
const ofcCHCA = (unitWeight*24).toFixed(2)
const ofcCACH = (unitWeight*24).toFixed(2)
document.getElementById("ofcCHCA").innerHTML= "$" + ofcCHCA
document.getElementById("ofcCACH").innerHTML= "$" + ofcCACH

//port to customer cost
const pocCHCA=(unitWeight*12).toFixed(2)
const pocCACH= (unitWeight*8).toFixed(2)
document.getElementById("pocCHCA").innerHTML= "$" + pocCHCA
document.getElementById("pocCACH").innerHTML= "$" + pocCACH


//for Factory to Customer cost
const focCACA = (unitWeight * 12).toFixed(2)
const focCHCH = (unitWeight * 8).toFixed(2)
const focMECA= (unitWeight * 11).toFixed(2)
const focCHCA = 0
const focCACH = 0
document.getElementById("focCACA").innerHTML= "$" + focCACA
//document.getElementById("focCHCA").innerHTML= "$" + (unitWeight * 12).toFixed(2)  missing from sheet
//document.getElementById("focCACH").innerHTML= "$" + (unitWeight * 12).toFixed(2)  missing from sheet
document.getElementById("focCHCH").innerHTML= "$" + focCHCH
document.getElementById("focMECA").innerHTML= "$" + focMECA

//Shipping insurance
const siCACA= (productPrice * 0.01).toFixed(2)
const siCHCA= (productPrice * 0.05).toFixed(2)
const siCACH= (productPrice * 0.05).toFixed(2)
const siCHCH= (productPrice * 0.01).toFixed(2)
const siMECA= (productPrice * 0.05).toFixed(2)
document.getElementById("siCACA").innerHTML= "$" + siCACA
document.getElementById("siCHCA").innerHTML= "$" + siCHCA
document.getElementById("siCACH").innerHTML= "$" + siCACH
document.getElementById("siCHCH").innerHTML= "$" + siCHCH
document.getElementById("siMECA").innerHTML= "$" + siMECA


//for Shipping Cost
/*Note there are shipping cost constants---Logistics costs
ISF
National security fee
Import handling fee
Bill of Lading
Documentation fee and other additional costs
Pallet/Crating cost
Labor for packing */
const shippingCostConstantFactorCACA = 365
const shippingCostConstantFactorCHCA = 815
const shippingCostConstantFactorCACH = 815
const shippingCostConstantFactorCHCH = 335
const shippingCostConstantFactorMECA = 790

const cumulativeProductCACA= eval(materialCost) + eval(materialOverhead)  + eval(lcCACA) + eval(shippingCostConstantFactorCACA) + eval(dutyChargeCACA)+ eval(customFeesCACA) + eval(focCACA) + eval(siCACA) 
const cumulativeProductCHCA= eval(materialCost) + eval(materialOverhead) +   eval(lcCHCA) + eval(shippingCostConstantFactorCHCA) + eval(dutyChargeCHCA)+ eval(customFeesCHCA) + eval(focCHCA) + eval(siCHCA) + eval(ofcCHCA) + eval(pocCHCA ) 
const cumulativeProductCACH= eval(materialCost) + eval(materialOverhead) +   eval(lcCACH)+ eval(shippingCostConstantFactorCACH) + eval(dutyChargeCACH)+ eval(customFeesCACH) + eval(focCACH) + eval(siCACH) + eval(ofcCACH) + eval(pocCACH)  
const cumulativeProductCHCH= eval(materialCost) + eval(materialOverhead) +   eval(lcCHCH) + eval(shippingCostConstantFactorCHCH) + eval(dutyChargeCHCH)+ eval(customFeesCHCH) + eval(focCHCH) + eval(siCHCH)   
const cumulativeProductMECA= eval(materialCost) + eval(materialOverhead) +   eval(lcMECA) + eval(shippingCostConstantFactorMECA) + eval(dutyChargeMECA)+ eval(customFeesMECA) + eval(focMECA) + eval(siMECA)

//for Cumulative Product + shipping cost 
document.getElementById("cpstCACA").innerHTML= "$" + cumulativeProductCACA.toFixed(2)
document.getElementById("cpstCHCA").innerHTML= "$" + cumulativeProductCHCA.toFixed(2)
document.getElementById("cpstCACH").innerHTML= "$" + cumulativeProductCACH.toFixed(2)
document.getElementById("cpstCHCH").innerHTML= "$" + cumulativeProductCHCH.toFixed(2)
document.getElementById("cpstMECA").innerHTML= "$" + cumulativeProductMECA.toFixed(2)

//for Cumulative Product + shipping cost for total units per year

document.getElementById("cpstpyCACA").innerHTML= "$" + (cumulativeProductCACA * unitPerYear).toFixed(2)
document.getElementById("cpstpyCHCA").innerHTML= "$" + (cumulativeProductCHCA * unitPerYear).toFixed(2)
document.getElementById("cpstpyCACH").innerHTML= "$" + (cumulativeProductCACH * unitPerYear).toFixed(2)
document.getElementById("cpstpyCHCH").innerHTML= "$" + (cumulativeProductCHCH * unitPerYear).toFixed(2)
document.getElementById("cpstpyMECA").innerHTML= "$" + (cumulativeProductMECA * unitPerYear).toFixed(2)

//for wage inflation calculations
const wiCACA= (0.167 * lcCACA).toFixed(2)
const wiCHCA= (0.504 * lcCHCA).toFixed(2)
const wiCACH= (0.167 * lcCACH).toFixed(2)
const wiCHCH= (0.504 * lcCHCH).toFixed(2)
const wiMECA= (0.309 * lcMECA).toFixed(2)
document.getElementById("wiCACA").innerHTML= "$" + wiCACA
document.getElementById("wiCHCA").innerHTML= "$" + wiCHCA
document.getElementById("wiCACH").innerHTML= "$" + wiCACH
document.getElementById("wiCHCH").innerHTML= "$" + wiCHCH
document.getElementById("wiMECA").innerHTML= "$" + wiMECA

//Cumulative Product + Shipping 5 Year Forecast per unit
document.getElementById("cpst5yCACA").innerHTML= "$" + (eval(wiCACA) + eval(cumulativeProductCACA)).toFixed(2)
document.getElementById("cpst5yCHCA").innerHTML= "$" + (eval(wiCACA) + eval(cumulativeProductCHCA)).toFixed(2)
document.getElementById("cpst5yCACH").innerHTML= "$" + (eval(wiCACA) + eval(cumulativeProductCACH)).toFixed(2)
document.getElementById("cpst5yCHCH").innerHTML= "$" + (eval(wiCACA) + eval(cumulativeProductCHCH)).toFixed(2)
document.getElementById("cpst5yMECA").innerHTML= "$" + (eval(wiCACA) + eval(cumulativeProductMECA)).toFixed(2)


//rework risk
const rwrCACA = eval(productPrice) * 0.03
const rwrCHCA = eval(productPrice) * 0.06
const rwrCACH = eval(productPrice) * 0.03
const rwrCHCH = eval(productPrice) * 0.06
const rwrMECA = eval(productPrice) * 0.07
document.getElementById("rwrCACA").innerHTML= "$" + (rwrCACA).toFixed(2)
document.getElementById("rwrCHCA").innerHTML= "$" + (rwrCHCA).toFixed(2)
document.getElementById("rwrCACH").innerHTML= "$" + (rwrCACH).toFixed(2)
document.getElementById("rwrCHCH").innerHTML= "$" + (rwrCHCH).toFixed(2)
document.getElementById("rwrMECA").innerHTML= "$" + (rwrMECA).toFixed(2)

//ip risk
const iprCACA = productPrice * 0.01
const iprCHCA = productPrice * 0.15
const iprCACH = productPrice * 0.01
const iprCHCH = productPrice * 0.15
const iprMECA = productPrice * 0.1
document.getElementById("iprCACA").innerHTML= "$" + (iprCACA).toFixed(2)
document.getElementById("iprCHCA").innerHTML= "$" + (iprCHCA).toFixed(2)
document.getElementById("iprCACH").innerHTML= "$" + (iprCACH).toFixed(2)
document.getElementById("iprCHCH").innerHTML= "$" + (iprCHCH).toFixed(2)
document.getElementById("iprMECA").innerHTML= "$" + (iprMECA).toFixed(2)


//tracibilty risk
const trCACA = productPrice * 0.01
const trCHCA = productPrice * 0.15
const trCACH = productPrice * 0.01
const trCHCH = productPrice * 0.15
const trMECA = productPrice * 0.1
document.getElementById("trCACA").innerHTML= "$" + (trCACA).toFixed(2)
document.getElementById("trCHCA").innerHTML= "$" + (trCHCA).toFixed(2)
document.getElementById("trCACH").innerHTML= "$" + (trCACH).toFixed(2)
document.getElementById("trCHCH").innerHTML= "$" + (trCHCH).toFixed(2)
document.getElementById("trMECA").innerHTML= "$" + (trMECA).toFixed(2)

//supplier risks
const srCACA = productPrice * 0.05
const srCHCA = productPrice * 0.15
const srCACH = productPrice * 0.05
const srCHCH = productPrice * 0.15
const srMECA = productPrice * 0.1
document.getElementById("srCACA").innerHTML= "$" + (srCACA).toFixed(2)
document.getElementById("srCHCA").innerHTML= "$" + (srCHCA).toFixed(2)
document.getElementById("srCACH").innerHTML= "$" + (srCACH).toFixed(2)
document.getElementById("srCHCH").innerHTML= "$" + (srCHCH).toFixed(2)
document.getElementById("srMECA").innerHTML= "$" + (srMECA).toFixed(2)

//total risks
const trsCACA = eval(srCACA)+eval(trCACA)+ eval(iprCACA) + eval(rwrCACA) + eval(2800) 
const trsCHCA = eval(srCHCA)+eval(trCHCA)+ eval(iprCHCA) + eval(rwrCHCA) + eval(3400) 
const trsCACH = eval(srCACH)+eval(trCACH)+ eval(iprCACH) + eval(rwrCACH) + eval(5000) 
const trsCHCH = eval(srCHCH)+eval(trCHCH)+ eval(iprCHCA) + eval(rwrCHCA) + eval(1000) 
const trsMECA = eval(srMECA)+eval(trMECA)+ eval(iprMECA) + eval(rwrMECA) + eval(2300) 
document.getElementById("trsCACA").innerHTML= "$" + (trsCACA).toFixed(2)
document.getElementById("trsCHCA").innerHTML= "$" + (trsCHCA).toFixed(2)
document.getElementById("trsCACH").innerHTML= "$" + (trsCACH).toFixed(2)
document.getElementById("trsCHCH").innerHTML= "$" + (trsCHCH).toFixed(2)
document.getElementById("trsMECA").innerHTML= "$" + (trsMECA).toFixed(2)


// alert("ss")
}

// }
// materials.forEach(sx=>{
// })
    
// }


// e.preventDefault();


    
 // var formReload = document.getElementById("mc-forms");
 // function handleForm(event) { event.preventDefault(); } 
 // formReload.addEventListener('submit', handleForm);

