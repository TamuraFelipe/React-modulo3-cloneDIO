import { Avatar } from '../Avatar';
import {
    Container,
} from './styles';

export const UserRanking = ({url, name, percent}) => {
  return (
    <Container>
        <Avatar url={url} alt={`Avatar de ${name}`}/>
        <div>
            <span>{name}</span>
            <div className="barra-percentual">
                <div className="progresso" style={{ width: `${percent}%`}}></div>
            </div>
        </div>
    </Container>
  )
}
