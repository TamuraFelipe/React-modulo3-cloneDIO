
import {
    LinkContainer,
} from './styles.js';

export const LinkItem = ({url, title, className}) => {
  return (
    <LinkContainer 
    className={className} 
    to={url}>
      {title}
    </LinkContainer>
  )
}
