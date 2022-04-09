import React, { useState } from 'react';
import menu from "../data/Menu";
import shortid from 'shortid';
import IconSwitch from "./IconSwitch";
import CardsView from '../views/CardsView'
import ListView from '../views/ListView'

function Store() {
  const [iconSwitch, setIcon] = useState(false);
  const icon = iconSwitch ? 'view_list' : 'view_module';
  const productsWithIds = menu.map(product => ({id: shortid.generate(), value: product }));

  const onIconToggle = () => setIcon(!iconSwitch)

  const productView = iconSwitch ? <CardsView cards={productsWithIds} /> : <ListView items={productsWithIds} />

  return (
    <div className="main-content">
      <IconSwitch
        icon={icon}
        onSwitch={onIconToggle}/>

        {productView}
    </div>
  )
}
export default Store;
