"use strict";


let foodList = [];
const perentEl = document.getElementById("table");

let countID = 1500;
function Food(name, type, price) {
  this.id = countID++;
  this.name = name;
  this.type = type;
  this.price = price;
  foodList.push(this);
}

Food.prototype.render = function () {
    let trEl = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdType = document.createElement("td");
    let tdPrice = document.createElement("td");
  
    tdId.textContent = this.id;
    tdName.textContent = this.name;
    tdType.textContent = this.type;
    tdPrice.textContent =this.price;
  
    trEl.appendChild(tdId);
    trEl.appendChild(tdName);
    trEl.appendChild(tdType);
    trEl.appendChild(tdPrice);
  perentEl.appendChild(trEl);
};
function getData() {
    let parsedData = JSON.parse(localStorage.getItem("Foods"));
  
    if (parsedData) {
      for (let i = 0; i < parsedData.length; i++) {
        new Food(parsedData[i].name, parsedData[i].type, parsedData[i].price);
      }
    }
  
    for (let i = 0; i < foodList.length; i++) {
      foodList[i].render();
    }
  }
  getData();
  const names=[];
  const prices=[];
  for (let i = 0; i < foodList.length; i++) {
    names.push(foodList[i].name);
    prices.push(foodList[i].price);
  }
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: names,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: prices,
    }]
  };
  
  const config = {
    type: 'bar',
    data: data,
    options: {}
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  
  const data1 = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: names,
      data: prices,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const config1 = {
    type: 'pie',
    data: data1,
  };
  const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
  );