import {useState} from "react";
import menu from '../data/Menu'
import shortid from 'shortid';

export default function DropdownList(props) {
  const [active, setActive] = useState(false)
  let activeElement = '';

  const menuItems = menu.map(item => ({id: shortid.generate(), value: item}))

  const setActiveState = (e) => {
    activeElement = e.target.closest('li').dataset.id
    console.log(activeElement)
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {menuItems.map(item => <li data-id={item.id} key={item.id} className={activeElement === item.id ? 'active' : ''} onClick={setActiveState}><a href={item.value.link}>{item.value.text}</a></li>)}
    </ul>

  )
}
