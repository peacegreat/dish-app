import React from 'react';
import logo from '../../assets/logo.png'

const Menu = [
  {
  id: 1,
  name: 'Noodle Soup',
  link: '#'
  },
  {
    id: 2,
    name: 'Rice Bowls',
    link: '/#'
  },
  {
    id: 3,
    name: 'Salad Bowls',
    link: '/#'
  },
  {
    id: 4,
    name: 'Beverages',
    link: '/#'
  },
  {
    id: 5,
    name: 'kids',
    link: '/#'
  },
]

const Navbar = () => {
  return (
    <>
    <div className='bg-lightBlue'>
      <div className='container'>
        <div className=''>
          <div>
            <a href='#'>
              <img src={logo} alt='logo' className='w-36'/>
            </a>
          </div>
          <div>
            <ul>
              {Menu.map((menu) => {
                  <li key={menu.id}>
                    <a href={menu.link}>{menu.name}</a>
                  </li>
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar