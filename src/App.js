import { Container } from "./styles/Container";
import { Content } from "./components/Content";
import { Title } from "./styles/Title";
import Directions from "./components/Directions";

function App() {
  return (
    <Container>
      <Title>
        <h2>Лабиринт</h2>
      </Title>
      <Content />
      <Directions />
    </Container>
  );
}

export default App;
