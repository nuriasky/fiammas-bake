import React from 'react'
import { HeroGetStarted, HeroImageStyled, HeroStyled, HeroText, HeroTextContainer, HeroTitle, TitleSpan } from './HeroStyles'

import { FaArrowRight } from "react-icons/fa"

import { color, motion } from "framer-motion"

const Hero = () => {
  return (
    <HeroStyled>
        <HeroImageStyled>
            <img
            src='https://res.cloudinary.com/dbixsporz/image/upload/v1695939872/qfm6pxpfowai0vzx594m.png'
            />
        </HeroImageStyled>

        <HeroTextContainer>
            <HeroTitle>disfruta de los <TitleSpan>mejores sabores!</TitleSpan></HeroTitle>

            <HeroText>Fiamma’s Bake ha perdurado en el tiempo combinando el arte de vivir, el buen comer y la creatividad.</HeroText>

            <motion.div whileHover={{scale: 1.06}}>
                <a href="/#">
                    <HeroGetStarted>
                        <p>Conoce más...</p>
                        <FaArrowRight/>           
                    </HeroGetStarted>
                </a>
            </motion.div>


        </HeroTextContainer>

    </HeroStyled>
  )
}

export default Hero