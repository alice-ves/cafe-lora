export const Order = ({ items }) => {
  return (
    <main className="order">
      <div className="order__content container">
        <h1>Vaše objedávnka</h1>

        {items.length === 0 ? (
          <p className="empty-order">Zatím nemáte nic objednáno</p>
        ) : (
          <div className="order__items">
            {items.map((item) => {
              return (
                <OrderItem
                  key={item.id}
                  name={item.name}
                  image={item.image}
                ></OrderItem>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export const OrderItem = ({ name, image }) => {
  return (
    <div className="order-item">
      <img src={`https:localhost4000${image}`} className="order-item__image" />
      <div className="order-item__name">{name}</div>
    </div>
  );
};
