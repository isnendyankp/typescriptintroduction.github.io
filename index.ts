import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
});
// dont forget npm install axios before started
// to execute type ts-node index.js(file name)
// Response.data has properties of:
// id
// title
// completed
// print value:
// The Todo with ID: 1
//  Has a title of: delectus aut autem
//  Is it finished? false