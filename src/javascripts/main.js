import '../styles/main.scss';
import cowList from './components/cowList/cowList';
import farmersList from './components/farmersList/farmersList';
import farmerCowData from './helpers/data/farmerCowData';

import 'bootstrap';

const init = () => {
  cowList.buildCows();
  farmersList.buildFarmers();
  farmerCowData.getFarmersCows()
    .then((farmerCows) => {
      console.log('from main.js', farmerCows);
    })
    .catch((error) => console.error(error));
};

init();
