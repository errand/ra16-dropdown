import {useState} from "react";
import PropTypes from "prop-types";

export default function DropdownList({items}) {
  const [active, setActive] = useState(-1)


  const setActiveState = (i) => {
    setActive(i)
  }

  const list = items.map(item =>
    <li
      key={item.id}
      className={item.id === active ? 'active' : ''}
      onClick={() => setActiveState(item.id)}
    >
      <a href={item.value.link}>{item.value.text}</a>
    </li>)

  return (
    <ul data-id="dropdown" className="dropdown">
      {list}
    </ul>

  )
}

DropdownList.propTypes = {
  items: PropTypes.array.isRequired
}
