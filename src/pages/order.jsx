import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/Footer/Footer';
import { Order, OrderItem } from '../components/order/order';

const response = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
);
const json = await response.json();
console.log(json);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      <Order items={json.data}></Order>
      <Footer />
    </div>
  </div>,
);
