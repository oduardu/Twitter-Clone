import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    font-size: 14px;
    > span {
        color: var(--gray);
        margin-bottom: 5px;
    }
    > strong {
        font-size: 16px;
        font-weight: bold;
    }
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    > div > p {
        font-size: 14px;
        color: var(--gray);
        margin-top: 2.5px;
    }
    > div > a {
        color: var(--twitter);
        text-decoration: none;
        margin-left: 5px;
        font-size: 14px;
        margin-top: 2.5px;
    }
`;
