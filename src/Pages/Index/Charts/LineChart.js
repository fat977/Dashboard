import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "../Charts/Data/revenueData.json";
export default function LineChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Line Chart",
        font :{
            size: 20
        }
      },
    },
  };
  const labels = revenueData.map((data) => data.label);
  const data = {
    labels,
    datasets:[
        {
          label: "Revenue",
          data: revenueData.map((data) => data.revenue),
          backgroundColor: "rgb(255, 99, 132)",
          borderColor :"rgb(255, 99, 132)",
        },
        {
          label: "Cost",
          data: revenueData.map((data) => data.cost),
          backgroundColor: "#3366b1",
          borderColor :"#3366b1",
        },
      ],
  };
  return <Line options={options} data={data} style={{ height: "300px" }} />;
}
