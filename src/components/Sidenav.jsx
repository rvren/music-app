
import React, { Fragment } from 'react';
import { SidebarData } from '../data/sidebardata';
import { IconContext } from 'react-icons';
import NavLink from './Navlink';

function SideNav() {
   return  <Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='Navigation-menu'>
          <ul className='Navigation-menu__items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    <NavLink to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </Fragment>
}

export default SideNav;
