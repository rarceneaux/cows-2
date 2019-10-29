import axios from 'axios';

// const getCows = () => axios.get('https://teamtreehouse.com/raymondarceneaux.json');
const getCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/cows.json').then((response) => {
    const demCows = response.data.cows;
    const cows = [];
    Object.keys(demCows).forEach((cowId) => {
      demCows[cowId].id = cowId;
      cows.push(demCows[cowId]);
    });
    resolve(cows);
  }).catch((error) => reject(error));
});
// const getCows = () => axios.get('../../../../db/cows.json');

export default { getCows };
