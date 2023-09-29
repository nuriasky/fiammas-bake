import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
    height: 80px;
    width: 100%;
    padding: 0px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.07);

    img {
        width: 150px;
    }
`;

export const NavLinksContainerStyled = styled.nav `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavbarLinksStyled = styled.ul `
    display: flex;
    gap: 40px;
`;

export const NavLinkStyled = styled(NavbarLinksStyled) `
    font-size: 15px;
    color: var(--black-text);
`;

export const CartAndUserStyled = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
`;

export const CartStyled = styled.div `
    font-size: 28px;
    color: var(--primary-pink);
    transition: all 0.3s ease-in;

    :hover {
        color: #db7776;
        transition: all 0.3s ease-out;
    }
`;

export const UserStyled = styled(CartStyled)`
    font-size: 25px;
`;

export const BurgerMenuStyled = styled(CartStyled) `
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
    }
`;