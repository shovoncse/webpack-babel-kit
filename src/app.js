import {person} from './lib'

console.log(person.name);

const getpost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

getpost().then(data => console.log(data));
