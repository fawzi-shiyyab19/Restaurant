'use strict';
var allInformation=[];
    function foodinformation(food_id,foodname,type,price){
        this.food_id = food_id;
        this.foodname=foodname;
        this.type=type;
        this.price=price;
        allInformation.push(this);
    }
    var tables = document.createElement('table');
var allCells = [];
    foodinformation.prototype.Table =function(){
        var tableRow = document.createElement('tr');
        tables.appendChild(tableRow);
        var tableHeader = document.createElement('th');
        for (var i = 0 ; i < allInformation.length; i++){
            var cell1 = document.createElement('td');
            var cell2 = document.createElement('td');
            var cell3 = document.createElement('td');
            var cell4 = document.createElement('td');
           
        }
    }
    var list1=[];
    var list2=[];
    var list3=[];
    var list4=[];
    var n=1;
    var x=0;
    function AddRow(){
        var AddRown=document.getElementById('show');
        var NewRow=AddRown.insertRow(n);
        list1[x]=document.getElementById("food_id").value;
        list2[x]=document.getElementById("foodname").value;
        list3[x]=document.getElementById("type").value;
        list4[x]=document.getElementById("price").value;
        var cel1=NewRow.insertCell(0);
        var cel2=NewRow.insertCell(1);
        var cel3=NewRow.insertCell(2);
        var cel4=NewRow.insertCell(3);
        cel1.innerHtml=list1[x];
        cel2.innerHtml=list2[x];
        cel3.innerHtml=list3[x];
        cel4.innerHtml=list4[x];
        n++;
        x++;
    }
    AddRow();
  
    const food1=new foodinformation(1,"pizza","fat",8.35)
    const food2=new foodinformation(2,"burger","fat",4.25)
    const food3=new foodinformation(3,"apple","fruits",0.63)


    for (var i = 0 ; i < allInformation.length ; i++){
        allInformation[i].Table();
    }
    var form = document.getElementById('form');
    form.addEventListener('submit', function (event){
        event.preventDefault();
        var food_id = event.target.food_id.value;
        var foodname = event.target.foodname.value;
        var type = event.target.type.value;
        var price = event.target.price.value;
        tables.removeChild(tables.lastChild);
        const objForm = new foodinformation(food_id, foodname, type, price);
        objForm.Table();
        console.log(event.target.food_id.value);
        console.log(event.target.foodname.value);
        console.log(event.target.type.value);
        console.log(event.target.price.value);
    });

    