var amount = 0;
function addRecord(type) {
    // .....Get Elements

    var Pname = document.getElementById("ProjectName")
    var Pamount = document.getElementById("amount")
    var table = document.getElementById("table")
    // ..... create Elements and set values
    var trElement = document.createElement("tr")
    var tdElement1 = document.createElement("td")
    tdElement1.append(Pname.value);
    var tdElement2 = document.createElement("td")
    tdElement2.append(Pamount.value);
    var tdElement3 = document.createElement("td")
    tdElement3.append(type)
    trElement.append(tdElement1)
    trElement.append(tdElement2)
    trElement.append(tdElement3)
    table.append(trElement)
    console.log(type)
    // ....... create Total row and its calculation

    var trResult = document.createElement("tr")
    var tdResult = document.createElement("td")
    tdResult.append("Total")
    var tdAmount = document.createElement("td")
    tdAmount.append(amount)
    trResult.append(tdResult)
    trResult.append(tdAmount)
    table.append(trResult)
}

