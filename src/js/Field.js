export default class Field {
    constructor(size=4){
        this.size = size;
    }
    
    gameField() {
        const container = document.createElement('div');
        container.classList.add('container');
        container.innerHTML = '<h1 class=\'title\'>The Goblin Game</h1>';
        
        const body = document.querySelector('body');
        body.insertBefore(container, body.firstChild);
        
        const field = document.createElement('div');
        container.appendChild(field);
        field.classList.add('field');

        for (let i = 0; i < Math.floor(this.size) ** 2; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');         
            field.appendChild(cell);
        }
        return field;
    }
}
