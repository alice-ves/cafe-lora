import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/header';
import { Banner } from '../components/banner/banner';
import { Menu } from '../components/menu/menu';
import { Gallery } from '../components/gallery/gallery';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header></Header>
    <main>
      <Banner></Banner>
      <Menu></Menu>
      <Gallery></Gallery>
      <Contact></Contact>
    </main>
    <Footer></Footer>
  </div>,
);
