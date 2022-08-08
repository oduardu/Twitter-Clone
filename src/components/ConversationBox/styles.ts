import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: min(600px, 100%);
    border: 1px solid var(--outline);
    position: sticky;
    height: 100vh;
    top: 0;
    left: 0;
    > div {
        width: min(330px, 100%);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > h1 {
        font-size: 30px;
        font-weight: 700;
        }
        > p {
            font-size: 14px;
            margin-top: 5px;
            color: var(--gray);
        }
        > button {
            min-height: 52px;
            min-width: 52px;
            align-self: flex-start;
            padding: 0 32px;
            margin-top: 20px;
        }
    }
`;
