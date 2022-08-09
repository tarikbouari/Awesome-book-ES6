import { allSection } from './declare.js';

export default function click(e) {
  const clicked = e.target;
  if (!clicked.classList.contains('link')) return;
  allSection.forEach((section) => {
    section.classList.remove('active');
  });

  document
    .querySelector(`.section-${clicked.dataset.link}`)
    .classList.add('active');
}
