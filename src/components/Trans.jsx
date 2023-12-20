import React, { useEffect, useState } from "react";
import styles from "./home.module.css"
import axios from "axios";


const Trans=()=>{
    let [data, setdata]=useState([])
    let [search,setsearch]=useState('')
    console.log(data);
    console.log(search);
    
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
    let ser=(e)=>{
        setsearch(e.target.value)
    }
    
    
    return (
        <div id={styles.trans}>
            <div id={styles.d1}>
                Transaction Dashboard
            </div>
            <div id={styles.d2}>
                <input type="text" placeholder="Search Transaction"  value={search} onChange={ser}/>
                <input type="month" placeholder="Select Month"/>
            </div>
            <div id={styles.d3}>
                <table border="1" cellSpacing="0">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Category</td>
                        <td>Sold</td>
                        <td>Image</td>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((x)=>{
                        return search.toLowerCase() === '' ? x : x.title.toLowerCase().includes(search)
                    }).map((x)=>{
                        return (
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <td>{x.description}</td>
                        <td>{x.price}</td>
                        <td>{x.category}</td>
                        <td>{x.sold}</td>
                        <td><img src={x.image}/></td>
                    </tr>
                        )
                         })}
                </tbody>
                </table>
            </div>
        </div>
    )
}
export default Trans