import {
    Container,
    User,
    Description,
} from './styles';

import img from '../../assets/rectangle-6.png'
import { Avatar } from '../Avatar';
import { Tag } from '../Tag';

export const CardFeed = () => {
  return (
    <Container>
        <img src={img} alt="Curso" />
        <User>
            <Avatar url="https://github.com/TamuraFelipe.png" alt="Avatar"/>
            <div>
                <h3>Felipe Diego</h3>
                <p>Há 8 minutos</p>
            </div>
        </User>
        <Description>
            <h3>Projeto para curso de HTML e CSS</h3>
            <p>Projeto feito no curso de html e css no bootcamp da DIO do Global avanade... <a href='#'>Ver mais</a></p>
            <div>
                <Tag title="HTML"/>
                <Tag title="CSS"/>
                <Tag title="Javascript"/>
            </div>
            <span>10</span>
        </Description>
    </Container>
  )
}
