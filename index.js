const container = document.getElementById('container')



function createGrid(rows, columns){
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            let newDiv = document.createElement('div')
            newDiv.classList.add('grid-item')
            //newDiv.textContent = "hi"
            container.appendChild(newDiv)
        }
    }
}


createGrid(16,16)


const containerElements = document.querySelectorAll(".grid-item")

console.log(containerElements)
//containerElements[40].style.backgroundColor = "red"

for(let i = 0; i < containerElements.length; i++){
   containerElements[i].addEventListener("mouseover",function(){containerElements[i].style.backgroundColor = "red"})
}
/*
let clearbtn = document.getElementById('clear-button')
console.log(clearbtn)
clearbtn.addEventListener('click', function(){console.log('hi')})
*/
function clearGrid(){
    containerElements.forEach(element => {
        element.style.backgroundColor = 'white'
    });
}
