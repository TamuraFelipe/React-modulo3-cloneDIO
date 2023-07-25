import { Button } from '../Button/index.jsx';

import {
    Container,
} from './styles.js';

export const CardItem = ({img, desc}) => {
  return (
    <Container>
        <img src={img} alt={desc} />
        <Button title="Quero fazer parte"/>
    </Container>
  )
}
