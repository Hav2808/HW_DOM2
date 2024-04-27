import Field from './Field';
import GamePlay from './GamePlay';

const fields = new Field();
const gameplay = new GamePlay(fields);
gameplay.init();

const target = document.getElementById('target');
const count = document.getElementById('count');
let hitCount = 0;

