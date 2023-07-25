import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { MdEmail, MdLock } from 'react-icons/md'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { api } from '../../services/api';

import {
  Container,
  LinksContainer
} from './styles';
import { Input } from '../../components/Input/input';
import { LinkItem } from '../../components/LinkItem';

const schema = yup
  .object({
    email: yup.string().email('E-mail não é válido!').required('Campo obrigatório!'),
    senha: yup.string().min(3, 'Minímo 3 caracteres!').required('Campo obrigatório!'),
  })
  .required()

export const SignIn = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.senha}`)
      console.log(data)
      if(data.length && data[0].id){
        navigate('/home') ;
        return;
      } else {
        alert("E-mail e/ou senha incorretos!")
      }
    } catch (error) {
      alert("Erro ao tentar logar! Tente novamente!")
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h1>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Faça seu cadastro</h2>
          <p>Faça seu login e make the change._</p>
          
          <Input placeholder="Ex: user@email.com" control={control} name="email" leftIcon={<MdEmail />}/>
          {errors.email && <span>{errors.email.message}</span>}

          
          <Input placeholder="Senha" type="password" control={control} name="senha" leftIcon={<MdLock />}/>
          {errors.senha && <span>{errors.senha.message}</span>}
          
          <Button title="Entrar" type="submit"/>
          
          <LinksContainer>
            <LinkItem url="#" title="Esqueci minha senha" className="link--yellow"/>
            <LinkItem url="/signup" title="Criar conta" className="link--green"/>
          </LinksContainer>
        </form>
      </Container>
      <Footer />
    </>
  )
}

