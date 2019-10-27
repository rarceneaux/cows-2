import axios from 'axios';


const getCows = () => axios.get('https://teamtreehouse.com/raymondarceneaux.json');

export default { getCows };
