import styled from 'styled-components'

export const Card = styled.section`
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
    
`