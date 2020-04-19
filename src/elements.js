import styled from 'styled-components'

export const Container = styled.div`
  background: #272822;
  color: #f8f8f2;
  text-align: center;

  a {
    color: #a6e22e;
    padding-left: 5px;
  }
`

export const Title = styled.h1`
  color: #d0d0d0;
`

export const Highlight = styled.span`
  color: #fd971f;
`

export const Description = styled.div`
  color: #75715e;
  padding: 20px;
  font-size: 1.2em;
`

export const FormContainer = styled.div`
  margin: 40px;

  button {
    max-width: 20vw;
    margin: 40px 0;
    background-color: #a6e22e;
    color: #272822;
    opacity: 0.7;

    :hover {
      background-color: #a6e22e;
      color: #272822;
      opacity: 1;
    }
  }

  input {
    background: #49483e;
    color: #d0d0d0;
    padding: 10px;
  }

  label {
    z-index: 1;
    padding: 5px 10px;
    pointer-events: none;
  }

  & .Mui-focused {
    color: #a6e22e !important;
  }

  & .MuiInput-underline:after {
    border-color: #a6e22e !important;
  }

  & .Mui-disabled {
    background: #49483e !important;
    color: #272822 !important;
    opacity: 0.75;
  }

  & .MuiFormLabel-filled {
    color: #75715e !important;
  }
`

export const StatusContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 20vw;
  margin: 5vw 0;

  svg {
    width: 20vw;
    height: 20vw;

    ${({ isOk }) => {
      if (isOk === null) {
        return `color: #373831;`
      }
      if (!isOk) {
        return `color: #f92672;`
      }
      if (isOk) {
        return `color: #a6e22e;`
      }
    }}
  }

  ${({ isLoading }) => {
    if (isLoading) {
      return `
        svg {
          color: #373831;
          width: 16vw;
          height: 16vw;
        }
        
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100% !important;
          height: 100% !important;
        }
      `
    }
  }}
`
