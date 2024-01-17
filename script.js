const countValue = document.querySelector('#counter');

function increment() {
    //get the value from UI
    let val = parseInt( countValue.textContent );
    //update the value
    val = val + 1;
    //set the value onto UI
    countValue.textContent = val;
};

function decrement() {
    //get the value from UI
    let val = parseInt( countValue.textContent );
    //update the value
    val = val - 1;
    //set the value onto UI
    countValue.textContent = val;
};