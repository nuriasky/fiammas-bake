import React from 'react'
import { BurgerMenuStyled, NavLinkStyled, NavLinksContainerStyled, NavbarContainerStyled, NavbarLinksStyled, CartAndUserStyled, CartStyled, UserStyled } from './NavbarStyles'

    //ICONS
import { TbShoppingCartFilled } from "react-icons/tb"
import { FaUser } from "react-icons/fa"
import { LuMenu } from "react-icons/lu"

import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
            <a href="/#">
                <img src="https://res.cloudinary.com/dbixsporz/image/upload/v1695328613/u5kvtlvguvri7zbnzj4c.png" alt="Logo" />
            </a>
        </div>

        <NavLinksContainerStyled>

                <motion.div whileTap={{scale: 0.9}}>
                    <BurgerMenuStyled>
                        <LuMenu/>
                    </BurgerMenuStyled>
                </motion.div>

                <NavbarLinksStyled>
                    
                    <NavLinkStyled to='/'>Inicio</NavLinkStyled>
                    <NavLinkStyled to= '/'>Destacados</NavLinkStyled>
                    <NavLinkStyled to= '/'>Creaciones</NavLinkStyled>
                    <NavLinkStyled to= '/'>Sobre Nosotros</NavLinkStyled>

                </NavbarLinksStyled>
        </NavLinksContainerStyled>

        <CartAndUserStyled>
            <motion.div whileHover={{scale: 1.05}}>
                <a href="/#">
                    <CartStyled>
                        <TbShoppingCartFilled/>
                    </CartStyled>
                </a>
            </motion.div>

            <motion.div whileHover={{scale: 1.05}}>
                <a href="/#">
                    <UserStyled>
                        <FaUser/>
                    </UserStyled>
                </a>
            </motion.div>

        </CartAndUserStyled>

    </NavbarContainerStyled>
  )
}

export default Navbar