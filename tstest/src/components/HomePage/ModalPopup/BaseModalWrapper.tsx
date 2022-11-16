import React from "react";
import Modal from "./Modal";
import {
    DesktopModalContainer,
    Header,
    DesktopCloseButton,
    CloseSign
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
            <DesktopModalContainer >
                {/* <DesktopCloseButton >
                    <CloseSign />
                </DesktopCloseButton> */}
                <Header> {header} </Header>
            </DesktopModalContainer>
        </Modal>
    );
}

export default BaseModalWrapper;