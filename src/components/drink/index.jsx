import { Layer } from '../layer/layer';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>

          {layers.map((layer) => (
            <Layer key={layer.label} color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>

      <form className="drink__controls" data-id={id}>
        <input type="hidden" className="order-id" value="0" />

        <button
          className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}
        >
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};
