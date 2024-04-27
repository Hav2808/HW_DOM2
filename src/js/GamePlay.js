export default class GamePlay {
  constructor(fields) {
    this.fields = fields;
    this.size = 4;
    this.board = null;
    this.position = 0;
    this.hitCount = 0;
  }
  // Добавляем функцию для обработки попаданий при клике на гоблина
  handleHit() {
    this.board.addEventListener('click', (event) => {
      if (event.target.classList.contains('goblin') && !event.target.classList.contains('hit')) {
        this.hitCount++;
        event.target.classList.add('hit'); // Добавляем класс "hit" к ударенному гоблину
        count.textContent = this.hitCount; // Обновляем отображение счетчика попаданий
      }
    });
  }
  init() {
    this.board = this.fields.gameField();
    this.start();
  // Вызываем обработчик попаданий
    this.handleHit();
  }
  setPosition () {
    const position = Math.floor(Math.random() * this.size ** 2);
    this.delPosition(this.position);
    if (position === this.position) {
      this.setPosition();
      return;
    }
    else {
      this.board.children[position].classList.add('goblin');
      this.position = position;      
    }
  }

  delPosition (position) {
    this.board.children[position].classList.remove('goblin');
  }

  start() {
    setInterval(() => {
      this.setPosition();
    }, 1000);
  }
}

