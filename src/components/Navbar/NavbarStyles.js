import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
    height: 80px;
    width: 100%;
    padding: 0px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.07);

    img {
        width: 150px;
    }
`;

export const NavLinksContainerStyled = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: var(--black-text);
`;