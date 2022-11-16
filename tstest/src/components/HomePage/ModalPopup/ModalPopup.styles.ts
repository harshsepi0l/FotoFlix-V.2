import styled from 'styled-components'  

const ModalContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    `;

export const DestopModalContainer = styled(ModalContainer)`
    border-radius: 7px;
    box-shadow: 0 0 32px rbga(0, 0, 0, 0.5);
    padding: 40px;
    width: 450px;
    font-size: 12px;
    `;

export const Header = styled.h3 `
    color: white;
    font-size: 20px;
    font-height: 24px;
    font-weight: 600;
    margin: 5px 0 10px;
    text-align: center;`

const CLOSE_BUTTON_SIZE = 40;

export const CloseButton = styled.div `
    position: absolute;
    width: ${CLOSE_BUTTON_SIZE}px;
    high: ${CLOSE_BUTTON_SIZE}px;
    background-color: #c8c8c8;
    border-radius: 50%;
    cursor: pointer;

    & > * {
        opacity: 1;
    }

    &:hover > * {
        opacity: 0.4;
    }
`;

export const DesktopCloseButton = styled(CloseButton)`
    top: -${CLOSE_BUTTON_SIZE / 2}px;
    left: calc(100% - ${CLOSE_BUTTON_SIZE / 2}px);
`;