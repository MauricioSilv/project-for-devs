import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-left: 30px;
  flex: 1;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    list-style: none;
  }

  @media (max-width: 1000px){
    margin-left:0;
    margin-top: 30px;
  }

  @media (max-width: 600px){
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

export const List = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;

  p{
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: ${darken(0.09, '#8e4dff')}
    }
  }


`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;


  img{
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }


`;
export const UserInfo = styled.div`
  margin-left: 10px;

`;
export const UserName = styled.strong`
  display: block;
  font-size: 16px;
  color: #333;


`;
export const TechsName = styled.span`
  font-size: 13px;
  color: #999;
  margin-top: 2px;

`;