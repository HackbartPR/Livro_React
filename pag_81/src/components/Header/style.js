import styled from 'styled-components'

export const Header = styled.header`
  min-width: 375px;
  max-width: 100%;

  background-color: #eaefef;

  padding-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & ul {
    position: relative;
    width: 100%;
    background-color: #c8e0e8;

    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;

    font-weight: bold;
  }

  & li {
    padding: 0.5rem 1.3rem;
    border-left: 1px solid gray;

    transition: color 0.3s ease;

    &:hover {
      cursor: pointer;
      color: #666;
    }
  }

  & li:last-child {
    border-right: 1px solid gray;
  }

  & a {
    text-decoration: none;
    color: #000;
  }
`
