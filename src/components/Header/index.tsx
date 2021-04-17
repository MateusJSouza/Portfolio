import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <img src="Logo svg" alt="Logo"/>

        <ul className="lista">
          <li>Sobre mim</li>
          <li>Habilidades</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </Content>
    </Container>
  )
}