import styled from 'styled-components';
interface props {
    src: string;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    > div {
        display: flex;
        align-items: center;
    }
`;

export const Avatar = styled.div<props>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url(${props => props.src ? props.src : 'https://pbs.twimg.com/profile_images/1554055516917219328/Qd-fTa4M_400x400.jpg'});
    background-size: cover;
    margin-right: 10px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    > strong {
        font-size: 14px;
    }
    > span {
        font-size: 14px;
        color: var(--gray);
    }
`

export const FollowButton = styled.button`
    background-color: var(--white);
    color: var(--primary);
    border-radius: 20px;
    padding: 6px 17px;
    cursor: pointer;
`