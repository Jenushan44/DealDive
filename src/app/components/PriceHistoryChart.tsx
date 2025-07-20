import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

type ChartDataPoint = {
  date: string;
  price: number;
};

export default function PriceHistoryChart({ data }: { data: ChartDataPoint[] }) {
  return (
    <div>
      <LineChart data={data} width={400} height={300}>
        <XAxis dataKey="date" />
        <YAxis />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />

      </LineChart>
    </div>
  );
}