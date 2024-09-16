import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  @media (max-width: 575px) {
    .header-icons .icon {
      width: 50px;
      padding-left: 15px;
    }

    .icon {
      margin: 20px;
    }

    .nome, .carro, .email{
      width: 400px; 
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    .header-icons .icon {
      width: 50px;
      padding-left: 20px;
    }

    .icon {
      margin: 30px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .header-icons .icon {
      width: 45px;
      padding-left: 25px;
    }

    .icon {
      margin: 40px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .header-icons .icon {
      width: 50px;
      padding-left: 30px;
    }

    .icon {
      margin: 50px;
    }
  }

  @media (min-width: 1200px) {
    .header-icons .icon {
      width: 50px;
      padding-left: 30px;
    }

    .icon {
      margin: 60px;
    }
  }
`;

// Styled Components
const Header = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid #727375;
`;

const Logo = styled.div`
  img {
    width: 350px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Icon = styled.div`
  width: 50px;
  padding-left: 30px;

  img {
    width: 100%;
  }
`;

const Central = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dados = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  color: #01A1FD;
`;

const Item = styled.div`
  border: 1px solid #727375;
  width: 500px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;

  img {
    margin-right: 10px;
  }
`;

// Component
const Conta: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>
          <a href="/Inicial"><img src="./src/img/PortoLogo.png" alt="Logo" /></a>
        </Logo>
      </Header>
      <HeaderIcons>
        <a href="/Inicial"><Icon><img src="./src/img/pasta.png" alt="Pasta" /></Icon></a>
        <a href="/ChamarForn"><Icon><img src="./src/img/mais.png" alt="Mais" /></Icon></a>
        <a href="/Conta"><Icon><img src="./src/img/user.png" alt="User" /></Icon></a>
      </HeaderIcons>
      <Central>
        <Dados>
          <Item><img src="./src/img/Vectorr.png" alt="Nome" />Administrador 1</Item>
          <Item><img src="./src/img/icon _document_.png" alt="Carro" />123.456.789.10</Item>
          <Item><img src="./src/img/icon_email.png" alt="Email" />admin1@porto.com.br</Item>
        </Dados>
      </Central>
    </>
  );
};

export default Conta;
