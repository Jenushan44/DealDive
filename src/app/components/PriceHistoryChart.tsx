import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

type ChartDataPoint = {
  date: string;
  price: number;
};

export default function PriceHistoryChart({ data }: { data: ChartDataPoint[] }) {
  return (
    <div>
      {/*Chart*/}
    </div>
  );
}