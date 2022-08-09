import { title, author } from './declare.js';

import { Book } from './class.js';

const storeBook = new Book();

const addremoveList = (e) => {
  if (e.target.classList.contains('remove')) {
    const targetid = parseInt(e.target.getAttribute('id'), 10);
    storeBook.removeBook(targetid);
  }
};

const addToList = (e) => {
  e.preventDefault();
  if (!title.value || !author.value) return;

  const newBook = new Book(title.value, author.value, Date.now());
  newBook.addBook();
  newBook.loadBooks();
  title.value = '';
  author.value = '';
};

export { addToList, addremoveList };