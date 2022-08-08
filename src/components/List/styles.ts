import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);
    border-radius: 10px;
`;

export const Item = styled.div`
    padding: 10px 16px;
    & + div {
        border-top: 1px solid var(--outline);
    }
    &:first-child {
        padding-top: 15px;
    }
    &:last-child {
        padding-bottom: 15px;
    }
    &:hover {
        background-color: var(--twitter-dark-hover);
    }
`
export const Tittle = styled.span`
    font-size: 19px;
    font-weight: bold;
    color: var(--white);
`