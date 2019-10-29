import farmerData from '../../helpers/data/farmerData';
import './farmersList.scss';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      console.log('farmersArray from something', farmers);
    })
    .catch((error) => console.error('shit broke', error));
};

export default { buildFarmers };
