import styled from 'styled-components';

interface PageProps {
    image: string;
    borderTopLeftRadius: string;
    borderBottomLeftRadius: string;
    borderTopRightRadius: string;
    borderBottomRightRadius: string;
  }
  
export const Page = styled("div")<PageProps>`
  background-image: url(${props => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: ${props => props.borderTopLeftRadius};
  border-bottom-left-radius: ${props => props.borderBottomLeftRadius};
  border-top-right-radius: ${props => props.borderTopRightRadius};
  border-bottom-right-radius: ${props => props.borderBottomRightRadius};
`;

export const Flipper = styled.div`
  width: 60em;
  height: auto;
  @media(max-width: 990px){
    width: 30em;
  }
  @media(max-width: 505px){
    width: 20em;
  }
`;