//Get Data

//Empty array for storing
var added = [];

//Get Data
var userInput = function(){ 
    return parseFloat(document.getElementById('amount').value || 0);
}

// Store Data
var newSugar = function(){
    return added.push(userInput());
}

// New HTML
function newBox() {
    if (document.getElementById('amount').value == '') {
        alert('Fill out the form!');
        return false;
    } else {
    //New list item    
    var newLi = document.createElement('li');
    newLi.classList.add('twogrid');
    
    //New div with name    
    var newName = document.getElementById('name').value;    
    var newH = document.createElement('div');
    newH.classList.add('work');
    var n = document.createTextNode(newName);
    newLi.appendChild(newH);
    newH.appendChild(n);
    
    //New div with amount    
    var newAmount = document.getElementById('amount').value;
    var newA = document.createElement('div');
    newA.classList.add('work');
    var a = document.createTextNode(newAmount);
    newLi.appendChild(newA);
    newA.appendChild(a);
    
    //Add new list item to id    
    var boxhold = document.getElementById('boxhold').getElementsByTagName('ul')[0];
    boxhold.appendChild(newLi);  
    }
}

//Add total
function total() {
    var sum = 0;    
    for (var i = 0; i < added.length; i++) {
        sum += added[i];
    }
    //return yeet;
    console.log(added);
    document.getElementById('total').textContent = sum;
};

//Percentage value
function percent() {
    var limit = document.getElementById('limit').textContent;
    var num = parseInt(limit, 10);
    
    var totalNum = document.getElementById('total').textContent;
    var newNumber = parseInt(totalNum, 10);
    
    var percentage = (newNumber / num) * 100;
    
    document.getElementById('percent').textContent = percentage + '%';
    
    function message() {
        if (percentage > 100) {
            alert('You have reached the daily limit!');
        }
    }
    message();
    console.log(num);
    console.log(newNumber);
    console.log(percentage);
}

//Clear after submit
function clear() {
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
}

//Adding stuff

var displayData = (function() {
    
    var addInput = function() {
        var data = userInput();
        //var number = num();
        var item = newSugar();
        var box = newBox();
        var tot = total();
        var c = clear();
        var p = percent();
    };
  
    var addFood = document.getElementById('addFood');
    addFood.addEventListener('click', addInput);
    
    document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                addInput();
            }
        });    
    
})(userInput, newSugar, newBox, total, clear, percent);










