class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now();
  }

    data = JSON.parse(localStorage.getItem('form')) || [];

    loadBooks() {
      this.data = JSON.parse(localStorage.getItem('form')) || [];
      container.innerHTML = '';
      if (!this.data) {
        const singleBook = document.createElement('div');
        singleBook.textContent = 'Add book to your collection';
        container.appendChild(singleBook);
      } else if (this.data) {
        this.data.forEach((item) => {
          const singleBook = document.createElement('div');
          singleBook.classList.add('class-book');
          const p = document.createElement('p');
          p.textContent = `${item.title} by ${item.author}`;
          const bton = document.createElement('button');
          bton.textContent = 'Remove';
          bton.classList.add('remove');
          bton.setAttribute('id', item.id);
          singleBook.appendChild(p);
          singleBook.appendChild(bton);
          container.appendChild(singleBook);
        });
      }
    }

    addBook() {
      this.data = JSON.parse(localStorage.getItem('form')) || [];
      const book = {
        title: this.title,
        author: this.author,
        id: this.id,
      };
      this.data.push(book);
      localStorage.setItem('form', JSON.stringify(this.data));
    }

    removeBook(targetId) {
      this.data = JSON.parse(localStorage.getItem('form')) || [];
      const newArr = this.data.filter((item) => item.id !== targetId);
      this.data.length = 0;
      this.data.push(...newArr);
      localStorage.setItem('form', JSON.stringify(this.data));
      this.loadBooks();
    }
}

export { Book };