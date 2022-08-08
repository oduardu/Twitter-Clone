import styled from 'styled-components';

import {
    Settings,
    MarkEmailUnread
} from '../../styles/Icons';


export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  border-left: 2px solid var(--outline);
`

export const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > span {
    font-size: 20px;
    font-weight: 700;
  }
`

export const Icons = styled.div`
    > svg {
        margin: 0 5px;
    }
`

export const SettingsIcons = styled(Settings)`
    width: 24px;
    height: 24px;
    color: var(--white);
`

export const NewMessageIcon = styled(MarkEmailUnread)`
    width: 24px;
    height: 24px;
    color: var(--white);
`