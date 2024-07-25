import React, { useState } from "react";
import styles from './index.module.scss';
import Modal from './Modal/Modal';

    const ModalBlock = ({children, buttonText}) => {

        const [modalActive, setModalActive] = useState(false)
        return (
            <>
                <button className={styles.Button} onClick={() => setModalActive(true)}>
                    { buttonText }
                </button>
                <Modal active={modalActive} setActive={setModalActive}>
                    { children }
                </Modal>
            </>
        );
    }
  
  export default ModalBlock;
