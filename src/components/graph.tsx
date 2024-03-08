import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";




export default function Graph(props) {
  const datas = props.data

 



  return (
    
    <ResponsiveContainer width="90%" height="100%">
    <LineChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="amount"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />

<Line
        type="monotone"
        dataKey="original"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
    </ResponsiveContainer>
  );
}
