import logo from "../../assets/logo-dio-1.png";

import { LinkItem } from "../LinkItem";
import {
    Container,
    Content,
    ImgContainer,
    NavContainer,
    UlContainer,
    LiContainer,
} from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <ImgContainer>
            <img src={logo} alt="Logo DIO.me"/>
        </ImgContainer>
        <NavContainer>
            <UlContainer>
                <LiContainer><LinkItem url="/" title="Home"/></LiContainer>
                <LiContainer><LinkItem url="/signin" className="link--bg-gray" title="Entrar"/></LiContainer>
                <LiContainer><LinkItem url="/signup" className="link--bg-gray" title="Cadastrar"/></LiContainer>
            </UlContainer>
        </NavContainer>
      </Content>
    </Container>
  )
}
