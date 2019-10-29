import axios from 'axios';

const getFarmersCows = () => new Promise((resolve, reject) => {
  axios.get('../../../db/farmerCows.json').then((response) => {
    const demFarmerCows = response.data.farmerCows;
    const farmersCows = [];
    Object.keys(demFarmerCows).forEach((farmerCowId) => {
      demFarmerCows[farmerCowId].id = farmerCowId;
      farmersCows.push(demFarmerCows[farmerCowId]);
    });
    resolve(farmersCows);
  }).catch((error) => reject(error));
});

export default { getFarmersCows };
