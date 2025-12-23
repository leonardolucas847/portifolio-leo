import styled from 'styled-components';
import { Props } from '.';

export const TituloContainer = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  color: #282A35;
  font-weight: bold;
  margin-bottom: 16px;
`;
