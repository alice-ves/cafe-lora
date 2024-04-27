import { Drink } from '../drink';

export const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          <div className="drink">
            <Drink
              id={0}
              name="Romano"
              ordered={false}
              image="http://localhost:4000/assets/cups/romano.png"
              layers={[
                {
                  color: '#fbdf5b',
                  label: 'citrón',
                },
                {
                  color: '#613916',
                  label: 'espresso',
                },
              ]}
            />
            <form className="drink__controls">
              <input type="hidden" className="order-id" value="1" />
              <button className="order-btn">Objednat</button>
            </form>
          </div>
        </div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
