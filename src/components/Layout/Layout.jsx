import React from 'react'
import { LayoutContainer } from './LayoutStyles'

const Layout = ({children}) => {
  return (
    <LayoutContainer>
        {children}
    </LayoutContainer>
  )
}

export default Layout