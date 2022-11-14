import React from 'react';
import './App.css';
import { t } from 'i18next';

// Personal Components
import Navbar from './components/Navbar/index'
import Title from './components/Title/index'
import Menu from './components/Menu/index'
import LocalizationMap from './components/Map/index'
import Form from './components/Form/index'

// Layout components
import { Zoom } from 'react-slideshow-image';

// SlideShow Images
import chicken from './assets/img/home/slideshow/chicken.jpg'
import leporace_external from './assets/img/home/slideshow/leporace-ext.jpg'
import leporace_lunchbox from './assets/img/home/slideshow/leporace-lunchbox.jpg'
import leporace_internal from './assets/img/home/slideshow/leporace-int.jpg'
import steak from './assets/img/home/slideshow/steak.jpg'

// Main Recipes Images
import food_1 from './assets/img/home/main_recipes/food_1.png'
import food_2 from './assets/img/home/main_recipes/food_2.png'
import food_3 from './assets/img/home/main_recipes/food_3.png'
import food_4 from './assets/img/home/main_recipes/food_4.png'

// About section
import cold_beer from './assets/img/about/cold-beer.jpg'
import fish from './assets/img/about/fish.jpg'

// React-AOS Call
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();

  const slideImages = [
    {
      url: chicken,
      caption: 'Slide 1'
    },
    {
      url: leporace_external,
      caption: 'Slide 2'
    },
    {
      url: leporace_lunchbox,
      caption: 'Slide 3'
    },
    {
      url: leporace_internal,
      caption: 'Slide 4'
    },
    {
      url: steak,
      caption: 'Slide 5'
    },
  ];

  const arrowStyle = {
    display: 'none',
  };

  const properties = {
    prevArrow: <button style={{ ...arrowStyle }}></button>,
    nextArrow: <button style={{ ...arrowStyle }}></button>
  }

  return (
    <div className="app">
      <header>
        <Navbar/>
      </header>
      <body>

      <section className="home" id="home">
        <Zoom {...properties} scale = {0.9} duration = {3000}>
        {slideImages.map((slideImage, index)=> (
            <div className="slide-homepage" key={index}>
              <div style={{
                'backgroundImage': `url(${slideImage.url})`,
                'backgroundRepeat': "no-repeat",
                'backgroundSize':"cover",
                "backgroundPosition":"center center",
                'height':'100%',}}>
              </div>
            </div>
          ))} 
        </Zoom>
        <div className="blur-images"></div>
        <div className="home-content">
          <Title
          title="Leporace Bar & Grill"
          backgroundColor="#202020"
          fontSize="9vw"
          />
          <h2>{t('Bar and restaurant, with great grills and snacks.') as string}</h2>
          <div className="main-recipes-container">
            <div className="main-recipe">
              <img src={food_1} alt={t('Rice, fish, french fries, salad') as string}/>
              <h3>{t('Fish with French Fries') as string}</h3>
              <p>{t('Rice, fish, french fries, salad') as string}</p>
            </div>
            <div className="main-recipe">
              <img src={food_2} alt={t('Rice with lentils, crispy onion (sweet and crispy), fried meat kibbeh, hummus paste, tabbouleh and pita bread') as string}/>
              <h3>{t('Fried Meat Kibe') as string}</h3>
              <p>{t('Rice with lentils, crispy onion (sweet and crispy), fried meat kibbeh, hummus paste, tabbouleh and pita bread') as string}</p>
            </div>
            <div className="main-recipe">
              <img src={food_3} alt={t('Delicious hams and cheeses grown directly from the Italian harvest') as string}/>
              <h3>{t('Cold Cuts') as string}</h3>
              <p>{t('Delicious hams and cheeses grown directly from the Italian harvest') as string}</p>
            </div>
            <div className="main-recipe">
              <img src={food_4} alt={t('Fried chicken with rice, beans and salad') as string}/>
              <h3>{t('Fried chicken') as string}</h3>
              <p>{t('Fried chicken with rice, beans and salad') as string}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" >
          <div className="photos-container" 
          data-aos="fade-down"
          data-aos-duration="600">
            <img src = {cold_beer} alt={t('Cold Beer') as string}/>
            <img src = {fish} alt={t('Fish Menu') as string}/>
          </div>
          <div 
          id="about"
          className="about-content"
          data-aos="fade-up"
          data-aos-duration="800">
            <Title
            title={t('About') as string}
            backgroundColor="transparent"
            fontSize="10ch"
            />
            <p>{t('Leporace Bar is a legitimate corner bar. A group of friends decided to set up this bar, which soon became a success with great grilled meats and always cold beers. With no defined audience, it is frequented by all types of people. From young people to couples, who seek moments of relaxation and good service.') as string}</p>
            <p>{t('Monday - Saturday 15PM - 11PM') as string}</p>
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5511962807255">+55 (011) 96280-7255</a>
            <a href="/">+55 (011) 2386-1439</a>
          </div>
      </section>

      <section className="menu-section">  
        <Title
        title={t('Menu') as string}
        backgroundColor="transparent"
        fontSize="12vw"
        />
        <div id="menu"></div>
        <Menu/>
      </section>

      <section className="localization-section" id="localization">
        <Title
        title={t('Localization') as string}
        backgroundColor="transparent"
        fontSize="10vw"/>
        <LocalizationMap/>
      </section>

      <section className="make-reservation-section" id="make-reservation">
        <Title
        title={t('Make Reservation') as string}
        backgroundColor="transparent"
        fontSize="8vw"/>
        <Form/>
      </section>

      </body>
    </div>
  );
}

export default App;