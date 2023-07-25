import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api';

import { MdEmail, MdLock } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

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
    name: yup.string().min(3, "Nome deve ter no mínimo 3 caracteres!").required('Campo obrigatório!'),
  })
  .required()

export const SignUp = () => {
  const navigate = useNavigate();
  
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const enviarDadosParaServidor = async (data) => {
    try {
      const response = await api.post('users', data);
      alert("Cadastrado com sucesso!");
      navigate('/home');
    } catch (error) {
      alert("Aconteceu algum erro! Tente novamente!");
    }
  };
  
  return (
    <>
      <Header />
      <Container>
        <h1>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </h1>
        
        <form onSubmit={handleSubmit(enviarDadosParaServidor)}>
          <h2>Comece agora grátis</h2>
          <p>Crie sua conta e make the change._</p>

          <Input placeholder="Nome" control={control} name="name" leftIcon={<BiSolidUser  />}/>
          {errors.name && <span>{errors.name.message}</span>}
          
          <Input placeholder="Ex: user@email.com" control={control} name="email" leftIcon={<MdEmail />}/>
          {errors.email && <span>{errors.email.message}</span>}

          
          <Input placeholder="Senha" type="password" control={control} name="senha" leftIcon={<MdLock />}/>
          {errors.senha && <span>{errors.senha.message}</span>}
          
          <Button title="Entrar" type="submit"/>

          <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
          
          <LinksContainer>
            Já tenho conta.
            <LinkItem url="/signin" title="Fazer login" className="link--green"/>
          </LinksContainer>
        </form>
      </Container>
      <Footer />
    </>
  )
}

