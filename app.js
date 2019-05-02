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
    var newLi = document.createElement('li');
    newLi.classList.add('twogrid');
    
    var newName = document.getElementById('name').value;    
    var newH = document.createElement('div');
    newH.classList.add('work');
    var n = document.createTextNode(newName);
    newLi.appendChild(newH);
    newH.appendChild(n);
    
    var newAmount = document.getElementById('amount').value;
    var newA = document.createElement('div');
    newA.classList.add('work');
    var a = document.createTextNode(newAmount);
    newLi.appendChild(newA);
    newA.appendChild(a);
    
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
    };
  
    var addFood = document.getElementById('addFood');
    addFood.addEventListener('click', addInput);
    
    document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                addInput();
            }
        });    
    
})(userInput, newSugar, newBox, total, clear);










