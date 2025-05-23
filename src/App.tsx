import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactComponent as LogoSVG } from "./assets/abelhapsi-icon.svg"
import {GlobalStyle} from "./globalStyles";

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle, rgba(255,255,255,0.8), rgba(0,0,0,0.1));
  backdrop-filter: blur(8px);
  position: relative;
`;

const GranulationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/path-to-grain-image.png'); // Use uma textura de granulação leve
  opacity: 0.5;
  pointer-events: none;
`;

const Logo = styled(LogoSVG)`
  width: 150px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
font-weight: bold;
`;

const IconRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  a {
    color: #333;
    font-size: 2rem;
    transition: color 0.3s;

    &:hover {
      color: #0077b5; // Cor de hover para LinkedIn, por exemplo
    }
  }
`;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const PostCard = styled.div`
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const App: React.FC = () => {


    // Dentro do seu componente
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('URL_DA_API_INSTAGRAM');
                setPosts(response.data.data);
            } catch (error) {
                console.error("Erro ao buscar posts", error);
            }
        };

        fetchPosts();
    }, []);


    return (<>
        <GlobalStyle />
      <LandingPageContainer>
        <GranulationOverlay />
        <Logo />
        <Title>Abelha Psi</Title>
        <IconRow>
          <a href="https://www.instagram.com/abelhapsi/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/abelhapsi/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </IconRow>
        <PostsContainer>
            {posts.map(post => (
                <PostCard key={post.id}>
                    <img src={post.media_url} alt={post.caption} />
                    <p>{post.caption}</p>
                </PostCard>
            ))}

        </PostsContainer>
      </LandingPageContainer>
    </>
  );
};

export default App;
