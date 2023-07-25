import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { CgProfile } from 'react-icons/cg'
import { BsGearFill } from 'react-icons/bs'
import { FaBook, FaSignOutAlt } from 'react-icons/fa'

import logo from "../../assets/logo-dio-1.png";

import { LinkItem } from "../LinkItem";

import {
    Container,
    Content,
    Wrapper,
    ImgContainer,
    InputContent,
    NavContainer,
    UlContainer,
    LiContainer,
    UserOpt,
} from './styles';

export const HeaderAuth = () => {
  const [open, setOpen] = useState(false);
  
  function handleOpenMenu(){
    setOpen(!open)
  }
  function handleCloseMenu(){
    setOpen(false)
  }
  
  return (
    <Container>
      <Wrapper>
        <Content>
          <ImgContainer>
            <img src={logo} alt="Logo DIO.me"/>
          </ImgContainer>
          <InputContent>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="white"/>
            </svg>
            <input />
          </InputContent>
          <NavContainer>
              <UlContainer>
                  <LiContainer><LinkItem url="#" title="Live Code"/></LiContainer>
                  <LiContainer><LinkItem url="#" title="Global"/></LiContainer>
              </UlContainer>
          </NavContainer>
        </Content>
        <UserOpt>
          <img src="https://github.com/TamuraFelipe.png" alt="Avatar" />
          <button type="button" onClick={handleOpenMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41 8.57999L12 13.17L16.59 8.57999L18 9.99999L12 16L6 9.99999L7.41 8.57999Z" fill="white"/>
            </svg>
          </button>
          
          <ul className={`user-menu ${open ? 'open' : ''}`}>
            <li><a onClick={handleCloseMenu} href="#"><CgProfile />Profile</a></li>
            <li><a onClick={handleCloseMenu} href="#"><BsGearFill /> Configurações</a></li>
            <li><a onClick={handleCloseMenu} href="#"><FaBook /> Cursos</a></li>
            <li><a href="/"><FaSignOutAlt /> Sair</a></li>
          </ul>
          
        </UserOpt>
      </Wrapper>
    </Container>
  )
}
