import { useState } from 'react';

export default function Dropdown() {
  const [opened, swithOpen] = useState(0)

  return (
    <div data-id="wrapper" className="dropdown-wrapper open">
      <button data-id="toggle" className="btn" onClick={this.toggleOpen}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <ul data-id="dropdown" className="dropdown">
        <li className="active"><a href="#">Profile Information</a></li>
        <li><a href="#">Change Password</a></li>
        <li><a href="#">Become PRO</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Log Out</a></li>
      </ul>
    </div>
  )
}
