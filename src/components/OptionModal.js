import React from "react";
import Modal from "react-modal";



const OptionModal = (props) => 
     (
        <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleUnpick}// close modal clicking baackground or esc
        contentLabel = "Selected option for accesssibility enabled "
        closeTimeoutMS={200}
        className='modal'
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className='button' onClick={props.handleUnpick}>Okey</button>
        </Modal>
    );


export default OptionModal;