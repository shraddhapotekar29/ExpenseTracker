import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import style from "./BarChart.module.css";


const BarChart1 = ({ data }) => {
  return (
    <>
      <h1 className={style.headLine}>Top Expenses</h1>
      <div className={style.bottomSection}>
        {/* <div style={{marginLeft:"5rem"}}> */}
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} layout="vertical"> 
            <XAxis type="number" axisLine={false} tickLine={false} tick={false}/> 
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false}  width={120} /> 
            <Bar dataKey="value" fill="#8884d8" barSize={30} radius={[0,20,20,0]} />
          </BarChart>
        </ResponsiveContainer>
        </div>
      {/* </div> */}
    </>
  );
};

export default BarChart1;
