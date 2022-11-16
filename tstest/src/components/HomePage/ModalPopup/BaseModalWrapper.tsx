import React from "react";
import Modal from "./Modal";
import {
    DestopModalContainer,
    Header,
    CloseButton,
    DesktopCloseButton
} from "./ModalPopup.styles";

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    header: string;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({ onBackdropClick, isModalVisible, header }) => {
    if (!isModalVisible) {
        return null
    }

    return (
        <Modal onBackdropClick={onBackdropClick}>
            <DestopModalContainer >
                <DesktopCloseButton />
                <Header> {header} </Header>
            </DestopModalContainer>
        </Modal>
    );
}

export default BaseModalWrapper;