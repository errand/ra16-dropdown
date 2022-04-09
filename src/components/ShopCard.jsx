import PropTypes from "prop-types";

export default function ShopCard({item}) {
  return (
    <div className="item item-card">
      <div className="item-name">{item.name}</div>
      <div className="item-color">{item.color}</div>
      <div className="item-media"><img src={item.img} alt={item.name} /></div>
      <footer className="item-footer">
        <div className="item-price">{item.price}</div>
        <button type="button">Add to cart</button>
      </footer>
    </div>
  )
}


ShopCard.propTypes = {
  item: PropTypes.object.isRequired
}

