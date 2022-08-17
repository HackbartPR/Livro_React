import styled from "styled-components";

var media = "420px";

export const Catalogo = styled.main`
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

  & .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.25rem 0.5rem;
    gap: 1rem;

    & .content {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      @media (max-width: ${media}) {
        flex-direction: column;
        align-items: center;
      }

      img {
        max-width: 11.25rem;
      }
    }

    & .description {
      display: flex;
      flex-direction: column;
      text-align: justify;

      gap: 1rem;

      @media (max-width: ${media}) {
        align-items: center;
      }
    }
  }
`;
