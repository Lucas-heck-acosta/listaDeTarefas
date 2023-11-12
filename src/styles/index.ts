import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  list-style: none;
}`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export default EstiloGlobal

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin: 40px 0;
  display: block;
`

export const Campo = styled.input`
width: 100%;
border-radius: 8px;
border 1px solid #666;
padding: 8px;
background-color: #fff;
font-weight: bold;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azul};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
