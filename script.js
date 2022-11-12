let textAreaEl = document.getElementById('textarea')
let characterEl = document.getElementById('character')
let wordEl = document.getElementById('word')

textAreaEl.addEventListener('input', function(){
    let inputText = this.value;
    let char = inputText.length
    //character calculation
    characterEl.innerText = char;
    //word calculation
    let textArray = inputText.split(" ")
    let cleanedArray = textArray.filter(text => {
        return text != ''
    })
    wordEl.innerText = cleanedArray.length
})