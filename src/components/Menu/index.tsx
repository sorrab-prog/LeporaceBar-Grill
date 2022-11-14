import React from 'react'
import HTMLFlipBook from 'react-pageflip';

// Styles
import { Page, Flipper } from './styles'

// Pages
import page_1 from '../../assets/img/menu/page_1.png'
import page_2 from '../../assets/img/menu/page_2.png'
import page_3 from '../../assets/img/menu/page_3.png'
import page_4 from '../../assets/img/menu/page_4.png'
import page_5 from '../../assets/img/menu/page_5.png'
import page_6 from '../../assets/img/menu/page_6.png'
import page_7 from '../../assets/img/menu/page_7.png'

function Menu() {
  return (
    <Flipper>
      <HTMLFlipBook 
      width={500} 
      height={700}
      size='stretch'
      drawShadow={true}
      flippingTime={1000}
      usePortrait={true}
      startZIndex={0}
      autoSize={true}
      showCover={false}
      mobileScrollSupport={true}
      swipeDistance={50}
      clickEventForward={true}
      useMouseEvents={true}
      renderOnlyPageLengthChange={false}
      minWidth={300}
      maxWidth={500}
      minHeight={500}
      maxHeight={700}
      maxShadowOpacity={0.5}
      className="flipper"
      style={{ backgroundColor:'transparent' }}
      startPage={10}
      showPageCorners={false}
      disableFlipByClick={false}
      >
        <Page
        image={page_1}
        borderTopLeftRadius='8px'
        borderBottomLeftRadius='8px'
        borderTopRightRadius='0'
        borderBottomRightRadius='0'
        />
        <Page
        image={page_2}
        borderTopLeftRadius='0'
        borderBottomLeftRadius='0'
        borderTopRightRadius='8px'
        borderBottomRightRadius='8px'
        />
        <Page
        image={page_3}
        borderTopLeftRadius='8px'
        borderBottomLeftRadius='8px'
        borderTopRightRadius='0'
        borderBottomRightRadius='0'
        />
        <Page
        image={page_4}
        borderTopLeftRadius='0'
        borderBottomLeftRadius='0'
        borderTopRightRadius='8px'
        borderBottomRightRadius='8px'
        />
        <Page
        image={page_5}
        borderTopLeftRadius='8px'
        borderBottomLeftRadius='8px'
        borderTopRightRadius='0'
        borderBottomRightRadius='0'
        />
        <Page
        image={page_6}
        borderTopLeftRadius='0'
        borderBottomLeftRadius='0'
        borderTopRightRadius='8px'
        borderBottomRightRadius='8px'
        />
        <Page
        image={page_7}
        borderTopLeftRadius='8px'
        borderBottomLeftRadius='8px'
        borderTopRightRadius='0'
        borderBottomRightRadius='0'
        />
      </HTMLFlipBook>
    </Flipper>
  )
}

export default Menu