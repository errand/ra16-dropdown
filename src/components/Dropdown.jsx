import React, { useState } from 'react';
import DropdownList from "./DropdownList";

export default function Dropdown() {
  const [opened, swithOpen] = useState(false)
  const openClass = opened ? 'open' : '';

  const setOpenState = () => swithOpen(!opened)

  return (
    <div data-id="wrapper" className="dropdown-wrapper open">
      <button data-id="toggle" className="btn" onClick={setOpenState}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList/>
    </div>
  )
}
