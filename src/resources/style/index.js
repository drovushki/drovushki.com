import styled, { createGlobalStyle } from 'styled-components';
import promo from '../img/promo.jpg'
import promo1 from '../img/promo1.jpg'
import promo3 from '../img/promo3.jpg'
import block from '../img/block.png'
import contact from '../img/contact.jpg'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '525px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: graphik;
    font-style: 300;
    font-weight: 300;
    src: url('fonts/Graphik-Regular-Web.ttf');
  }

  @font-face {
    font-family: graphik-m;
    font-style: 400;
    font-weight: 400;
    src: url('fonts/Graphik-Medium-Web.ttf');
  }

  @font-face {
    font-family: graphik-b;
    font-style: 600;
    font-weight: 600;
    src: url('fonts/Graphik-Bold-Web.ttf');
  }

  svg:not(:root) {
      overflow: hidden;
  }

  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
    font: 1.4rem/1.4 'opensans', Helvetica, Arial, sans-serif;
    font-family: graphik;
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    font-weight: 400;
    /* overflow: hidden; */
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Oswald', sans-serif;

    @media screen and (max-width: 550px) {
      justify-content: flex-start;
      padding-top: 5rem;
    }
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

//
// APPS
//

export const Apps = styled.div`
  width: 100vw;
  min-height: 100vh;

  #contact {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: calc(50% - 2rem);
      height: 100%;
      top: 0;
      left: 0;
      background: url(${contact}) no-repeat;
      background-size: cover;
      background-position: 50% 50%;

      @media ${device.tablet} {
        display: none;
      }
    }
  }
`;

Apps.Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;

  @media ${device.laptop} {
    padding: 0 5rem;
  }
`;

Apps.Promo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${promo3}) no-repeat;
  width: 100vw;
  height: 50rem;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #0000004d;
  }
`;

Apps.Promo.Text = styled.div`
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  z-index: 1;
  font-size: 2rem;
  line-height: 2.5rem;

  @media ${device.mobileL} {
    font-size: 1.4rem;
  }

  ${props => props._big &&`
    font-size: 3.3rem;
    line-height: 5rem;

    @media ${device.mobileL} {
      font-size: 2rem;
    }
  `}
`;

Apps.Promo.Buttons = styled.div`
  display: flex;
  z-index: 1;
  padding-top: 1rem;
`;

Apps.Promo.Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 4rem;
  text-transform: uppercase;
  transition: all .25s ease-in-out;
  cursor: pointer;
  margin: 0 1rem;
  color: #fff;
  background: #555;
  border-radius: .0rem;
  font-size: 1.4rem;
  line-height: 1.4rem;

  &:hover {
    opacity: .9;
  }

  ${props => props._bg &&`
    background: ${props._bg};
  `}
`;

Apps.Row = styled.div`
  display: flex;
  padding: 4rem 0;

  @media ${device.tablet} {
    flex-direction: column;
  }

  ${props => props._50 &&`
    width: 50%;
    overflow: hidden;
    // background: red;

    // &::before {
    //   content: "";
    //   padding-top: 100%;
    //   float: left;
    // }

    @media ${device.tablet} {
      width: 100%;
    }
  `}

  ${props => props._contentCenter &&`
    flex-direction: column;
    justify-content: center;
  `}

  ${props => props._imgBg &&`
    background: url(${block}) no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  `}

  span {
    font-weight: 600;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 2rem;
    padding-left: 1rem;
    padding-bottom: 0;
  }

  #title {
    padding: 1rem 0;
    font-weight: 600;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  #desc {
    font-size: 1.6rem;
    color: #636363;
    font-weight: 300;
  }
`;

Apps.Row.Img = styled.div`
  width: 100%;
  height: 20rem;
  background: url(${block}) no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`

Apps.Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin: 2rem -2rem; */
  padding: 1rem 0;
`

Apps.Wrap.Item = styled.div`
  width: 33.3336%;
  padding: 1rem;
  overflow: hidden;

  &::before {
     content: "";
     padding-top: 100%;
     float: left;
   }
`

Apps.Wrap.Item.Desc = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #EA2425;
  color: #fff;
  transform: translateY(-100%);
  transition: all .15s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`

Apps.Wrap.Item.Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  cursor: pointer;
  transition: all .25s ease-in-out;
  position: relative;

  &:hover {
    background: #EA2425;

    ${Apps.Wrap.Item.Desc} {
      transform: translateY(0);
      visibility: visible;
      opacity: 1;
    }
  }
`

Apps.Wrap.Item.Icon = styled.div`
  display: block;
  width: 4rem;
  height: 4rem;
  fill: #fff;
`

Apps.Wrap.Item.Title = styled.div`
  font-size: 1.2rem;
  /* line-height: 3rem; */
  margin-top: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
`


//
// HEADER
//

export const Header = styled.div`
  width: 100%;
  /* height: 8rem; */
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

Header.Logo = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

Header.Logo.Icon = styled.div`
  display: block;
  width: 4rem;
  height: 4rem;
  fill: #EA2425;
`;

Header.Logo.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Header.Logo.Name = styled.div`
  text-transform: uppercase;
  font-weight: 600;
`;

Header.Row = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

Header.Contact = styled.div`
  display: flex;
  color: #3c3c3c;
`;

Header.Contact.Container = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-right: 2rem;
  }
`;

Header.Contact.Icon = styled.div`
  display: block;
  width: 2rem;
  height: 2rem;
  margin: 1rem;
  fill: #3c3c3c;
`;

Header.Contact.Text = styled.a`
  text-transform: uppercase;
  font-size: 1.2rem;
  text-decoration: none;
  color: #3c3c3c;
  cursor: pointer;

  &:hover {
    color: #EA2425;
  }
`;

Header.Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #c3c3c3;
`;

Header.Menu.Link = styled.a`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .25s ease-in-out;
  cursor: pointer;
  color: #3c3c3c;
  font-weight: 500;
  margin-right: 5rem;

  @media ${device.mobileL} {
    margin-right: 2rem;
  }

  &:last-child {
    margin: 0;
  }

  &:hover {
    color: #EA2425;
  }
`;

//
// HEADER
//

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  width: 80%;
  margin: 0 auto;
`

Review.Title = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 3rem;
`

Review.Text = styled.div`
  padding: 0 3rem;
  position: relative;
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: #636363;
  font-weight: 300;
  font-family: 'Roboto Condensed',sans-serif;
  text-align: center;
  margin-bottom: 3rem;

  &::before {
    content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 75.999 75.999' style='enable-background:new 0 0 75.999 75.999;' xml:space='preserve'><g><g><path style='fill:#030104;' d='M14.579,5C6.527,5,0,11.716,0,20c0,8.285,6.527,15,14.579,15C29.157,35,19.438,64,0,64v7    C34.69,71,48.286,5,14.579,5z M56.579,5C48.527,5,42,11.716,42,20c0,8.285,6.527,15,14.579,15C71.157,35,61.438,64,42,64v7    C76.69,71,90.286,5,56.579,5z'/></g></g></svg>");
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(180deg);
  }

  &::after {
    content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 75.999 75.999' style='enable-background:new 0 0 75.999 75.999;' xml:space='preserve'><g><g><path style='fill:#030104;' d='M14.579,5C6.527,5,0,11.716,0,20c0,8.285,6.527,15,14.579,15C29.157,35,19.438,64,0,64v7    C34.69,71,48.286,5,14.579,5z M56.579,5C48.527,5,42,11.716,42,20c0,8.285,6.527,15,14.579,15C71.157,35,61.438,64,42,64v7    C76.69,71,90.286,5,56.579,5z'/></g></g></svg>");
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

Review.Clients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

Review.Clients.Name = styled.div`
  font-size: 1.6rem;
  color: #636363;
  font-weight: 600;
  font-family: 'Roboto Condensed',sans-serif;
  position: relative;
  padding-top: 2rem;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 1rem;
    left: calc(50% - 2rem);
    width: 4rem;
    height: .1rem;
    background: #636363;
  }
`

Review.Clients.Block = styled.div`
  display: flex;
  justify-content: center;
`

Review.Clients.Avatar = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin: 0 1rem;
  background: #000;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  ${props => props._active &&`
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #ea242570;
    }
  `}

  img {
    width: 100%;
    height: 100%;
  }
`

//
// Contact
//

export const Contact = styled.div`
  background: #EBF0F3;
  padding: 20rem;
`

//
// Footer
//

export const Footer = styled.div`
  background: #282D30;
  padding: 5rem 0;
`

Footer.Row = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  line-height: 2rem;
`
