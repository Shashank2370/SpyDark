import { Pie } from "react-chartjs-2";

export const createChart = () => {
  const state = {
    labels: [" Active", " Not Active"],
    datasets: [
      {
        backgroundColor: ["black", "#8c8f8d"],
        data: [40, 60],
      },
    ],
  };

  return <Pie data={state} />;
};
