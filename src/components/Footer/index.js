import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    // eslint-disable-next-line react/react-in-jsx-scope
    <FooterWrapper {...props}>
      { /* eslint-disable-next-line react/react-in-jsx-scope */}
      <a href="https://www.alura.com.br/">
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <p>
        Criado durante
        {' '}
        a
        {' '}
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <a href="https://www.alura.com.br/">
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
