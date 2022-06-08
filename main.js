const listSection = document.querySelector('.booklist');
const addSection = document.querySelector('.addnew');
const contactSection = document.querySelector('.contacts');
const listMenuLink = document.querySelector('#bookslist');
const addMenuLink = document.querySelector('#addbooks');
const contactMenuLink = document.querySelector('#contact');

document.querySelectorAll('.navbar').forEach((link) => {
  link.addEventListener('click', () => {
    listMenuLink.addEventListener('click', () => {
      listSection.style.display = 'block';
      addSection.style.display = 'none';
      contactSection.style.display = 'none';
    });

    addMenuLink.addEventListener('click', () => {
      listSection.style.display = 'none';
      addSection.style.display = 'block';
      contactSection.style.display = 'none';
    });

    contactMenuLink.addEventListener('click', () => {
      listSection.style.display = 'none';
      addSection.style.display = 'none';
      contactSection.style.display = 'block';
    });
  });
});

// storage

const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');

document.getElementById('form').addEventListener('submit', () => {
  const book = {
    title: titleInput.value,
    author: authorInput.value,
  };
  const books = [];
  if (JSON.parse(localStorage.getItem('booklist')) === null) {
    books.push(book);
    localStorage.setItem('booklist', JSON.stringify(books));
  } else {
    const newbooks = JSON.parse(localStorage.getItem('booklist'));
    newbooks.push(book);
    localStorage.setItem('booklist', JSON.stringify(newbooks));
  }
});

const booklist = document.querySelector('.list');
let data = JSON.parse(localStorage.getItem('booklist'));

let str = '';
if (JSON.parse(localStorage.getItem('booklist')) === null || data.length === 0) {
  str = '<li class="list-item">No book stored!</li>';
} else {
  for (const obj of data) {
    str += `<li class='list-item'>
    <p>${obj.title} by ${obj.author}</p>
    <a href="" class="remove-btn" id="remove-book">Remove</a>
    </li>`;
  }
}
booklist.innerHTML = str;
document.querySelectorAll('#remove-book').forEach((button, id) => {
  button.addEventListener('click', () => {
    const selectedbook = data[id];
    const filteredBooks = data.filter((item) => {
      return item !== selectedbook;
    });
    localStorage.setItem('booklist', JSON.stringify(filteredBooks));
    const newData = JSON.parse(localStorage.getItem('booklist'));
    data = newData;
  });
});