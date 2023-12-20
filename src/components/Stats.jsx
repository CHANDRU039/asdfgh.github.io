import React from "react";
import styles from "./home.module.css"
import { useState,useEffect } from "react";
import axios from "axios";
 
const Stats =()=>{
    let [data, setdata]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/data")
        // axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json")
        .then((resp)=>{
            // let res=JSON.stringify(resp.data)
            setdata(resp.data)
            console.table(data);
        })
        .catch(()=>{console.log("Errrooooor");})
    },[])

return (
    <div id={styles.stats}>
        <div id={styles.d1}>
        <label >Statistics  </label>
        <select id="cars" name="cars">
            <option >Select Month</option>
            <option >JAN</option>
            <option >FEB</option>
            <option >MAR</option>
            <option >APR</option>
            <option >MAY</option>
            <option >JUNE</option>
            <option >JULY</option>
            <option >AUG</option>
            <option >SEP</option>
            <option >OCT</option>
            <option >NOV</option>
            <option >DEC</option>    
        </select>
        </div>
        <div id={styles.d2}>
            <h4>Total Sale =  </h4>
            <h4>Total Sold Items =  </h4>
            <h4>Total  Not Sold Items = </h4>
        </div>
    </div>
)
    
}
export default Stats