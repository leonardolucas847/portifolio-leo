import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import { GithubSecao } from './styles';
const Sobre = () => {
  return (
    <section><Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptates assumenda quisquam aliquam suscipit tempore temporibus explicabo numquam quasi expedita! Voluptate, nesciunt. Adipisci omnis ipsum vitae quisquam iste reiciendis eius.
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=leonardolucas847&show_icons=true&theme=dracula" />;
        <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=leonardolucas847&layout=compact&theme=dracula" />;
      </GithubSecao>
    </section>);
};
export default Sobre;
