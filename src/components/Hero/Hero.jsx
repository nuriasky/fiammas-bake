import React from 'react'
import { HeroStyled, HeroText, HeroTextContainer, HeroTitle, TitleSpan } from './HeroStyles'

const Hero = () => {
  return (
    <HeroStyled>
        <HeroTextContainer>

            <HeroTitle>disfruta de los <TitleSpan>mejores sabores!</TitleSpan></HeroTitle>

            <HeroText>Fiamma’s Bake ha perdurado en el tiempo combinando el arte de vivir, el buen comer y la creatividad.</HeroText>

        </HeroTextContainer>
    </HeroStyled>
  )
}

export default Hero