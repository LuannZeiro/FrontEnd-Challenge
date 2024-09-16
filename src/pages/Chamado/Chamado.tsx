import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

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
  margin: 60px;
  margin-top: 3px;

  @media (max-width: 575px) {
    width: 50px;
    padding-left: 15px;
    margin: 20px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 50px;
    padding-left: 20px;
    margin: 30px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 45px;
    padding-left: 25px;
    margin: 40px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 50px;
    padding-left: 30px;
    margin: 50px;
  }

  @media (min-width: 1200px) {
    width: 50px;
    padding-left: 30px;
    margin: 60px;
  }
`;

const Central = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dados = styled.div`
  flex-direction: column;
  max-width: 500px;
  color: #01a1fd;
`;

const InfoBlock = styled.div`
  border: 1px solid #727375;
  height: 40px;
  display: flex;
  align-items: center;
`;

const Anexo = styled(InfoBlock)`
  color: #01a1fd;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Texto = styled(InfoBlock)``;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Botao = styled.button`
  width: 400px;
  height: 50px;
  border: none;
  background-color: #01a1fd;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #0081d3;
  }

  @media (max-width: 575px) {
    margin-top: 50px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    margin-top: 75px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 80px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    margin-top: 90px;
  }

  @media (min-width: 1200px) {
    margin-top: 100px;
  }
`;

const Chamado: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <a href="/Inicial">
            <img src="./src/img/PortoLogo.png" alt="Logo" />
          </a>
        </Logo>
      </Header>

      <HeaderIcons>
        <a href="/Inicial">
          <Icon>
            <img src="./src/img/pasta.png" alt="Pasta" />
          </Icon>
        </a>
        <a href="/ChamarForn">
          <Icon>
            <img src="./src/img/mais.png" alt="Mais" />
          </Icon>
        </a>
        <a href="/Conta">
          <Icon>
            <img src="./src/img/user.png" alt="User" />
          </Icon>
        </a>
      </HeaderIcons>

      <Central>
        <Dados>
          <InfoBlock>
            <img src="./src/img/Vectorr.png" alt="User" />
            Miguel Rodrigues Ghelman
          </InfoBlock>
          <InfoBlock>
            <img src="./src/img/Vector.png" alt="Car" />
            FIESTA - FORD - ABC1D23
          </InfoBlock>
          <InfoBlock>
            <img src="./src/img/icon_email.png" alt="Mail" />
            Miguel.rodrigues@gmail.com
          </InfoBlock>
          <a href="#">
            <Anexo> &gt; Visualizar anexo</Anexo>
          </a>
          <Texto>
            Usuario descreveu que seu carro furou o pneu na Avenida Paulista n°1106 - via chatbot
          </Texto>
        </Dados>
      </Central>

      <Botoes>
        <a href="#">
          <Botao>Enviar Caminhão Guincho</Botao>
        </a>
        <a href="#">
          <Botao>Enviar Mecânico</Botao>
        </a>
      </Botoes>
    </Container>
  );
};

export default Chamado;
