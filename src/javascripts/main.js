import '../styles/main.scss';
import cowList from './components/cowList/cowList';

import 'bootstrap';

const init = () => {
  cowList.buildCows();
};
init();
