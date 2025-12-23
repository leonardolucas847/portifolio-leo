import { TituloContainer } from './styles';
export type Props = {
  children: string;
  fontSize?: number;
};
const titulo = (props: Props) => {
  return <TituloContainer fontSize={props.fontSize}>{props.children}</TituloContainer>;
};
export default titulo;
