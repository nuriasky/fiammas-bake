import styled from "styled-components"

export const HeroStyled = styled.section `
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    gap: 60px;
    max-width: 1300px;
    height: 720px;

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
    margin: 5px;
    width: 450px;
    text-align: center;
    color: #3D3534;
    font-size: 38px;
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
    width: 360px;
    color: #3D3534;
    font-weight: 500;
    font-size: 20px;
`;

export const HeroGetStarted = styled.div`
    font-size: 28px;
    color: var(--primary-pink);
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    gap: 10px;

    p {
        color: var(--dark-bg);
        font-weight: 600;
        transition: all 0.3 ease-in;
    }
    
    p:hover {
        color: #473736;
        font-weight: 700;
        transition: all 0.3 ease-out;
    }
`;

//IMAGE
export const HeroImageStyled = styled.div`
    img {
        width: 570px;
    }
`;