import { allSection } from './declare.js';



const click = (e) => {
  const clicked = e.target;
  console.log(clicked);
  if (!clicked.classList.contains('link')) return;

  allSection.forEach((section) => {
    section.classList.remove('active');
  });

  document
    .querySelector(`.section-${clicked.dataset.link}`)
    .classList.add('active');
  if (clicked.classList.contains('link') && clicked.classList.contains('bar')) {

  }
};



export { click };

