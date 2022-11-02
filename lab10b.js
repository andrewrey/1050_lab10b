////////////////////
////// Elements ////
////////////////////

let firstRowInput = document.querySelector("#firstrow");
let secondRowInput = document.querySelector("#secondrow");
let seperatorInput = document.querySelector("#numsep");
let addButton = document.querySelector("#addmyrows");
let outputMessage = document.querySelector("#outputmsg");

/////////////////////////
/////// Function ////////
/////////////////////////

const addRows = () => {
  let arrayFirstRow = getNumArray(firstRowInput.value, seperatorInput.value);
  let arraySecondRow = getNumArray(secondRowInput.value, seperatorInput.value);

  console.log(arrayFirstRow, arraySecondRow);
  let summedArray = arraySumRow(arrayFirstRow, arraySecondRow);
  outputMessage.innerHTML = `The sum of the rows is ${summedArray.join(" ")}`;
};

const getNumArray = (stringList, seperator) => {
  let seperatedArray = stringList.split(`${seperator}`);
  let numArray = seperatedArray.map((item) => +item);
  return numArray;
};

const arraySumRow = (numArray1, numArray2) => {
  let summedNumArray = [];

  for (let i = 0; i < numArray1.length; i++) {
    let numsToAdd = [numArray1[i], numArray2[i]];
    summedNumArray.push(numsToAdd.reduce((acc, curr) => acc + curr));
  }

  return summedNumArray;
};

addButton.addEventListener("click", () => addRows());
