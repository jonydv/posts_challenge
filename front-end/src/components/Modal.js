import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';

import BackDrop from './BackDrop';

import './Modal.css';

const  ModalOverlay = props =>{

    const content = (
        <div className= {`modal ${props.className}`} style={props.style}>
            <div className={`modal__exit ${props.exitClass}`}>
                    {props.exit}
                </div>
            <div onSubmit={props.onSubmit ? props.onSubmit : e => e.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                
            </div>
        </div>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}

const Modal = props => {
    
    return (
        <>
            {props.show && <BackDrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </>
    )
}

export default Modal;