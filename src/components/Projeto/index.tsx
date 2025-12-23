


import { Card } from './styles';
import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import { LinkBotao } from './styles';


const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo='secundario'>Lista de tarefas desenvoilda dem Vuejs</Paragrafo>
    <LinkBotao href='#'>Visualizar</LinkBotao>
  </Card>
);
export default Projeto;
