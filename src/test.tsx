import styled from 'styled-components';
type BotaoProps = {
  primary?: boolean;
  fontSize?: string;

};
const Botao = styled.button <BotaoProps>`
  background-color: ${props => props.primary ? 'black' : 'blue'};
  font-size: ${props => props.fontSize || '16px'};
  color: white;
`;
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: yellow;
  span {
    font-weight: bold;
  }
  `;

function Test() {
  return (
    <>
      <Botao fontSize='20px' primary>Botão Primário</Botao>
      <Botao>Botão Secundário</Botao>
      <BotaoPerigo as='a'><span>Botão de Perigo</span></BotaoPerigo>
    </>
  );

}

export default Test;
