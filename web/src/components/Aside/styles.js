import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';
import { darken } from 'polished';
 
export const Container = styled.div`
  width: 320px;
  background:#fff;
  box-shadow: 0 0 14px 0 rgba(0,0,0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  @media (max-width: 1000px){
    width: 100%;
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
  font-size:20px;
  text-align: center;
  display: block;
  color: #333;
`;

export const LabelForm = styled.label`
  color: #acacac;
`;

export const StyleForm = styled(Form)`
  margin-top: 30px;
  width: 100%;
`;

export const InputForm = styled(Input)`
  margin-bottom: 30px; 
  display: block;
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
`;

export const GroupInput = styled.div`
  color: #acacac;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export const ButtonWarrper = styled.div`
  display: flex;
  justify-content: center;

  button{
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: #7d40e7;
    border-radius: 2px;
    padding: 15px 20px;

    font-size: 16px;
    font-weight: bold;
    color:#fff;
    cursor: pointer;

    &:hover {
      background: ${darken(0.05, '#7d40e7')}
    }
  }
`;
