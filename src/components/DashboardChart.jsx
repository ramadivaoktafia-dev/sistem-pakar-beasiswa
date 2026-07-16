import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function DashboardChart({
  totalLayak,
  totalDipertimbangkan,
  totalTidakLayak,
}) {
  const data = {
    labels: [
      "Layak",
      "Dipertimbangkan",
      "Tidak Layak",
    ],
    datasets: [
      {
        label: "Jumlah Kandidat",
        data: [
          totalLayak,
          totalDipertimbangkan,
          totalTidakLayak,
        ],
        backgroundColor: [
          "#22c55e",
          "#f59e0b",
          "#ef4444",
        ],
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chart-card">
      <h2 className="section-title">
        📊 Statistik Kelayakan Beasiswa
      </h2>

      <Bar data={data} options={options} />
    </div>
  );
}

export default DashboardChart;