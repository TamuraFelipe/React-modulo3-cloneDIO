import { Controller } from 'react-hook-form';

import {
  Container,
} from './styles.js';



export const Input = ({control, leftIcon, name, ...rest}) => {
  return (
    <Container>
        {leftIcon ? <>{leftIcon}</> : null}
        <label htmlFor={name} className="visually-hidden">Senha</label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => <input {...field} {...rest} />}
        />
    </Container>
  )
}
