import cows from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  cows.getCows()
    .then((response) => {
      console.log('it worked!', response.data);
    })
    .catch((error) => {
      console.error('Boo', error);
    });
};

export default { buildCows };
