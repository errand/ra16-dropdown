import React, { useState } from 'react';
import DropdownList from "./DropdownList";
import menu from "../data/Menu";
import shortid from "shortid";

export default function Dropdown() {
  const [opened, swithOpen] = useState(false)

  const menuItems = menu.map(item => ({id: shortid.generate(), value: item}))

  const setOpenState = () => swithOpen(!opened)

  const wrapperClass = opened ? "dropdown-wrapper open" : "dropdown-wrapper"

  return (
    <div data-id="wrapper" className={wrapperClass}>
      <button data-id="toggle" className="btn" onClick={setOpenState}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList items={menuItems}/>
    </div>
  )
}
