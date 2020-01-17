import React, { useState, useEffect } from 'react';
import { Container, Strong, StyleForm, InputForm, GroupInput, LabelForm, ButtonWarrper } from './styles';
import api from '../../services/api';

export default function Aside() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  async function handleSubmit(data, { resetForm }){
    const { github_username, techs, latitude, longitude } = data;
    await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });
 // adicionar mensage de user
    resetForm();
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);



  return (
    <Container>
      <Strong>Cadastrar</Strong> 
      <StyleForm onSubmit={handleSubmit}>
        <LabelForm>
          Usuário do github
          <InputForm name="github_username" required/>
        </LabelForm>
        <LabelForm>
          Tecnologias
          <InputForm name="techs" required/>
        </LabelForm>

        <GroupInput>
          <LabelForm>
            Latitude
            <InputForm 
              type="number" 
              name="latitude" 
              required  
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
          </LabelForm>
          <LabelForm>
            Longitude
            <InputForm 
              type="number" 
              name="longitude" 
              required 
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              />
          </LabelForm>
        </GroupInput>
        <ButtonWarrper>
          <button type="submit">Salvar</button>
        </ButtonWarrper>
      </StyleForm> 
    </Container>
  );
}
