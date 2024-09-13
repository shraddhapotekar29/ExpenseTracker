import React, { useState } from "react";
import leftArr from "../../assets/leftArr.png";
import rightArr from "../../assets/rightArr.png";
const Pagination=({totalPosts,postPerPage,setCurrentPage,currentPage})=>{
    let pages=[];
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++)
    {
    pages.push(i)
    }
    const prevPage=()=>{
        if(currentPage>1)
        {
            setCurrentPage(currentPage-1)
        }
    }
    const nextPage=()=>{
        if(currentPage<totalPosts)
        {
            setCurrentPage(currentPage+1)
        }
    }

    return(<div>
        <button onClick={prevPage}><img src={leftArr} width={20} height={20}/></button>
        <button style={{backgroundColor: "#43967B",borderRadius:"8px",width:"40px",height:"40px" }}>{currentPage}</button>
        <button onClick={nextPage}><img src={rightArr} width={20} height={20}/></button>
        </div>)
}
export default Pagination;