'use strict';

var allInformation=[];
var parent = document.getElementById('parent');
var table = document.createElement('table');
parent.appendChild(table);

function foodInformation(food_id,foodname,type,price){
    this.food_id = food_id;
    this.foodname=foodname;
    this.type=type;
    this.price=price;
    allInformation.push(this);
}


var tableHeader    = ["food_id","foodname","price","type"]


foodInformation.prototype.Tables = function(){
if (allInformation.length > 0){
for (let j = 0 ; j < tableHeader.length; j++){var tr=document.createElement("tr");
table.appendChild(tr);
    var cell1 = document.createElement('td');
    tr.appendChild(cell1);
    cell1.textContent=allInformation[j].food_id;

    var cell2 = document.createElement('td');
    tr.appendChild(cell2);
    cell2.textContent=allInformation[j].foodname;
    var cell3 = document.createElement('td');
    tr.appendChild(cell3);
    cell3.textContent=allInformation[j].price;
    var cell4 = document.createElement('td');
    tr.appendChild(cell4);
    cell4.textContent=allInformation[j].type;

}}

}

var obj1=new foodInformation("1","pizza","fat","2.5")
var obj2=new foodInformation("2","kabseh","protein","2.5")
var obj3=new foodInformation("3","mansaf","fat","5.5")

for (var i = 0 ; i < allInformation.length ; i++){
    allInformation[i].Tables();
}
console.log(allInformation);

var form = document.getElementById('form');
form.addEventListener('submit', function (event){
event.preventDefault();
console.log(event);
var food_id = event.target.food_id.value;
var foodname = event.target.foodname.value;
var type = event.target.type.value;
var price = event.target.price.value;
const objForm = new foodInformation(food_id, foodname, type, price);
objForm.Table();
});