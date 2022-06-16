import { base, gameId } from './env.js';

const addScore = () => {
  let data = {};
  const name = document.getElementById('finput');
  const scoreNum = document.getElementById('linput');
  const submit = document.getElementById('submit');
  const addToApi = async (data) => {
    await fetch(`${base}${gameId}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => {
      res.json();
    });
    window.location.reload();
  };
  submit.addEventListener('click', () => {
    data = {
      user: name.value,
      score: scoreNum.value,
    };
    addToApi(data);
  });
};

export default addScore;