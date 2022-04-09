import {useState} from "react";
import menu from '../data/Menu'
import shortid from 'shortid';

export default function DropdownList(props) {
  const [active, setActive] = useState(0)

  const menuItems = menu.map(item => ({id: shortid.generate(), value: item}))

  const setActiveState = () => setActive(!active)
}
