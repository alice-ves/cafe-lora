import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

const resp = await fetch('http://localhost:4000/api/drinks');
const data = await resp.json();
const drinks = data.data;

const handleOrder = async (event) => {
  event.preventDefault();
  const drinkId = Number(event.target.dataset.id);

  const resp = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      { op: 'replace', path: '/ordered', value: !drinks[drinkId].ordered },
    ]),
  });

  if (resp.ok) {
    window.location.reload();
  } else {
    alert('Objednávka se nezdařila. Zkuste to za chvíli znovu.');
  }
};

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const handleNav = () => {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
};
document.querySelector('.nav-btn').addEventListener('click', handleNav);
document.querySelector('.rollout-nav').addEventListener('click', handleNav);

const orderBtn = document.querySelectorAll('.drink__controls');
orderBtn.forEach((btn) => {
  btn.addEventListener('submit', handleOrder);
});
