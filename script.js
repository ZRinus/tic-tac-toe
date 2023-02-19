let field = document.querySelector('.field')
let wins = document.querySelector('.Winner')
let zero = 0
let array = []

for(let i=0; i<9; i++) {
    let cell = document.createElement('div')
    cell.classList = 'cell'
    field.appendChild(cell)
    array.push(cell)

    cell.addEventListener('click', () => {
        zero++
        if(zero % 2 === 0) {
            cell.innerHTML = 'o'
        } else {
            cell.innerHTML = 'x'
        } win()
    })
    function win(){
        //горизонталь
        if(array[0].innerHTML === cell.innerHTML && array[1].innerHTML === cell.innerHTML && array[2].innerHTML === cell.innerHTML) {
            console.log('Winner')
        }
        if(array[3].innerHTML === cell.innerHTML && array[4].innerHTML === cell.innerHTML && array[5].innerHTML === cell.innerHTML) {
            console.log('Winner')
        }
        if(array[6].innerHTML === cell.innerHTML && array[7].innerHTML === cell.innerHTML && array[8].innerHTML === cell.innerHTML) {
            console.log('Winner')
        }

        //вертикаль
        if(array[0].innerHTML === cell.innerHTML && array[3].innerHTML === cell.innerHTML && array[6].innerHTML === cell.innerHTML) {
            console.log('Winner')
        }
        if(array[1].innerHTML === cell.innerHTML && array[4].innerHTML === cell.innerHTML && array[7].innerHTML === cell.innerHTML) {
            console.log('Winner')
        }
        if(array[2].innerHTML === cell.innerHTML && array[5].innerHTML === cell.innerHTML && array[8].innerHTML === cell.innerHTML) {
            console.log('Winner')
        }
        //диагональ
        if(array[0].innerHTML === cell.innerHTML && array[4].innerHTML === cell.innerHTML && array[8].innerHTML === cell.innerHTML) {
            console.log('Winner')
        }
        if(array[2].innerHTML === cell.innerHTML && array[4].innerHTML === cell.innerHTML && array[6].innerHTML === cell.innerHTML) {
            wins.innerHTML = ` Победили ${cell.innerHTML}`
        }
    }
}

