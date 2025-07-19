import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWebAwesome } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import React from 'react';
import { ReactComponent as LogoSVG } from "./assets/aurorabamboo-rounded-icon.svg"
import {GlobalStyle} from "./globalStyles";

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/assets/background.png');
  backdrop-filter: blur(8px);
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/assets/background.png'); // Use uma textura de granulação leve
  opacity: 0.2;
  pointer-events: none;
`;

const Logo = styled(LogoSVG)`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 0 20px;
  color: #333;
  font-weight: bold;
`;

const IconRow = styled.div`
  display: flex;
  margin: 30px 0 0 0;
  justify-content: center;
  gap: 20px;

  a {
    color: #333;
    font-size: 2rem;
    transition: color 0.3s;

    &:hover {
      color: #0077b5; // Cor de hover para LinkedIn, por exemplo
    }
  }
`;

const CenterContainer = styled.div`
  display: contents;
  justify-content: center;
`

const Card = styled.div`
  display: block;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(234, 220, 197, 0.8);
  margin: 0 0 20px 0;
`

const App: React.FC = () => {
  const SocialNetworks = [
    {
      icon: faInstagram,
      url: "https://www.instagram.com/aurora.bamboo/"
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/share/19AMEWTsAs/?mibextid=wwXIfr"
    },
    {
      icon: faTiktok,
      url: "https://www.tiktok.com/@aurora.bamboo?_t=ZM-8y7SUTg90eT&_r=1"
    }
  ]

  const Linkinho = styled.a`
    color: #000;
    font-size: 1.5em;
  `

  const renderLinks = () => {
    const list:any = []

    SocialNetworks.map(item => {
      list.push(
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={item.icon} />
        </a>)
    })

    return list
  }

  return (<>
      <GlobalStyle />
    <LandingPageContainer>
      <CenterContainer>
        <Logo />

        <Card>
          <Title>Aurora Bamboo</Title>
          <IconRow>
            { renderLinks() }
          </IconRow>
        </Card>
        
        <Card>
          <Linkinho href="https://aurorabamboo.lojavirtualnuvem.com.br/" target="_blank" rel="noopener noreferrer">
            Acesse nossa Loja Virtual! <FontAwesomeIcon icon={faWebAwesome} />
          </Linkinho>
        </Card>

        <Card>
          <Linkinho href="https://www.heyzine.com/flip-book/bdb7ef35ab.html" target="_blank" rel="noopener noreferrer">
            Catálogo para Eventos <FontAwesomeIcon icon={faWebAwesome} />
          </Linkinho>
        </Card>

        <Card>
          <Linkinho href="https://www.heyzine.com/flip-book/30ec570106.html" target="_blank" rel="noopener noreferrer">
            Catálogo de Produtos <FontAwesomeIcon icon={faWebAwesome} />
          </Linkinho>
        </Card>

      </CenterContainer>
    </LandingPageContainer>
  </>);
};

export default App;
