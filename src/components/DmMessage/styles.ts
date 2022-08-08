import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
`;
export const DmInfo = styled.div`
    margin-left: 10px;
    padding: 10px;
    box-sizing: border-box;
    > strong {
        font-size: 14px;
        color: var(--gray);
    }
    > span {
        font-size: 14px;
        color: var(--white);
    }
    > p {
        font-size: 14px;
        color: var(--gray);
        margin-top: 5px;
        
    }    
`
export const DmTo = styled(Link)`
    width: 100%;
    > div {
        display: flex;
        align-items: center;
    }
    background-color: var(--primary);
    border-radius: 5px;
    padding: 16px;
    color: var(--white);
    text-decoration: none;
`

export const Avatar = styled.img`
    width: 40px;
    height: 40px;   
    border-radius: 50%;
    background-image: url('https://media.discordapp.net/attachments/789554224132259890/1005438281846116422/unknown.png');
    background-size: cover;
`

export const Name = styled.span`
    font-size: 14px;
    > strong {
        color: var(--gray);
        font-size: 12px;
    }
`

export const LastMessage = styled.span`
`