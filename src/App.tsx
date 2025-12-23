

import Sidebar from './containers/Sidebar';
import GlobalStyle from './styles';
import Sobre from './containers/sobre';
import Projetos from './containers/Projetos';
import { Container } from './styles';
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  );

}

export default App;
