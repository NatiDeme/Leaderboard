import { base, gameId } from './env.js';

const listContainer = () => {
  const refresh = document.getElementById('refresh');
  const listContainer = document.createElement('ul');
  listContainer.className = 'all-scores';
  let scoreArray = [];
  const addToList = async () => {
    const result = await fetch(`${base}${gameId}`).then((res) => res.json());
    return result;
  };
  refresh.addEventListener('click', () => {
    // addToList().then((res) => {
    //   scoreArray = res.result;
    //   scoreArray.forEach((score) => {
    //     listContainer.innerHTML += `
    //           <li> <p>${score.user}</p>
    //        <p>${score.score}</p> </li> <hr>

    //             `;
    //   });
    // });
    window.location.reload();
  });
  addToList().then((res) => {
    scoreArray = res.result;
    scoreArray.forEach((score) => {
      listContainer.innerHTML += `
              <li> <p>${score.user}</p>
           <p>${score.score}</p> </li> <hr>
      
                `;
    });
  });

  return listContainer;
};

export default listContainer;