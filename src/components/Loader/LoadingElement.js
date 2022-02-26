import styled from 'styled-components'
import loader from '../../aecc849a13648cbd773cef883cbd1eda.gif'

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background: #ed595b;
`

export const LoadingImg = styled.div`
  background: url(${loader});
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`
