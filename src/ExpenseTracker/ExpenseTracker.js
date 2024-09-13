import React, { useState, useEffect } from "react";
import PieChart1 from "../ExpenseTracker/PieChart/PieChart"
import Modal from "../ExpenseTracker/Modal/Modal"
import Expenses from "../ExpenseTracker/Expenses/Expenses";
import style from "./ExpenseTracker.module.css";
import Transaction from "./Transaction/Transaction";
 import BarChart1 from "../ExpenseTracker/BarChart/BarChart";
const ExpenseTracker = () => {

    const [modal, setModal] = useState(false);
    const [expense, setExpense] = useState(false);
    const [totalExpense, setTotalExpense] = useState(0);
    const [balance, setBalance] = useState(Number(localStorage.getItem("balance")))
    const [formData, setFormData] = useState([]);

    useEffect(()=>{
        localStorage.setItem("balance",5000);
    },[])
    useEffect(() => {
        const localExpense = localStorage.getItem("formData");
        let expenseData = [];
        if (localExpense) {
                expenseData = JSON.parse(localExpense);
            setFormData(expenseData);
        }
        const totalPrice = expenseData.reduce((total, item) => total + Number(item.price), 0);
        setTotalExpense(totalPrice);

        
    }, [formData]);
    


    const updateBalance = (newBalance) => {
        setBalance(newBalance);
        localStorage.setItem("balance", newBalance);
    };


    const pieData = formData.reduce((data, form) => {
        const dataPresent = data.find((item) => item.name === form.category);
        if (dataPresent) 
        {
            dataPresent.value += Number(form.price);
        } 
        else
        {
            data.push({ name: form.category, value: Number(form.price) });
        }
        return data;
    }, []);



    console.log("formData", formData)
    console.log(totalExpense, "totalExpense");
    console.log(balance, "balance");

    return (<>
        <div className={style.expenseDiv}>
            <h1>Expense Tracker</h1>
            <div className={style.walletWrapper}>
                <div className={style.wallet}>
                    <p>Wallet Balance: <span style={{ color: "#89E148", fontWeight: "700" }}>₹{balance}</span></p>
                    <button className={style.btn1} onClick={() => setModal(true)}>+ Add Income</button>
                </div>
                <div className={style.wallet}>
                    <p>Expenses: <span style={{ color: " #F4BB4A", fontWeight: "700" }}>₹{totalExpense}</span></p>
                    <button className={style.btn2} onClick={() => setExpense(true)}>+ Add Expenses</button>
                </div>

                <div className={style.pie} >
                    <PieChart1 data={pieData} />
                </div>
            </div>
            {modal && <Modal setModal={setModal} setBalance={setBalance} />}
            {expense && <Expenses setExpense={setExpense} mainTitle={"Add Expenses"} balance={balance} updateBalance={updateBalance} setFormData={setFormData}/>}

            <div className={style.bottomSection}>
                <div className={style.transaction}><Transaction formData={formData} setFormData={setFormData} balance={balance} updateBalance={updateBalance}/></div>
                <div className={style.pieData}><BarChart1 data={pieData}/></div>
            </div>
        </div>
    </>)

}
export default ExpenseTracker;
