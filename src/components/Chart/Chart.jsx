import s from "./Chart.module.scss";
import Filter from "components/Filter";
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  CartesianGrid,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      amt: -50.0,
      date: "20.05.22",
    },
    {
      amt: 62.0,
      date: "20.05.22",
    },
    {
      amt: 16,
      date: "20.05.22",
    },
    {
      amt: 78.0,
      date: "20.05.22",
    },
    {
      amt: 136.0,
      date: "20.05.22",
    },
    {
      amt: 75.0,
      date: "20.05.22",
    },
    {
      amt: 98.0,
      date: "20.05.22",
    },
    {
      amt: 163.0,
    },
  ];
  return (
    <div className={s.container}>
      <div className={s.info}>
        <h2 className={s.title}>Chart of all trades</h2>
        <Filter />
      </div>

      <div className={s.container__chart}>
        <ResponsiveContainer>
          <LineChart width={1040} height={415} data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" stroke="#8F92A5" />
            <YAxis orientation="right" stroke="#8F92A5" />
            <Tooltip />
            <Line type="linear" dataKey="amt" stroke="#D9D9D9" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
