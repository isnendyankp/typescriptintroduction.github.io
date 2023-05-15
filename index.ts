import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  console.log(response.data);
});
// dont forget npm install axios before started
// to execute type ts-node index.js(file name)