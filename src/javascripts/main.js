import '../styles/main.scss';
import cowList from './components/cowList/cowList';
import farmersList from './components/farmersList/farmersList';

import 'bootstrap';

const init = () => {
  cowList.buildCows();
  farmersList.buildFarmers();
};
init();
