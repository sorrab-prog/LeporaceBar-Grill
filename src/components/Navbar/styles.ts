import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    height: 180px;
    padding-block: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #202020;
    box-sizing: border-box;
    padding-inline: 2em;
`;

export const NavLogo = styled.img`
    height: 165px;
`;

export const NavList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
`;

export const NavListUl = styled.ul`
    width: 70%;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 920px){
        display: none;
    }
`;

export const NavItem = styled.a`
    text-decoration: none;
    color: #ffffff;
    font-size: 3.5ch;
    font-family:'Oswald', sans-serif;
    transition: all .2s linear;
    &:hover {
        color: #c8a97e;
    }
`;

export const HamburguerItems = styled.div`
    width: 100%;
    padding-block: 2em;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #202020;
`;

export const HamburguerItemsUl = styled.div`
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center
`;

export const HamburguerItemsLi = styled.div`
    border-bottom: 2px solid #FFFFFF;
`;

export const HamburguerItem = styled.a`
    text-decoration: none;
    color: #ffffff;
    font-size: 3.5ch;
    font-family:'Oswald', sans-serif;
    transition: all .2s linear;
    &:hover {
        color: #c8a97e;
    }
`;