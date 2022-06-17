import './style.css';
import listContainer from './modules/listContainer.js';
import addScore from './modules/addScore.js';

const app = () => {
  const scores = document.getElementById('scores');
  scores.append(listContainer());
};

app();
addScore();