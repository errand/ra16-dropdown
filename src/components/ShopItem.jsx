import PropTypes from "prop-types";

export default function ShopItem({item}) {
  return (
    <div className="item">
      <div className="item-media"><img src={item.img} alt={item.name} /></div>
      <div className="item-name">{item.name}</div>
      <div className="item-color">{item.color}</div>
      <div className="item-price">{item.price}</div>
      <button>Add to cart</button>
    </div>
  )
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired
}
