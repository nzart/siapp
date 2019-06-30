//Empty array for storing
const added = [];

//Get Data
const userInput = () => { 
    return parseFloat(document.getElementById('amount').value || 0);
}
// Store Data
newSugar = () => {
    return added.push(userInput());
}

// New HTML
newBox = () => {
    if (userInput == '') {
        alert('Fill out the form!');
        return false;
    } else {
    //New list item    
    const newLi = document.createElement('li');
    // newLi.classList.add('.twogrid');
    
    //New div with name    
    const newName = document.getElementById('name').value;
    const newH = document.createElement('div');
    newH.classList.add('work');

    const n = document.createTextNode(newName);

    newLi.appendChild(newH);
    newH.appendChild(n);
    
    //New div with amount    
    const newA = document.createElement('div');
    newA.classList.add('work');
    const a = document.createTextNode(userInput());

    newLi.appendChild(newA);
    newA.appendChild(a);
    
    //Add new list item to id    
    const boxhold = document.getElementById('boxhold').getElementsByTagName('ul')[0];
    boxhold.appendChild(newLi);
    }
}

//Add total
total = () => {
    let sum = 0; 

    for (var i = 0; i < added.length; i++) {
        sum += added[i];
    }

    document.getElementById('total').textContent = sum;
};

//Percentage value
percent = () => {
    const limit = document.getElementById('limit').textContent;
    const num = parseInt(limit, 10);
    
    const totalNum = document.getElementById('total').textContent;
    const newNumber = parseInt(totalNum, 10);
    
    const percentage = (newNumber / num) * 100;
    
    document.getElementById('percent').textContent = percentage + '%';
    
    message = () => {
        if (percentage > 100) {
            alert('You have reached the daily limit!');
        }
    }
    message();
}

//Clear after submit
clear = () => {
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
}

//Adding stuff

display = () => {
    userInput();
    newSugar();
    newBox();
    total();
    percent();
    clear();
}

document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        display();
    }    
});








