import styled from "styled-components"

export const HeroStyled = styled.section `
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1300px;
    height: 600px;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

export const HeroTextContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const HeroTitle = styled.h1 `
    width: 400px;
    text-align: center;
    color: #3D3534;
    font-size: 35px;
    font-family: 'bricolage grotesque';
    text-transform: uppercase;
`;

export const TitleSpan = styled.span `
    background-color: #6F5F53;
    color: #FFFAFA;
    padding: 4px 22px;
    border-radius: 30px;
    font-family: 'bricolage grotesque';
`;

export const HeroText = styled.p `
    width: 320px;
    color: var(--dark-bg);
    font-weight: 500;
    font-size: 18px;
`;