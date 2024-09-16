
import React from 'react';
import styled from 'styled-components';
// teste
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
    margin-left: -225px;
    margin-top: 50px;
`;

const Dados2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: -225px;
    margin-top: 50px;
`;

const Cliente = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    max-width: 500px;
    margin-left: 680px;
`;

const Fornecedor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    max-width: 500px;
    margin-left: 680px;
`;

const Input = styled.input`
    width: 500px;
    height: 40px;
`;

const RadioInput = styled(Input).attrs({ type: 'radio' })`
    width: 24px;
`;

const PlaceholderText = styled.p`
    color: #727375;
`;

const BotaoEntrar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 400px;
    height: 50px;
    border: none;
    background-color: #01A1FD;
    color: white;
    border-radius: 10px;
`;

const Esqueceu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 350px;
    color: #727375;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Botaocadastrar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

const Npossui = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Nome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Cpf = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Email = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Senha = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Responsividade
const ResponsiveContainer = styled.div`
    @media (max-width: 575px) {
        ${Logo}, ${Title}, ${Dados}, ${Dados2}, ${Esqueceu}, ${BotaoEntrar}, ${Botaocadastrar}, ${Npossui}, ${Nome}, ${Cpf}, ${Email}, ${Senha} {
            margin: 20px 0;
            margin-left: auto;
            flex-direction: column;
        }
        
        ${Input}, ${Button} {
            width: 100%;
        }

        ${Cliente}, ${Fornecedor} {
            max-width: 100%;
            margin-left: 0;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        ${Dados}, ${Dados2}, ${Esqueceu}, ${BotaoEntrar}, ${Botaocadastrar}, ${Npossui}, ${Nome}, ${Cpf}, ${Email}, ${Senha} {
            margin-left: auto;
        }

        ${Input}, ${Button} {
            width: 100%;
        }

        ${Cliente}, ${Fornecedor} {
            max-width: 100%;
            margin-left: 0;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        ${Dados}, ${Dados2}, ${Esqueceu}, ${BotaoEntrar}, ${Botaocadastrar}, ${Npossui}, ${Nome}, ${Cpf}, ${Email}, ${Senha} {
            margin-left: 0;
        }

        ${Input}, ${Button} {
            width: 100%;
        }

        ${Cliente}, ${Fornecedor} {
            max-width: 100%;
            margin-left: 0;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        ${Cliente}, ${Fornecedor} {
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media (min-width: 1200px) {
        ${Cliente}, ${Fornecedor} {
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

const Cadastrar: React.FC = () => {
    return (
        <ResponsiveContainer>
            <Logo>
                <a href="/Home">
                    <img src="./src/img/PortoLogo.png" width="400px" alt="Logo" />
                </a>
            </Logo>
            <Title>A Maior Seguradora do Brasil</Title>
            <Dados>
                <p>Selecione uma das opções abaixo:</p>
            </Dados>
            <Cliente>
                <p>Cliente</p>
                <RadioInput name="cliente" id="cliente" value="cliente" />
            </Cliente>
            <Fornecedor>
                <p>Fornecedor</p>
                <RadioInput name="cliente" id="fornecedor" value="fornecedor" />
            </Fornecedor>
            <Dados2>
                <p>Agora, preencha os campos abaixo:</p>
            </Dados2>
            <Nome>
                <Input type="text" name="nome" id="nome" placeholder="Nome Completo" />
            </Nome>
            <Cpf>
                <Input type="text" name="cpf" id="cpf" placeholder="CPF" />
            </Cpf>
            <Email>
                <Input type="email" name="email" id="email" placeholder="E-mail" />
            </Email>
            <Senha>
                <Input type="password" name="senha" id="senha" placeholder="Senha" />
            </Senha>
            <BotaoEntrar>
                <a href="/Inicial"><Button>CONTINUAR</Button></a>
            </BotaoEntrar>
        </ResponsiveContainer>
    );
}

export default Cadastrar;
