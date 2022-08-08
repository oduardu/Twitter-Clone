import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

import {
    Home,
    Notifications,
    Email,
    HashOutline,
    Person,
    BookmarkBorder,
    ListAlt,
    DotsCircleHorizontal,
    DotsHorizontal,
    PlusSm,
    Twitter
} from "../../styles/Icons";

interface Props {
    selected?: boolean;
}

export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;
        padding: 9px 19px 20px;
        
        height: 100vh;
        overflow-y: auto;
    }
`

export const TopSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1280px) {
        align-items: flex-start;
    }
`

export const MenuButton = styled(Link)<Props>`
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
    height: 52px;
    > span {
        display: none;

        @media (min-width: 1280px) {
            display: inline;
            margin-left: 10px;
            width: 200px;
            font-size: 20px;
        }
    }

    padding: 10px;
    margin-bottom: 10px;
    outline: 0;

    & + button {
        margin-top: 16.5px;
    }
    & + button:last-child {
        margin-top: 33px;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
        padding: 0;
        > span {
            display: none;
        }
        @media (min-width: 1280px) {
                display: inline;
                font-size: 20px;
                width: 200px;
                height: 52px;
                > span {
                    display: inline;
                }
            }
    }
    cursor: pointer;
    > span {
    font-weight: ${(props) => (props.selected ? '500' : '100')};
    }
    &:hover {
        background: var(--twitter-dark-hover);
        border-radius: 25px;
    }

`

    export const BottomSide = styled.div`
        cursor: pointer;
        display: flex;
        align-items: center;
        background-color: var(--twitter-dark);
        @media (min-width: 1280px) {
            justify-content: space-between;
            border-radius: 25px;
            &:hover {
                background: var(--twitter-dark-hover);
            }
        }

        padding: 10px;
        margin-top: 20px;
        > span {
            display: none;
            @media (min-width: 1280px) {
                display: inline;
                margin-left: 10px;
                font-size: 20px;
            }
        }

    ` 
    export const Avatar = styled.div`
        width: 39px;
        height: 39px;
        flex-shrink: 0;
        border-radius: 50%;
        background-image: url('https://pbs.twimg.com/profile_images/1554055516917219328/Qd-fTa4M_400x400.jpg');
        background-size: cover;
    ` 
    export const ProfileData = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        > strong {
            font-size: 13px;
            font-weight: 500;
            color: var(--white);
        }
        > span {
            font-size: 13px;
            font-weight: 300;
            color: var(--gray);
        }

    ` 
export const TwitterLogo = styled(Twitter)`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    fill: var(--white);
    margin-left: 10px;
    @media (min-width: 1280px) {
        margin-left: 0;
    }
`
const iconCss = css`
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    color: var(--white);   
`

export const AddTweetIcon = styled(PlusSm)`
    display: none;
    @media (max-width: 1280px) {
        width: 40px;
        height: 40px;
        display: flex;
        
    }
`

export const HomeIcon = styled(Home)`
    ${iconCss}
`
export const HashtagIcon = styled(HashOutline)`
    ${iconCss}
    `
export const BellIcon = styled(Notifications)`
    ${iconCss}    
    `
export const EmailIcon = styled(Email)`
    ${iconCss}    
    `
export const SaveIcon = styled(BookmarkBorder)`
    ${iconCss}    
    `
export const ListIcon = styled(ListAlt)`
    ${iconCss}    
    `
export const ProfileIcon = styled(Person)`
    ${iconCss}    
    `
export const MoreIcon = styled(DotsCircleHorizontal)`
    ${iconCss}    
    `
export const ExitIcon = styled(DotsHorizontal)`
    width: 20px;
    height: 20px;
    color: var(--white);
    flex-shrink: 0;
    `