import React, { useState } from 'react';
// import Modal from 'react-modal';
import styles from './Calling.module.scss';

// Modal.setAppElement('#root');

// const Calling = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <button className={styles.callButton} onClick={() => setIsOpen(true)}>
//         <img src="./Assets/Img/phone-call (2) 1.png" alt="Call" />
//       </button>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={() => setIsOpen(false)}
//         className={styles.modal}
//         overlayClassName={styles.overlay}
//       >
//         <button className={styles.closeButton} onClick={() => setIsOpen(false)}>×</button>
//         <p className={styles.message}>
//           Заполните поля формы, <br />
//           мы свяжемся с Вами в ближайшее время.
//         </p>
//         <div className={styles.icon}>📱</div>
//         <p className={styles.phoneNumber}>+374 33-25-01-25</p>
//         <a href="tel:+37433250125">
//           <button className={styles.callAction}>CALL</button>
//         </a>
//       </Modal>
//     </>
//   );
// };

export default Calling;
