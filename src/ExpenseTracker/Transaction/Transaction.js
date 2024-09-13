 import React,{useState } from "react";
import Edit from "../../assets/Edit.png";
 import Cancel from "../../assets/Cancel.png";
 import style from "./Transaction.module.css";
 import { IoPizza } from "react-icons/io5";
 import { BsSuitcase2 } from "react-icons/bs";
 import { IoGiftOutline } from "react-icons/io5";
 import Expenses from "../Expenses/Expenses";
 import Pagination from "./Pagination";
 const Transaction=({formData,setFormData,balance,updateBalance})=>{
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage,setPostPerPage]=useState(3);
  const lastIndex=currentPage*postPerPage;
  const firstIndex=lastIndex-postPerPage;
  const currentPosts=formData.slice(firstIndex,lastIndex);
  // console.log(formData);
    const[edit,setEdit]=useState(false);
    
    const removeEle=(title)=>{
     let prevFormData=localStorage.getItem("formData");
     if(prevFormData)
     {
      let allFormData=JSON.parse(prevFormData);
      const elePrice = allFormData.find((item) => item.title === title);
      let filteredFormData=allFormData.filter((allForm)=>allForm.title!==title);
     localStorage.setItem("formData",JSON.stringify(filteredFormData));
     setFormData(filteredFormData);
     if (elePrice) {
     let newBal=(balance+ Number(elePrice.price));
     updateBalance(newBal);
     
  } 
}}
    return(<>
   <h1 className={style.headLine}>Recent Transaction</h1>
     <div className={style.bottomSection}>
        {currentPosts.map((list)=>(
        <>
        <div className={style.listDiv} key={list.title}>
             <div className={style.firstDiv}>
            <div className={style.icons} >{list.category==="food"&&<IoPizza/>} {list.category==="entertainment"&&<IoGiftOutline />} {list.category==="travel"&&<BsSuitcase2 />} </div>
              <div className={style.info}>
                <p>{list.title}</p>
                <p>{list.date}</p>
             </div>
             </div>

           <div className={style.lastDiv}> 
             <p>₹{list.price}</p> 

                <div><img src={Cancel} alt="cancel" onClick={()=>removeEle(list.title)}/>
                <img src={Edit} alt="edit" onClick={()=>{setEdit(true)}}/></div>
             </div>
            </div>
             <div className={style.editExpense}><hr/></div>
              {edit&&<Expenses setEdit={setEdit} song={true} mainTitle={"Edit Expenses"} list={list}/>} 
             </> 
        ))}
        <div className={style.pagination}>
        <Pagination totalPosts={formData.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
     </div>
     </>
   )
 }
 export default Transaction;