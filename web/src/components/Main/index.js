import React, { useState, useEffect } from 'react';
import { Container, List, Header, UserInfo, UserName,TechsName } from './styles';
import api from '../../services/api';

export default function Main() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {

    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    
    loadDevs();

  },[devs]);

  return (
    <Container>
      <ul>
        { devs.map(listDev => (
            <List key={listDev._id}>
              <Header>
                <img src={listDev.avatar_url} alt={listDev.name}/>
                <UserInfo>
                  <UserName>{listDev.name}</UserName>
                  <TechsName>{listDev.techs.join(', ')}</TechsName>
                </UserInfo>
              </Header>
              <p>
                {listDev.bio}
              </p>
              <a href={`https://github.com/${listDev.github_username}`}>Acessar perfil github</a>
            </List>
        ))}
      </ul>
    </Container>
  );
}
