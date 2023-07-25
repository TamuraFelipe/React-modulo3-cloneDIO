import {
    Container,
} from './styles';

export const Avatar = ({url, alt}) => {
  return (
    <Container src={url} alt={alt} />
  )
}
