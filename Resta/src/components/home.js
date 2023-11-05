import React from 'react'
import Header from './pages/Header/header';
import Sliderr from './pages/sliderr';
import Section from './pages/Section/section';
import './pages/card/card.css';
import styled from 'styled-components';
const home = () => {
  return (
    <>
    <Header/>
    <Containerr>
        <Sliderr/>
        <Section/> 
    </Containerr>
        </>
  )
}
const Containerr = styled.div`
      overflow:hidden;
      display:block-inline
`
export default home