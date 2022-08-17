import styled from 'styled-components'

export const Home = styled.main`
  min-width: 375px;
  max-width: 100%;

  margin-top: 0.3rem;

  display: flex;
  justify-content: center;

  & .wrapper {
    position: relative;
    width: 100%;
    max-width: 900px;
    background-color: #eaefef;
  }

  & .title {
    position: relative;
    width: 100%;
    background-color: #027399;
    color: #ffffff;
    font-size: 16px;

    padding: 0.375rem;
  }

  & .card{
    display: grid;
    width: 100%;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit,minmax(375px,1fr));
  }



`
