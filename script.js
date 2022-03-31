var entry=document.getElementById("entry");
entry.addEventListener("click",displayDetails);
var row=1;
function displayDetails(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var dep = document.getElementById("dep").value;
    var batch = document.getElementById("batch").value;

    if (!name ||!age || !dep|| !batch) {
     alert("please fill all the boxes");
     return;
    }
    var display=document.getElementById("display");
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    cell1.innerHTML=name;
    cell2.innerHTML=age;
    cell3.innerHTML=dep;
    cell4.innerHTML=batch;

    row++;

    

}
