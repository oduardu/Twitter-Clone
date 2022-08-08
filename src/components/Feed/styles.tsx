import styled from "styled-components";

interface Props {
    selected?: boolean;
  }
  
export const Container = styled.div`

    display: flex;
    flex-direction: row;
    border-bottom: 1px solid var(--outline);
`

export const Tab = styled.div<Props>`
    margin-top: 10px;
    padding: 16px;
    text-align: center;
    font-size: 15px;
    outline: 0;
    cursor: pointer;
    line-height: 20px;
    font-weight: ${props => (props.selected ? "bold" : "normal")};
    color: ${(props) => (props.selected ? 'var(--white)' : 'var(--gray)')};
    border-bottom: ${(props) => (props.selected ? '3px solid var(--twitter);' : 'none')};
    &:hover {
        background-color: var(--outline);
    }
`
export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
`