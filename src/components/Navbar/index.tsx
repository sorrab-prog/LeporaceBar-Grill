import React from 'react'

// Style
import { Nav, NavLogo, NavList, NavListUl, NavItem, HamburguerItems, HamburguerItemsUl, HamburguerItemsLi, HamburguerItem } from './styles'

//Translation
import { t } from 'i18next';

// Navbar Hamburguer
import { Sling as Hamburger } from 'hamburger-react'

// Images
import logo from '../../assets/img/logo.png'

function Navbar() {

    // Use State for hamburguer open or not open in navbar
    const [isOpen, setOpen] = React.useState(false)

    // Use State for the hmburguer appear or not appear in navbar
    const [activeHamburguer, setActivateHamburguer] = React.useState(false)

    // This function will set the window size everytime it's changed by the user
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

    // This function will show /hide the hamburguer in navbar
    const [width] = size
    React.useEffect(()=>{
      if(width <= 920){
        setActivateHamburguer(true)
      }
      else{
        setActivateHamburguer(false)
        setOpen(false)
      }
    }, [width])

  return (
    <>
        <Nav>
            <NavLogo src={logo} alt={t("Leporace Bar & Grill - Since 1999")}/>
            <NavList>
            <NavListUl>
                <li><NavItem href="#home">{t('Home') as string}</NavItem></li>
                <li><NavItem href="#about">{t('About') as string}</NavItem></li>
                <li><NavItem href="#menu">{t('Menu') as string}</NavItem></li>
                <li><NavItem href="#localization">{t('Localization') as string}</NavItem></li>
                <li><NavItem href="#make-reservation">{t('Make Reservation') as string}</NavItem></li>
            </NavListUl>
            </NavList>
            
            {activeHamburguer ? <Hamburger color="#FFFFFF" duration={0.5} toggled={isOpen} toggle={setOpen} /> : null}
        </Nav>
        {isOpen ? <HamburguerItems>
        <HamburguerItemsUl>
            <HamburguerItemsLi><HamburguerItem href="#home">{t('Home') as string}</HamburguerItem></HamburguerItemsLi>
            <HamburguerItemsLi><HamburguerItem href="#about">{t('About') as string}</HamburguerItem></HamburguerItemsLi>
            <HamburguerItemsLi><HamburguerItem href="#menu">{t('Menu') as string}</HamburguerItem></HamburguerItemsLi>
            <HamburguerItemsLi><HamburguerItem href="#contact">{t('Contact') as string}</HamburguerItem></HamburguerItemsLi>
            <HamburguerItemsLi><HamburguerItem href="#make-reservation">{t('Make Reservation') as string}</HamburguerItem></HamburguerItemsLi>
        </HamburguerItemsUl>
        </HamburguerItems> : null}
    </>
  )
}

export default Navbar