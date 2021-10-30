const clr = document.createElement('button');
clr.setAttribute("onclick", "del()");
clr.innerHTML = 'clear';
const inputs = document.getElementById('inputs');

let savedWord = document.getElementById("storedWord");
const text1 = document.getElementById("text1");
let oldData = localStorage.getItem('word');
if (oldData) {
    text1.disabled = true;
    document.getElementById("save").disabled = true;
    savedWord.innerHTML = oldData;
    inputs.appendChild(clr);
}

function del() {
    localStorage.clear();
    text1.disabled = false;
    document.getElementById("save").disabled = false;
    inputs.removeChild(clr);
    savedWord.innerHTML = '';
}

function saveToLocalStorage(save) {
    let word = text1.value;
    localStorage.setItem('word', word);
    savedWord.innerHTML = word;
    let recentData = localStorage.getItem('word');
    if (recentData) {
        document.getElementById(save).disabled = true;
        text1.disabled = true;
        text1.value = '';
        inputs.appendChild(clr);
    }
}
