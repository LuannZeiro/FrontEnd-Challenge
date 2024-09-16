
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Body = styled.div`
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
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderIcons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const Icon = styled.div`
    width: 50px;
    padding-left: 30px;
`;

const Content = styled.div`
    padding: 20px;
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
`;

const CardSpan = styled.span`
    &:last-child {
        font-size: 24px;
    }
`;

// Responsividade
const ResponsiveContainer = styled.div`
    @media (max-width: 575px) {
        ${Header} {
            padding: 10px;
        }

        ${Icon} {
            width: 30px;
            padding-left: 10px;
        }

        ${Content} {
            padding: 10px;
        }

        ${Card} {
            padding: 10px;
            flex-direction: column;
            align-items: flex-start;
        }

        ${CardSpan} {
            &:last-child {
                font-size: 18px;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        ${Header} {
            padding: 15px;
        }

        ${Icon} {
            width: 40px;
            padding-left: 20px;
        }

        ${Content} {
            padding: 15px;
        }

        ${Card} {
            padding: 12px;
        }

        ${CardSpan} {
            &:last-child {
                font-size: 20px;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        ${Header} {
            padding: 20px;
        }

        ${Icon} {
            width: 50px;
            padding-left: 25px;
        }

        ${Content} {
            padding: 20px;
        }

        ${Card} {
            padding: 15px;
        }

        ${CardSpan} {
            &:last-child {
                font-size: 22px;
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        ${Header} {
            padding: 20px;
        }

        ${Icon} {
            width: 50px;
            padding-left: 30px;
        }

        ${Content} {
            padding: 20px;
        }

        ${Card} {
            padding: 15px;
        }

        ${CardSpan} {
            &:last-child {
                font-size: 24px;
            }
        }
    }

    @media (min-width: 1200px) {
        ${Header} {
            padding: 25px;
        }

        ${Icon} {
            width: 60px;
            padding-left: 35px;
        }

        ${Content} {
            padding: 25px;
        }

        ${Card} {
            padding: 20px;
        }

        ${CardSpan} {
            &:last-child {
                font-size: 26px;
            }
        }
    }
`;

const Inicial: React.FC = () => {
    return (
        <Body>
            <Header>
                <Logo>
                    <Link to="/home">
                        <img src="./src/img/PortoLogo.png" alt="Logo" width="350px" />
                    </Link>
                </Logo>
            </Header>
            <HeaderIcons>
                <Link to="/Inicial">
                    <Icon>
                        <img src="./src/img/pasta.png" alt="Pasta" />
                    </Icon>
                </Link>
                <Link to="/ChamarForn">
                    <Icon>
                        <img src="./src/img/mais.png" alt="Adicionar" />
                    </Icon>
                </Link>
                <Link to="/Conta">
                    <Icon>
                        <img src="./src/img/user.png" alt="Usuário" />
                    </Icon>
                </Link>
            </HeaderIcons>
            <Content>
                <Title>Chamados ativos</Title>
                <Link to="/chamado">
                    <Card>
                        <span>Miguel G.</span>
                        <CardSpan>&gt;</CardSpan>
                    </Card>
                </Link>
                <Card>
                    <span>Fulano F.</span>
                    <CardSpan>&gt;</CardSpan>
                </Card>
            </Content>
        </Body>
    );
};

export default Inicial;
