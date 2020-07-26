
////--------- Task No.2
function expandLoris() {
     var expandedParagraph = "Lunar K2 Bluetooth Wireless Headphone - Rechargeable - Stereo - Mobile Headset - BLACK <br> Specifications of Lunar K2 Bluetooth Wireless Headphone - Rechargeable - Stereo - Mobile Headset - SILVER      BrandlunarSKU141898190_PK-1302040270ConnectorUSBCable Lengthunder 0.5mModelLunar K2 Bluetooth Wireless Headphone - Rechargeable - Stereo - Mobile Headset - SILVERWarranty Policy EN1 Month Brand Warranty. No warranty if broken or damage";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}
///------Task no.3


function addRecord(){
    var list =document.getElementById("list")
    var table = document.getElementById("myTable");

    var studentName =document.getElementById("inputName")
    var fatherName =document.getElementById("inputFatherName")
    var address =document.getElementById("inputAddress")
    var studentClass=document.getElementById("inputState")


    var li=document.createElement('li')
    var liText=document.createTextNode(studentName.value)
    li.appendChild(liText)

    ///////////------------table
    // var arrHead = new Array();
    // arrHead = ['Std.Name', 'Father.Name', 'Address', 'Class', 'Operation']
    // var tr = table.insertRow(-1);
    // for (var h = 0; h < arrHead.length; h++) {
    //     var th = document.createElement('th');              
    //     th.innerHTML = arrHead[h];
    //     tr.appendChild(th);
    // }

    var row = table.insertRow(0);
    var _cellName = row.insertCell(0);
    _cellName.innerHTML = studentName.value;
    var cellFatherName = row.insertCell(1);
    cellFatherName.innerHTML = fatherName.value;
    var stAddress = row.insertCell(2);
    stAddress.innerHTML = address.value;
    var stClass = row.insertCell(3);
    stClass.innerHTML = studentClass.value;

    var delBtn =document.createElement("button")
    var delText= document.createTextNode("Delete")
    delBtn.setAttribute("onClick","deleteItem(this)")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class", "btn btn-primary")
    
    var editBtn =document.createElement("button")
    var editText= document.createTextNode("Edit")
    editBtn.setAttribute("onClick", "editRecord(this)")
    editBtn.setAttribute("data-toggle", "modal")
    editBtn.setAttribute("data-target", "#exampleModalLong")



    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "btn btn-primary")

    var btnDelete = row.insertCell(4);
    btnDelete.appendChild(delBtn);
    btnDelete.appendChild(editBtn);

    studentName.value=""
    fatherName.value=""
    address.value =""
    studentClass.value=""

//   console.log(li)
//   console.log(list)  
// console.log(studentClass)

    

    // li.appendChild(delBtn)

    // list.appendChild(li)
}
function deleteAll(){
    var table = document.getElementById("myTable");
    table.innerHTML=""
}
function editRecord(e){
    var table = document.getElementById("myTable");
    var para=document.getElementById("para")

    // console.log(table.row)
    //--Geting row detail
    var rowRecord=e.parentNode.parentNode;
    var rowIndex=rowRecord.rowIndex;
    var oCells = table.rows.item(rowIndex).cells;
    para.value=rowIndex;
    // console.log(para.value)
    // console.log(oCells.item(0).innerHTML)
    
    var studentNameModal =document.getElementById("inputNameModal")
    var fatherNameModal =document.getElementById("inputFatherNameModal")
    var addressModal =document.getElementById("inputAddressModal")
    var studentClassModal=document.getElementById("inputStateModal")

    studentNameModal.value=oCells.item(0).innerHTML
    fatherNameModal.value=oCells.item(1).innerHTML
    addressModal.value=oCells.item(2).innerHTML
    studentClassModal.value=oCells.item(3).innerHTML

    // var rowCount = table.rows.length;    
    // for (var i = 1; i < rowCount - 1; i++) {    
    //      var row = table.rows[i]["Limit"].ToString();
    //      console.log(row)
    // }

    // var rowLength = table.rows.length;

    //loops through rows    
    // for (i = 0; i < rowLength; i++){

    //   //gets cells of current row  
    //    var oCells = table.rows.item(i).cells;

    //    //gets amount of cells of current row
    //    var cellLength = oCells.length;

    //    //loops through each cell in current row
    //    for(var j = 0; j < cellLength; j++){

    //           // get your cell info here

    //           var cellVal = oCells.item(j).innerHTML;
    //         //   alert(cellVal);
    //           console.log(cellVal)
    //        }
    // }

    // var val=table.row(e)._cellName;
    

    // console.log(val.cells.length)
    // console.log(val.rowIndex)
    // console.log(e.parentNode.parentNode)
    // var x = document.getElementById("myTable").rows[e.parentNode.parentNode.rowIndex].cells.length;
}
function updateStudenRecord(e){
    var table = document.getElementById("myTable");
    var btnSaveChanges=document.getElementById("saveChanges")
    var para=document.getElementById("para")
// console.log(e.parentNode)
    var rowIndex=para.value;

    // var rowRecord=e.parentNode.parentNode;
    // var rowIndex=rowRecord.rowIndex;
    var oCells = table.rows.item(rowIndex).cells;
    
    
    var studentNameModal =document.getElementById("inputNameModal")
    var fatherNameModal =document.getElementById("inputFatherNameModal")
    var addressModal =document.getElementById("inputAddressModal")
    var studentClassModal=document.getElementById("inputStateModal")

    // console.log(studentNameModal.value)


    oCells.item(0).innerHTML=studentNameModal.value
    oCells.item(1).innerHTML=fatherNameModal.value
    oCells.item(2).innerHTML=addressModal.value
    oCells.item(3).innerHTML=studentClassModal.value

    btnSaveChanges.setAttribute("data-dismiss", "modal")

}

function deleteItem(e){
    var table = document.getElementById("myTable");
        table.deleteRow(e)

// console.log(e.parentNode)
// e.parentNode.deleteRow(0)
// e.parentNode.remove();
}

