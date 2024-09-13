import React, { useState,useEffect } from "react";
import style from "./Expenses.module.css";
import { useSnackbar } from "notistack";
const Expenses=({setExpense,song,setEdit,mainTitle,balance,updateBalance,setFormData,list})=>{
    const[title,setTitle]=useState("")
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[date,setDate]=useState("");
    const {enqueueSnackbar}=useSnackbar();

    const cancelBtn=()=>{
    if(song)
    {
    setEdit(false);
     }
    else{
    setExpense(false);
    }
    }
   
    const setForm=(e)=>{
     e.preventDefault();

     if (balance < price) {
        enqueueSnackbar("Wallet balance is low", { variant: "warning" });
        return; 
      }
     const formData={
        title:title,
        price:price,
        category:category,
        date:date,
     }
     const existingData = localStorage.getItem("formData");
     let updatedData = [];
     if (existingData) {
         updatedData = JSON.parse(existingData);
     }
     updatedData.push(formData);
     setFormData(updatedData);
      localStorage.setItem("formData", JSON.stringify(updatedData));
      const calculatedBalance = balance - formData.price;
      localStorage.setItem("balance", calculatedBalance);
      updateBalance(calculatedBalance);
      if(song)
        {
        setEdit(false);
         }
        else{
        setExpense(false);
        }

    }
    useEffect(() => {
        if (song && list) {
            setTitle(list.title);
            setPrice(list.price);
            setCategory(list.category);
            setDate(list.date);
        }
    }, [song, list]);

    return(<>
    <div className={style.modalWrapper}></div>
    <div className={style.container}>
        <form onSubmit={setForm}>
            <h1 className={style.mainTitle}>{mainTitle}</h1>
            <input type="text" placeholder="Title" className={style.inputDiv} value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="number" placeholder="Price" className={style.inputDiv} value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <select name="Category" id="Category"  className={style.inputDiv} value={category}  onChange={(e)=>setCategory(e.target.value)}>
             <option value="">Select Category</option>
             <option value="food">Food</option>
             <option value="entertainment">Entertainment</option>
             <option value="travel">Travel</option>
           </select>
            <input type="date" placeholder="dd/mm/yyyy" className={style.inputDiv} value={date} onChange={(e)=>setDate(e.target.value)} />
            <button className={style.btnExpense}style={{color:"#ffffff",backgroundColor:"#F4BB4A"}} type="submit" >Add Expenses</button>
            <button className={style.btnCancel}onClick={cancelBtn} >Cancel</button>
            </form>
        </div>
    </>)
}
export default Expenses;