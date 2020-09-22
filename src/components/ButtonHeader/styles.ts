import styled from 'styled-components';

export const Container = styled.button`
  background: transparent 0% 0% no-repeat padding-box;
  border: 2px solid #78faf3;
  border-radius: 12px;
  opacity: 1;
  color: #6ce0db;
  font-family: 'Poppins';
  font-size: 20px;
  padding: 10px;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background: #78faf3;
    color: #fff;
  }

  @media (max-width: 900px) {
    font-size: 13px;
    padding: 8px;
  }
`;
