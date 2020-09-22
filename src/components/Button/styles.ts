import styled from 'styled-components';

export const Container = styled.button`
  background: transparent
    linear-gradient(357deg, #6ce0db 0%, #6ce0db 49%, #78faf3 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 40px #78faf3;
  border: none;
  border-radius: 8px;
  opacity: 1;
  color: #1c2533;
  font-family: 'Poppins';
  font-size: 20px;
  padding: 10px;
  transition: box-shadow 1s, color 0.6s;

  &:hover {
    box-shadow: none;
    color: #fff;
  }

  @media (max-width: 900px) {
    font-size: 13px;
    padding: 8px;
  }
`;
