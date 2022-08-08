import styled from 'styled-components';

import {
  Search,
} from '../../styles/Icons';

export const SearchWrapper = styled.div`
    margin-top: 50px;
    padding: 10px 24px;
    width: min(399px, 100%);
    top: 0;
    z-index: 1;
    background-color: var(--primary);
    height: 64px;
`
export const Header = styled.div`
    width: min(388px, 100%);
    z-index: 2;
    position: fixed;
    top: 0;
    > svg {
        z-index: 2;
    }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(388px, 100%);
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  border-left: 2px solid var(--outline);
`
export const SearchInput = styled.input`
    width: 100%;
    height: 39px;
    font-size: 14px;
    padding: 0 10px 0 52px;
    border-radius: 19px;
    background-color: var(--primary);
    border: 1px solid var(--outline);
    &::placeholder {
        color: var(--gray);
    }
    ~ svg {
        position: relative;
        top: -33px;
        left: 15px;
        z-index: 1;
        transition: 180ms ease-in-out;
        fill: var(--gray);
    }
    outline: 0;
    &:focus {
        border: 1px solid var(--twitter);
        background-color: var(--primary);
        ~ svg {
            fill: var(--twitter);
        }
    }
`
export const SearchIcon = styled(Search)`
    width: 27px;
    height: 27px;
    color: var(--gray);
` 

