import React, { useState } from "react";
import style from "./Modal.module.css";
const Modal = ({ setModal,setBalance }) => {
    const [bal, setBal] = useState(0);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBal = Number(bal); 
        if (newBal > 0) {
          const existingBalance = Number(localStorage.getItem("balance")) || 0;
          const updatedBalance = existingBalance + newBal; 
          localStorage.setItem("balance", updatedBalance);
          setBalance(updatedBalance); 
          setModal(false); 
        } 
      };
    
    
    return (<>
        <div className={style.modalWrapper}></div>
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
            <h1 style={{ marginLeft: "1rem" }}>Add Balance</h1>
            <input type="text" placeholder="Income Amount" className={style.inputDiv} value={bal}  onChange={(e) => setBal(e.target.value)} />
            <button style={{ color: "#ffffff", backgroundColor: "#F4BB4A" }} type="submit">Add Balance</button>
            <button onClick={() => setModal(false)}>Cancel</button>
            </form>
        </div>
    </>)
}
export default Modal;