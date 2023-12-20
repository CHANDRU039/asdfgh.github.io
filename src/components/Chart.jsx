import styles from "./home.module.css"
import { BarChart,XAxis,YAxis,Tooltip,Legend,CartesianGrid,Bar,ResponsiveContainer } from "recharts"


const Chart=()=>{

    const Data=[
        {Prange:"0-100", items:10},
        {Prange:"101-200", items:15},
        {Prange:"201-300", items:30},
        {Prange:"301-400", items:20},
        {Prange:"401-500", items:60},
        {Prange:"501-600", items:25},
        {Prange:"601-700", items:45},
        {Prange:"701-800", items:80},
        {Prange:"801-900", items:18},
        {Prange:"900-Above", items:18}
    ]

    return (
        <div id={styles.chart}>
            <h3>Bar Chart Stats - June</h3>
            <div id={styles.d1}>
        <BarChart
          width={500}
          height={300}
          data={Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="Prange" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="items" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      
            </div>
        </div>
    )

}
export default Chart