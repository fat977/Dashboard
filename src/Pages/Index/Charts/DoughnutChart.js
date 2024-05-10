import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Revenue } from "./Data/ChartData";

export default function DoughnutChart() {
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
        text: "Doughnut Chart",
        font: {
          size: 20,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const labels = Revenue.map((data) => data.label);
  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: Revenue.map((data) => data.value),
        backgroundColor: ["rgb(255, 99, 132)", "#dcc135", "#6835dc"],
        borderRadius: 5,
        barThickness: 40,
        barPercentage: 5,
        minBarLength: 2,
      },
    ],
  };
  return <Doughnut options={options} data={data} style={{ height: "300px" }} />;
}
