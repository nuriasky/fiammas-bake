import React from 'react'
import { NavLinksContainerStyled, NavbarContainerStyled } from './NavbarStyles'

const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
            <a href="/#">
                <img src="https://res.cloudinary.com/dbixsporz/image/upload/v1695328613/u5kvtlvguvri7zbnzj4c.png" alt="Logo" />
            </a>
        </div>

        <NavLinksContainerStyled>

        </NavLinksContainerStyled>
    </NavbarContainerStyled>


  )
}

export default Navbar