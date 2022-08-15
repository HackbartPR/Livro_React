import styled from 'styled-components'

export const Main = styled.main`
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

    & .content{
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;

      padding: 0.5rem;

      flex: 1;

      & img{          
        width: 80px;
        height: 100%;
      }
      
      & .content__desc{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        font-size: 0.85rem;

        & h2 {
          font-size: 1rem;
        }

        & a {
          margin-top: auto;
          align-self: flex-start;
          color: #027399;
          text-decoration: none;
        }
      }
    }


  }

`
