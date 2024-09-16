import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    color: #727375;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Dados = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: -300px;
    margin-top: 150px;
`;

const Login = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Senha = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 500px;
    height: 30px;
    &::placeholder {
        color: #01A1FD;
        font: 12px verdana, arial, sans-serif;
    }
`;

const Esqueceu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 350px;
    color: #727375;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const BotaoEntrar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const BotaoCadastrar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

const Button = styled.button`
    width: 400px;
    height: 50px;
    border: none;
    background-color: #01A1FD;
    color: white;
    border-radius: 10px;
`;

const NPossui = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Entrar: React.FC = () => {
    return (
        <Container>
            <Logo>
                <a href="/Home">
                    <img src="./src/img/PortoLogo.png" alt="Logo" width="400px" />
                </a>
            </Logo>
            <Title>A Maior Seguradora do Brasil</Title>
            <Dados>
                <p>Digite seus dados de login</p>
            </Dados>
            <Login>
                <Input type="text" name="login" id="login" placeholder="login" />
            </Login>
            <Senha>
                <Input type="password" name="password" id="password" placeholder="senha" />
            </Senha>
            <Esqueceu>
                <a href="#">esqueceu a senha?</a>
            </Esqueceu>
            <BotaoEntrar>
                <a href="/Inicial"><Button>ENTRAR</Button></a>
            </BotaoEntrar>
            <NPossui>
                <p>Não possui conta ainda? Cadastre-se</p>
            </NPossui>
            <BotaoCadastrar>
                <a href="/Cadastrar"><Button>CADASTRAR</Button></a>
            </BotaoCadastrar>
        </Container>
    );
}

export default Entrar;
