import React from "react";
import styles from "./home.module.css"
import { Link } from "react-router-dom";

const Home=()=>{

    return (
        <div>
            <div id={styles.home}>
                <Link to="/Trans" className={styles.a}>Transaction Table</Link>
                <Link to="/Stats" className={styles.a}>Statistics</Link>
                <Link to="/Chart" className={styles.a}>Flow Chart</Link>
            </div>
        </div>
    )
}
export default Home