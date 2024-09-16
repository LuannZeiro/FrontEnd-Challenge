import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid #727375;

  @media (max-width: 575px) {
    padding: 10px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 15px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 20px;
  }

  @media (min-width: 1200px) {
    padding: 25px;
  }
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
    width: 30px;
    padding-left: 10px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 40px;
    padding-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 50px;
    padding-left: 25px;
  }

  @media (min-width: 1200px) {
    width: 60px;
    padding-left: 35px;
  }
`;

const Content = styled.div`
  padding: 20px;

  @media (max-width: 575px) {
    padding: 10px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 15px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 20px;
  }

  @media (min-width: 1200px) {
    padding: 25px;
  }
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const Card = styled.div`
  background-color: #007bff;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  span:last-child {
    font-size: 24px;

    @media (max-width: 575px) {
      font-size: 18px;
    }

    @media (min-width: 576px) and (max-width: 767px) {
      font-size: 20px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 22px;
    }

    @media (min-width: 1200px) {
      font-size: 26px;
    }
  }
`;

const ChamarForn: React.FC = () => {
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

      <Content>
        <Title>Chamados Ativos</Title>
        <a href="/Chatbot">
          <Card>
            <span>Fornecedor 1</span>
            <span>&gt;</span>
          </Card>
        </a>
        <Card>
          <span>Fornecedor 2</span>
          <span>&gt;</span>
        </Card>
        <Card>
          <span>Fornecedor 3</span>
          <span>&gt;</span>
        </Card>
        <Card>
          <span>Fornecedor 4</span>
          <span>&gt;</span>
        </Card>
      </Content>
    </Container>
  );
};

export default ChamarForn;
