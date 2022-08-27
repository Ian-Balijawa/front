import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {CloseIcon} from '../GPIcon'

const GPModal = ({
    title,
    children,
    show,
    handleClose,
    onActionButtonClick,
    buttonText = 'Save',
    size,
}) => {
    return (
        <Modal show={show} onHide={handleClose} size={size}>
            <Modal.Header style={styles.header}>
                <Modal.Title style={styles.title}> {title}</Modal.Title>
                <Button
                    style={styles.closeBtn}
                    onClick={() => {
                        handleClose()
                    }}
                >
                    {<CloseIcon />}
                </Button>
            </Modal.Header>

            <Modal.Body>{children}</Modal.Body>

            <Modal.Footer style={styles.footer}>
                <Button style={styles.cancelBtn} onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    style={styles.saveBtn}
                    onClick={() => onActionButtonClick()}
                >
                    {buttonText}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default GPModal

export const GPModalInventory = ({
    title,
    children,
    show,
    handleClose,
    buttonText = 'Save',
    buttonTextSec,
    size,
}) => {
    return (
        <Modal show={show} onHide={handleClose} size={size}>
            <Modal.Header style={styles.header}>
                <Modal.Title style={styles.title}> {title}</Modal.Title>
                <Button
                    style={styles.closeBtn}
                    onClick={() => {
                        handleClose()
                    }}
                >
                    {<CloseIcon />}
                </Button>
            </Modal.Header>

            <Modal.Body>{children}</Modal.Body>

            <Modal.Footer
                style={{display: 'flex', flexDirection: 'row-reverse'}}
            >
                {buttonTextSec && (
                    <Button
                        style={styles.saveBtn}
                        onClick={() => {
                            handleClose()
                        }}
                    >
                        {buttonTextSec}
                    </Button>
                )}
                <Button
                    style={styles.cancelBtn}
                    onClick={() => {
                        handleClose()
                    }}
                >
                    {buttonText}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const styles = {
    header: {
        height: '85px',
        backgroundColor: '#F1EDE5',
    },
    title: {
        width: '100%',
        fontSize: '20px',
        fontWeight: 700,
    },
    footer: {
        height: '85px',
        backgroundColor: '#F1EDE5',
    },
    closeBtn: {
        width: '40px',
        height: '40px',
        background: '#CBCBCB',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    },
    cancelBtn: {
        minWidth: '110px',
        height: '40px',
        border: '0.7px solid #000000',
        borderRadius: '6px',
        background: 'transparent',
        fontSize: '14px',
        fontWeight: 500,
        color: '#000000',
        textAlign: 'center',
    },
    saveBtn: {
        minWidth: '110px',
        height: '40px',
        border: 0,
        borderRadius: '6px',
        background: '#E46036',
        fontSize: '14px',
        fontWeight: 500,
        color: '#ffffff',
        textAlign: 'center',
    },
}
