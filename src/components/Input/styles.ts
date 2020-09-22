import styled, { css } from 'styled-components';
import { shade } from 'polished';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: transparent;
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px #20e0a0a1;
  border: 1px solid #20e0a0;
  border-radius: 12px;
  opacity: 1;
  color: #f4ede8;

  transition: border-color 0.2s, color 0.2s;
  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #f4ede8;
    }
  }
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: ${shade(0.2, '#1ab883')};
      border-color: ${shade(0.2, '#1ab883')};
    `}


  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
