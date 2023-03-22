// calculate()
document
  .querySelector("#submit__form__1")
  .addEventListener("click", (event) => {
    event.preventDefault();
    let flag = checkInputs();
    if (flag === true) {
      changeButtonValue();
      calculate();
    }
  });
const trigger = document.querySelector("#submit__form__1");
const modalWrapper = document.querySelector(".modal__wrapper");
const closeBtn = document.querySelector(".close");

trigger.addEventListener("click", function () {
  openModal();
});

closeBtn.addEventListener("click", function () {
  closeModal();
});

modalWrapper.addEventListener("click", function (e) {
  if (e.target !== this) return;
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

function openModal() {
  modalWrapper.classList.add("active");
}
function closeModal() {
  modalWrapper.classList.remove("active");
}

function checkInputs() {
  const unitPrice = document.getElementById("unitPrice").value;
  const unitWeight = document.getElementById("unitWeight").value;
  const materialCost = document.getElementById("materialCost").value;
  const unitPerYear = document.getElementById("unitPerYear").value;
  const directLabor = document.getElementById("directLabor").value;
  let flag = 0;
  // If x is Not a Number or less than one or greater than 10

  if (isNaN(unitPrice) || unitPrice < 1) {
    document.getElementById("unitPriceFail").innerHTML = "Enter a valid number";
    flag = 1;
  } else {
    document.getElementById("unitPriceFail").innerHTML = "";
  }

  if (isNaN(unitWeight) || unitWeight < 1) {
    document.getElementById("unitWeightFail").innerHTML =
      "Enter a valid number";
    flag = 1;
  } else {
    document.getElementById("unitWeightFail").innerHTML = "";
  }
  if (isNaN(materialCost) || materialCost < 1) {
    document.getElementById("materialCostFail").innerHTML =
      "Enter a valid number";
    flag = 1;
  } else {
    document.getElementById("materialCostFail").innerHTML = "";
  }
  if (isNaN(unitPerYear) || unitPerYear < 1) {
    document.getElementById("unitsPerYearFail").innerHTML =
      "Enter a valid number";
    flag = 1;
  } else {
    document.getElementById("unitsPerYearFail").innerHTML = "";
  }
  if (isNaN(directLabor) || directLabor < 1) {
    document.getElementById("directLaborFail").innerHTML =
      "Enter a valid number";
    flag = 1;
  } else {
    document.getElementById("directLaborFail").innerHTML = "";
  }

  if (flag === 0) {
    return true;
  } else {
    return false;
  }
}
function changeButtonValue() {
  // no ';' here
  var elem = document.getElementById("submit__form__1");
  if (elem.value == "calculate") elem.value = "reset";
  else elem.value = "calculate";

  const table = document.getElementById("the__table");
  if (table.style.display === "none") {
    // table.style.display='block';
    // table.style.overflow='auto';
    table.style.setProperty("display", "block");
  } else {
    table.style.display = "none";
    document.getElementById("unitPrice").value = "";
    document.getElementById("unitWeight").value = "";
    document.getElementById("materialCost").value = "";
    document.getElementById("unitPerYear").value = "";
    document.getElementById("directLabor").value = "";
  }
}
function calculate() {
  //Below are constants for debugging
  // const productPrice=5000
  // const unitPrice = 0
  // const materialCost = 1500
  // const directLabor = 50
  // const unitWeight= 50
  // const unitPerYear = 100

  //below are 5 inputs to be taken from user
  const productPrice = document.getElementById("unitPrice").value; //this is kept fixed
  // const unitPrice = 0;
  const unitWeight = document.getElementById("unitWeight").value;
  const materialCost = document.getElementById("materialCost").value;
  const unitPerYear = document.getElementById("unitPerYear").value;
  const directLabor = document.getElementById("directLabor").value;

  var productCost = document.getElementsByName("productPrice");
  for (var i = 0; i < productCost.length; i++) {
    productCost[i].innerHTML = "$" + productPrice;
  }
  // var unitCost= document.getElementsByName("unitCost")
  // for (var i=0;i<unitCost.length;i++){
  //   unitCost[i].innerHTML="$" + unitPrice
  // }
  var materialCostName = document.getElementsByName("materialCost");
  for (var i = 0; i < materialCostName.length; i++) {
    materialCostName[i].innerHTML = "$" + materialCost;
  }
  var directLaborName = document.getElementsByName("directLaborhrs");
  for (var i = 0; i < directLaborName.length; i++) {
    directLaborName[i].innerHTML = directLabor;
  }

  const materialOverhead = materialCost * 0.03;
  var materialOverheadArray = document.getElementsByName("materialOverhead");
  for (var i = 0; i < materialOverheadArray.length; i++) {
    materialOverheadArray[i].innerHTML = "$" + materialOverhead.toFixed(2);
  }

  var unitsPerYearName = document.getElementsByName("unitsPerYear");
  for (var i = 0; i < unitsPerYearName.length; i++) {
    unitsPerYearName[i].innerHTML = unitPerYear;
  }
  //labor charges
  const lcCACA = (30 * directLabor).toFixed(2);
  const lcCHCA = (10 * directLabor).toFixed(2);
  const lcCACH = (30 * directLabor).toFixed(2);
  const lcCHCH = (10 * directLabor).toFixed(2);
  const lcMECA = (15 * directLabor).toFixed(2);

  document.getElementById("lcCACA").innerHTML = "$" + lcCACA;
  document.getElementById("lcCHCA").innerHTML = "$" + lcCHCA;
  document.getElementById("lcCACH").innerHTML = "$" + lcCACH;
  document.getElementById("lcCHCH").innerHTML = "$" + lcCHCH;
  document.getElementById("lcMECA").innerHTML = "$" + lcMECA;

  //for duty charge
  const dutyChargeCACA = (productPrice * 0).toFixed(2);
  const dutyChargeCHCA = (productPrice * 0.25).toFixed(2);
  const dutyChargeCACH = (productPrice * 0.2).toFixed(2);
  const dutyChargeCHCH = (productPrice * 0).toFixed(2);
  const dutyChargeMECA = (productPrice * 0.03).toFixed(2);

  document.getElementById("dutyChargeCACA").innerHTML = "$" + dutyChargeCACA;
  document.getElementById("dutyChargeCHCA").innerHTML = "$" + dutyChargeCHCA;
  document.getElementById("dutyChargeCACH").innerHTML = "$" + dutyChargeCACH;
  document.getElementById("dutyChargeCHCH").innerHTML = "$" + dutyChargeCHCH;
  document.getElementById("dutyChargeMECA").innerHTML = "$" + dutyChargeMECA;

  //for custom fees
  const customFeesCACA = (productPrice * 0).toFixed(2);
  const customFeesCHCA = (productPrice * 0.0159).toFixed(2);
  const customFeesCACH = (productPrice * 0.0339).toFixed(2);
  const customFeesCHCH = (productPrice * 0).toFixed(2);
  const customFeesMECA = (productPrice * 0.0159).toFixed(2);
  document.getElementById("customFeesCACA").innerHTML = "$" + customFeesCACA;
  document.getElementById("customFeesCHCA").innerHTML = "$" + customFeesCHCA;
  document.getElementById("customFeesCACH").innerHTML = "$" + customFeesCACH;
  document.getElementById("customFeesCHCH").innerHTML = "$" + customFeesCHCH;
  document.getElementById("customFeesMECA").innerHTML = "$" + customFeesMECA;

  //unit weight
  var weightArray = document.getElementsByName("unitWeight");
  for (var i = 0; i < weightArray.length; i++) {
    weightArray[i].innerHTML = unitWeight;
  }

  //Ocean Freight Cost
  const ofcCHCA = (unitWeight * 24).toFixed(2);
  const ofcCACH = (unitWeight * 24).toFixed(2);
  document.getElementById("ofcCHCA").innerHTML = "$" + ofcCHCA;
  document.getElementById("ofcCACH").innerHTML = "$" + ofcCACH;

  //port to customer cost
  const pocCHCA = (unitWeight * 12).toFixed(2);
  const pocCACH = (unitWeight * 8).toFixed(2);
  document.getElementById("pocCHCA").innerHTML = "$" + pocCHCA;
  document.getElementById("pocCACH").innerHTML = "$" + pocCACH;

  //for Factory to Customer cost
  const focCACA = (unitWeight * 12).toFixed(2);
  const focCHCH = (unitWeight * 8).toFixed(2);
  const focMECA = (unitWeight * 11).toFixed(2);
  const focCHCA = 0;
  const focCACH = 0;
  document.getElementById("focCACA").innerHTML = "$" + focCACA;
  //document.getElementById("focCHCA").innerHTML= "$" + (unitWeight * 12).toFixed(2)  missing from sheet
  //document.getElementById("focCACH").innerHTML= "$" + (unitWeight * 12).toFixed(2)  missing from sheet
  document.getElementById("focCHCH").innerHTML = "$" + focCHCH;
  document.getElementById("focMECA").innerHTML = "$" + focMECA;

  //Shipping insurance
  const siCACA = (productPrice * 0.01).toFixed(2);
  const siCHCA = (productPrice * 0.05).toFixed(2);
  const siCACH = (productPrice * 0.05).toFixed(2);
  const siCHCH = (productPrice * 0.01).toFixed(2);
  const siMECA = (productPrice * 0.05).toFixed(2);
  document.getElementById("siCACA").innerHTML = "$" + siCACA;
  document.getElementById("siCHCA").innerHTML = "$" + siCHCA;
  document.getElementById("siCACH").innerHTML = "$" + siCACH;
  document.getElementById("siCHCH").innerHTML = "$" + siCHCH;
  document.getElementById("siMECA").innerHTML = "$" + siMECA;

  //for Shipping Cost
  /*Note there are shipping cost constants---Logistics costs
ISF
National security fee
Import handling fee
Bill of Lading
Documentation fee and other additional costs
Pallet/Crating cost
Labor for packing */
  const shippingCostConstantFactorCACA = 345;
  const shippingCostConstantFactorCHCA = 815;
  const shippingCostConstantFactorCACH = 795;
  const shippingCostConstantFactorCHCH = 335;
  const shippingCostConstantFactorMECA = 790;

  const cumulativeProductCACA =
    eval(materialCost) +
    eval(materialOverhead) +
    eval(lcCACA) +
    eval(shippingCostConstantFactorCACA) +
    eval(dutyChargeCACA) +
    eval(customFeesCACA) +
    eval(focCACA) +
    eval(siCACA);
  const cumulativeProductCHCA =
    eval(materialCost) +
    eval(materialOverhead) +
    eval(lcCHCA) +
    eval(shippingCostConstantFactorCHCA) +
    eval(dutyChargeCHCA) +
    eval(customFeesCHCA) +
    eval(focCHCA) +
    eval(siCHCA) +
    eval(ofcCHCA) +
    eval(pocCHCA);
  const cumulativeProductCACH =
    eval(materialCost) +
    eval(materialOverhead) +
    eval(lcCACH) +
    eval(shippingCostConstantFactorCACH) +
    eval(dutyChargeCACH) +
    eval(customFeesCACH) +
    eval(focCACH) +
    eval(siCACH) +
    eval(ofcCACH) +
    eval(pocCACH);
  const cumulativeProductCHCH =
    eval(materialCost) +
    eval(materialOverhead) +
    eval(lcCHCH) +
    eval(shippingCostConstantFactorCHCH) +
    eval(dutyChargeCHCH) +
    eval(customFeesCHCH) +
    eval(focCHCH) +
    eval(siCHCH);
  const cumulativeProductMECA =
    eval(materialCost) +
    eval(materialOverhead) +
    eval(lcMECA) +
    eval(shippingCostConstantFactorMECA) +
    eval(dutyChargeMECA) +
    eval(customFeesMECA) +
    eval(focMECA) +
    eval(siMECA);

  //for Cumulative Product + shipping cost
  document.getElementById("cpstCACA").innerHTML =
    "$" + cumulativeProductCACA.toFixed(2);
  document.getElementById("cpstCHCA").innerHTML =
    "$" + cumulativeProductCHCA.toFixed(2);
  document.getElementById("cpstCACH").innerHTML =
    "$" + cumulativeProductCACH.toFixed(2);
  document.getElementById("cpstCHCH").innerHTML =
    "$" + cumulativeProductCHCH.toFixed(2);
  document.getElementById("cpstMECA").innerHTML =
    "$" + cumulativeProductMECA.toFixed(2);

  //for Cumulative Product + shipping cost for total units per year
  document.getElementById("cpstpyCACA").innerHTML =
    "$" + (cumulativeProductCACA * unitPerYear).toFixed(2);
  document.getElementById("cpstpyCHCA").innerHTML =
    "$" + (cumulativeProductCHCA * unitPerYear).toFixed(2);
  document.getElementById("cpstpyCACH").innerHTML =
    "$" + (cumulativeProductCACH * unitPerYear).toFixed(2);
  document.getElementById("cpstpyCHCH").innerHTML =
    "$" + (cumulativeProductCHCH * unitPerYear).toFixed(2);
  document.getElementById("cpstpyMECA").innerHTML =
    "$" + (cumulativeProductMECA * unitPerYear).toFixed(2);

  //for wage inflation calculations
  const wiCACA = (0.167 * lcCACA).toFixed(2);
  const wiCHCA = (0.504 * lcCHCA).toFixed(2);
  const wiCACH = (0.167 * lcCACH).toFixed(2);
  const wiCHCH = (0.504 * lcCHCH).toFixed(2);
  const wiMECA = (0.309 * lcMECA).toFixed(2);
  document.getElementById("wiCACA").innerHTML = "$" + wiCACA;
  document.getElementById("wiCHCA").innerHTML = "$" + wiCHCA;
  document.getElementById("wiCACH").innerHTML = "$" + wiCACH;
  document.getElementById("wiCHCH").innerHTML = "$" + wiCHCH;
  document.getElementById("wiMECA").innerHTML = "$" + wiMECA;

  //Cumulative Product + Shipping 5 Year Forecast per unit
  document.getElementById("cpst5yCACA").innerHTML =
    "$" + (eval(wiCACA) + eval(cumulativeProductCACA)).toFixed(2);
  document.getElementById("cpst5yCHCA").innerHTML =
    "$" + (eval(wiCACA) + eval(cumulativeProductCHCA)).toFixed(2);
  document.getElementById("cpst5yCACH").innerHTML =
    "$" + (eval(wiCACA) + eval(cumulativeProductCACH)).toFixed(2);
  document.getElementById("cpst5yCHCH").innerHTML =
    "$" + (eval(wiCACA) + eval(cumulativeProductCHCH)).toFixed(2);
  document.getElementById("cpst5yMECA").innerHTML =
    "$" + (eval(wiCACA) + eval(cumulativeProductMECA)).toFixed(2);

  //Tooling Cost
  const toolingCostCACA = 20000;
  const toolingCostCHCA = 5000;
  const toolingCostCACH = 20000;
  const toolingCostCHCH = 5000;
  const toolingCostMECA = 5000;
  document.getElementById("toolingCostCACA").innerHTML =
    "$" + toolingCostCACA.toFixed(2);
  document.getElementById("toolingCostCHCA").innerHTML =
    "$" + toolingCostCHCA.toFixed(2);
  document.getElementById("toolingCostCACH").innerHTML =
    "$" + toolingCostCACH.toFixed(2);
  document.getElementById("toolingCostCHCH").innerHTML =
    "$" + toolingCostCHCH.toFixed(2);
  document.getElementById("toolingCostMECA").innerHTML =
    "$" + toolingCostMECA.toFixed(2);

  document.getElementById("toolingCostPUCACA").innerHTML =
    "$" + (toolingCostCACA / unitPerYear).toFixed(2);
  document.getElementById("toolingCostPUCHCA").innerHTML =
    "$" + (toolingCostCHCA / unitPerYear).toFixed(2);
  document.getElementById("toolingCostPUCACH").innerHTML =
    "$" + (toolingCostCACH / unitPerYear).toFixed(2);
  document.getElementById("toolingCostPUCHCH").innerHTML =
    "$" + (toolingCostCHCH / unitPerYear).toFixed(2);
  document.getElementById("toolingCostPUMECA").innerHTML =
    "$" + (toolingCostMECA / unitPerYear).toFixed(2);

  //Deployment cost
  const tdcCACA = 11800;
  const tdcCHCA = 7600;
  const tdcCACH = 12000;
  const tdcCHCH = 3200;
  const tdcMECA = 7700;
  document.getElementById("tdcCACA").innerHTML = "$" + tdcCACA.toFixed(2);
  document.getElementById("tdcCHCA").innerHTML = "$" + tdcCHCA.toFixed(2);
  document.getElementById("tdcCACH").innerHTML = "$" + tdcCACH.toFixed(2);
  document.getElementById("tdcCHCH").innerHTML = "$" + tdcCHCH.toFixed(2);
  document.getElementById("tdcMECA").innerHTML = "$" + tdcMECA.toFixed(2);

  document.getElementById("tdcPUCACA").innerHTML =
    "$" + (tdcCACA / unitPerYear).toFixed(2);
  document.getElementById("tdcPUCHCA").innerHTML =
    "$" + (tdcCHCA / unitPerYear).toFixed(2);
  document.getElementById("tdcPUCACH").innerHTML =
    "$" + (tdcCACH / unitPerYear).toFixed(2);
  document.getElementById("tdcPUCHCH").innerHTML =
    "$" + (tdcCHCH / unitPerYear).toFixed(2);
  document.getElementById("tdcPUMECA").innerHTML =
    "$" + (tdcMECA / unitPerYear).toFixed(2);

  //Quality Cost
  const qualityCostCACA = 5600;
  const qualityCostCHCA = 6800;
  const qualityCostCACH = 10000;
  const qualityCostCHCH = 2000;
  const qualityCostMECA = 4600;
  document.getElementById("qualityCostCACA").innerHTML =
    "$" + qualityCostCACA.toFixed(2);
  document.getElementById("qualityCostCHCA").innerHTML =
    "$" + qualityCostCHCA.toFixed(2);
  document.getElementById("qualityCostCACH").innerHTML =
    "$" + qualityCostCACH.toFixed(2);
  document.getElementById("qualityCostCHCH").innerHTML =
    "$" + qualityCostCHCH.toFixed(2);
  document.getElementById("qualityCostMECA").innerHTML =
    "$" + qualityCostMECA.toFixed(2);

  document.getElementById("qualityCostPUCACA").innerHTML =
    "$" + (qualityCostCACA / unitPerYear).toFixed(2);
  document.getElementById("qualityCostPUCHCA").innerHTML =
    "$" + (qualityCostCHCA / unitPerYear).toFixed(2);
  document.getElementById("qualityCostPUCACH").innerHTML =
    "$" + (qualityCostCACH / unitPerYear).toFixed(2);
  document.getElementById("qualityCostPUCHCH").innerHTML =
    "$" + (qualityCostCHCH / unitPerYear).toFixed(2);
  document.getElementById("qualityCostPUMECA").innerHTML =
    "$" + (qualityCostMECA / unitPerYear).toFixed(2);

  //packaging cost

  //Per unit packaging costs (if necessary)
  const ppuCACA = 100;
  const ppuCHCA = 100;
  const ppuCACH = 100;
  const ppuCHCH = 100;
  const ppuMECA = 100;

  document.getElementById("ppuCACA").innerHTML = "$" + ppuCACA.toFixed(2);
  document.getElementById("ppuCHCA").innerHTML = "$" + ppuCHCA.toFixed(2);
  document.getElementById("ppuCACH").innerHTML = "$" + ppuCACH.toFixed(2);
  document.getElementById("ppuCHCH").innerHTML = "$" + ppuCHCH.toFixed(2);
  document.getElementById("ppuMECA").innerHTML = "$" + ppuMECA.toFixed(2);

  //Packaging transportation costs (if necessary)
  const ptcCACA = 0;
  const ptcCHCA = 2995;
  const ptcCACH = 0;
  const ptcCHCH = 2995;
  const ptcMECA = 1720;

  document.getElementById("ptcCACA").innerHTML = "$" + ptcCACA.toFixed(2);
  document.getElementById("ptcCHCA").innerHTML = "$" + ptcCHCA.toFixed(2);
  document.getElementById("ptcCACH").innerHTML = "$" + ptcCACH.toFixed(2);
  document.getElementById("ptcCHCH").innerHTML = "$" + ptcCHCH.toFixed(2);
  document.getElementById("ptcMECA").innerHTML = "$" + ptcMECA.toFixed(2);

  //Total packaging costs and transportation costs (if necessary)
  const tpcCACA = eval(ptcCACA) + eval(ppuCACA);
  const tpcCHCA = eval(ptcCHCA) + eval(ppuCACH);
  const tpcCACH = eval(ptcCACH) + eval(ppuCHCA);
  const tpcCHCH = eval(ptcCHCH) + eval(ppuCHCH);
  const tpcMECA = eval(ptcMECA) + eval(ppuMECA);

  document.getElementById("tpcCACA").innerHTML = "$" + tpcCACA.toFixed(2);
  document.getElementById("tpcCHCA").innerHTML = "$" + tpcCHCA.toFixed(2);
  document.getElementById("tpcCACH").innerHTML = "$" + tpcCACH.toFixed(2);
  document.getElementById("tpcCHCH").innerHTML = "$" + tpcCHCH.toFixed(2);
  document.getElementById("tpcMECA").innerHTML = "$" + tpcMECA.toFixed(2);

  //Total packaging costs per unit (if necessary)
  const tpcPUCACA = eval(ptcCACA / unitPerYear) + eval(ppuCACA);
  const tpcPUCHCA = eval(ptcCHCA / unitPerYear) + eval(ppuCACH);
  const tpcPUCACH = eval(ptcCACH / unitPerYear) + eval(ppuCHCA);
  const tpcPUCHCH = eval(ptcCHCH / unitPerYear) + eval(ppuCHCH);
  const tpcPUMECA = eval(ptcMECA / unitPerYear) + eval(ppuMECA);

  document.getElementById("tpcPUCACA").innerHTML = "$" + tpcPUCACA.toFixed(2);
  document.getElementById("tpcPUCHCA").innerHTML = "$" + tpcPUCHCA.toFixed(2);
  document.getElementById("tpcPUCACH").innerHTML = "$" + tpcPUCACH.toFixed(2);
  document.getElementById("tpcPUCHCH").innerHTML = "$" + tpcPUCHCH.toFixed(2);
  document.getElementById("tpcPUMECA").innerHTML = "$" + tpcPUMECA.toFixed(2);

  //Maintenance Cost
  const mcCACA = 13100;
  const mcCHCA = 11100;
  const mcCACH = 15500;
  const mcCHCH = 4300;
  const mcMECA = 9700;
  document.getElementById("mcCACA").innerHTML = "$" + mcCACA.toFixed(2);
  document.getElementById("mcCHCA").innerHTML = "$" + mcCHCA.toFixed(2);
  document.getElementById("mcCACH").innerHTML = "$" + mcCACH.toFixed(2);
  document.getElementById("mcCHCH").innerHTML = "$" + mcCHCH.toFixed(2);
  document.getElementById("mcMECA").innerHTML = "$" + mcMECA.toFixed(2);

  document.getElementById("mcPUCACA").innerHTML =
    "$" + (mcCACA / unitPerYear).toFixed(2);
  document.getElementById("mcPUCHCA").innerHTML =
    "$" + (mcCHCA / unitPerYear).toFixed(2);
  document.getElementById("mcPUCACH").innerHTML =
    "$" + (mcCACH / unitPerYear).toFixed(2);
  document.getElementById("mcPUCHCH").innerHTML =
    "$" + (mcCHCH / unitPerYear).toFixed(2);
  document.getElementById("mcPUMECA").innerHTML =
    "$" + (mcMECA / unitPerYear).toFixed(2);

  //design error risk
  const derCACA = 2800;
  const derCHCA = 3400;
  const derCACH = 5000;
  const derCHCH = 1000;
  const derMECA = 2300;
  document.getElementById("derCACA").innerHTML = "$" + derCACA.toFixed(2);
  document.getElementById("derCHCA").innerHTML = "$" + derCHCA.toFixed(2);
  document.getElementById("derCACH").innerHTML = "$" + derCACH.toFixed(2);
  document.getElementById("derCHCH").innerHTML = "$" + derCHCH.toFixed(2);
  document.getElementById("derMECA").innerHTML = "$" + derMECA.toFixed(2);

  //rework risk
  const rwrCACA = eval(productPrice) * 0.03;
  const rwrCHCA = eval(productPrice) * 0.06;
  const rwrCACH = eval(productPrice) * 0.03;
  const rwrCHCH = eval(productPrice) * 0.06;
  const rwrMECA = eval(productPrice) * 0.07;
  document.getElementById("rwrCACA").innerHTML = "$" + rwrCACA.toFixed(2);
  document.getElementById("rwrCHCA").innerHTML = "$" + rwrCHCA.toFixed(2);
  document.getElementById("rwrCACH").innerHTML = "$" + rwrCACH.toFixed(2);
  document.getElementById("rwrCHCH").innerHTML = "$" + rwrCHCH.toFixed(2);
  document.getElementById("rwrMECA").innerHTML = "$" + rwrMECA.toFixed(2);

  //ip risk
  const iprCACA = productPrice * 0.01;
  const iprCHCA = productPrice * 0.15;
  const iprCACH = productPrice * 0.01;
  const iprCHCH = productPrice * 0.15;
  const iprMECA = productPrice * 0.1;
  document.getElementById("iprCACA").innerHTML = "$" + iprCACA.toFixed(2);
  document.getElementById("iprCHCA").innerHTML = "$" + iprCHCA.toFixed(2);
  document.getElementById("iprCACH").innerHTML = "$" + iprCACH.toFixed(2);
  document.getElementById("iprCHCH").innerHTML = "$" + iprCHCH.toFixed(2);
  document.getElementById("iprMECA").innerHTML = "$" + iprMECA.toFixed(2);

  //tracibilty risk
  const trCACA = productPrice * 0.01;
  const trCHCA = productPrice * 0.15;
  const trCACH = productPrice * 0.01;
  const trCHCH = productPrice * 0.15;
  const trMECA = productPrice * 0.1;
  document.getElementById("trCACA").innerHTML = "$" + trCACA.toFixed(2);
  document.getElementById("trCHCA").innerHTML = "$" + trCHCA.toFixed(2);
  document.getElementById("trCACH").innerHTML = "$" + trCACH.toFixed(2);
  document.getElementById("trCHCH").innerHTML = "$" + trCHCH.toFixed(2);
  document.getElementById("trMECA").innerHTML = "$" + trMECA.toFixed(2);

  //supplier risks
  const srCACA = productPrice * 0.1;
  const srCHCA = productPrice * 0.5;
  const srCACH = productPrice * 0.1;
  const srCHCH = productPrice * 0.5;
  const srMECA = productPrice * 0.25;
  document.getElementById("srCACA").innerHTML = "$" + srCACA.toFixed(2);
  document.getElementById("srCHCA").innerHTML = "$" + srCHCA.toFixed(2);
  document.getElementById("srCACH").innerHTML = "$" + srCACH.toFixed(2);
  document.getElementById("srCHCH").innerHTML = "$" + srCHCH.toFixed(2);
  document.getElementById("srMECA").innerHTML = "$" + srMECA.toFixed(2);

  //total risks
  const trsCACA =
    eval(srCACA) + eval(trCACA) + eval(iprCACA) + eval(rwrCACA) + eval(2800);
  const trsCHCA =
    eval(srCHCA) + eval(trCHCA) + eval(iprCHCA) + eval(rwrCHCA) + eval(3400);
  const trsCACH =
    eval(srCACH) + eval(trCACH) + eval(iprCACH) + eval(rwrCACH) + eval(5000);
  const trsCHCH =
    eval(srCHCH) + eval(trCHCH) + eval(iprCHCA) + eval(rwrCHCA) + eval(1000);
  const trsMECA =
    eval(srMECA) + eval(trMECA) + eval(iprMECA) + eval(rwrMECA) + eval(2300);
  document.getElementById("trsCACA").innerHTML = "$" + trsCACA.toFixed(2);
  document.getElementById("trsCHCA").innerHTML = "$" + trsCHCA.toFixed(2);
  document.getElementById("trsCACH").innerHTML = "$" + trsCACH.toFixed(2);
  document.getElementById("trsCHCH").innerHTML = "$" + trsCHCH.toFixed(2);
  document.getElementById("trsMECA").innerHTML = "$" + trsMECA.toFixed(2);

  document.getElementById("trsPUCACA").innerHTML =
    "$" + (trsCACA / unitPerYear).toFixed(2);
  document.getElementById("trsPUCHCA").innerHTML =
    "$" + (trsCHCA / unitPerYear).toFixed(2);
  document.getElementById("trsPUCACH").innerHTML =
    "$" + (trsCACH / unitPerYear).toFixed(2);
  document.getElementById("trsPUCHCH").innerHTML =
    "$" + (trsCHCH / unitPerYear).toFixed(2);
  document.getElementById("trsPUMECA").innerHTML =
    "$" + (trsMECA / unitPerYear).toFixed(2);

  //total costs
  const tocCACA =
    eval(trsCACA) +
    eval(mcCACA) +
    eval(tpcCACA) +
    eval(qualityCostCACA) +
    eval(toolingCostCACA) +
    eval(tdcCACA);
  const tocCHCA =
    eval(trsCHCA) +
    eval(mcCHCA) +
    eval(tpcCHCA) +
    eval(qualityCostCHCA) +
    eval(toolingCostCHCA) +
    eval(tdcCHCA);
  const tocCACH =
    eval(trsCACH) +
    eval(mcCACH) +
    eval(tpcCACH) +
    eval(qualityCostCACH) +
    eval(toolingCostCACH) +
    eval(tdcCACH);
  const tocCHCH =
    eval(trsCHCH) +
    eval(mcCHCH) +
    eval(tpcCHCH) +
    eval(qualityCostCHCH) +
    eval(toolingCostCHCH) +
    eval(tdcCHCH);
  const tocMECA =
    eval(trsMECA) +
    eval(mcMECA) +
    eval(tpcMECA) +
    eval(qualityCostMECA) +
    eval(toolingCostMECA) +
    eval(tdcMECA);
  document.getElementById("tocCACA").innerHTML = "$" + tocCACA.toFixed(2);
  document.getElementById("tocCHCA").innerHTML = "$" + tocCHCA.toFixed(2);
  document.getElementById("tocCACH").innerHTML = "$" + tocCACH.toFixed(2);
  document.getElementById("tocCHCH").innerHTML = "$" + tocCHCH.toFixed(2);
  document.getElementById("tocMECA").innerHTML = "$" + tocMECA.toFixed(2);

  const tocPUCACA = tocCACA / unitPerYear;
  const tocPUCHCA = tocCHCA / unitPerYear;
  const tocPUCACH = tocCACH / unitPerYear;
  const tocPUCHCH = tocCHCH / unitPerYear;
  const tocPUMECA = tocMECA / unitPerYear;
  document.getElementById("tocPUCACA").innerHTML =
    "$" + (tocCACA / unitPerYear).toFixed(2);
  document.getElementById("tocPUCHCA").innerHTML =
    "$" + (tocCHCA / unitPerYear).toFixed(2);
  document.getElementById("tocPUCACH").innerHTML =
    "$" + (tocCACH / unitPerYear).toFixed(2);
  document.getElementById("tocPUCHCH").innerHTML =
    "$" + (tocCHCH / unitPerYear).toFixed(2);
  document.getElementById("tocPUMECA").innerHTML =
    "$" + (tocMECA / unitPerYear).toFixed(2);

  //Products + shipping + other cost
  const psoCACA = eval(tocPUCACA) + eval(cumulativeProductCACA);
  const psoCHCA = eval(tocPUCHCA) + eval(cumulativeProductCHCA);
  const psoCACH = eval(tocPUCACH) + eval(cumulativeProductCACH);
  const psoCHCH = eval(tocPUCHCH) + eval(cumulativeProductCHCH);
  const psoMECA = eval(tocPUMECA) + eval(cumulativeProductMECA);

  document.getElementById("psoPUCACA").innerHTML = "$" + psoCACA.toFixed(2);
  document.getElementById("psoPUCHCA").innerHTML = "$" + psoCHCA.toFixed(2);
  document.getElementById("psoPUCACH").innerHTML = "$" + psoCACH.toFixed(2);
  document.getElementById("psoPUCHCH").innerHTML = "$" + psoCHCH.toFixed(2);
  document.getElementById("psoPUMECA").innerHTML = "$" + psoMECA.toFixed(2);

  // alert("calculations function executed successfully")
}

// }
// materials.forEach(sx=>{
// })

// }

// e.preventDefault();

// var formReload = document.getElementById("mc-forms");
// function handleForm(event) { event.preventDefault(); }
// formReload.addEventListener('submit', handleForm);
