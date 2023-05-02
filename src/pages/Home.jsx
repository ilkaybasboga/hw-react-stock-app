import { Typography } from "@mui/material";
import { useEffect } from "react";
import Charts from "../components/Charts";
import KpiCards from "../components/KpiCards";
import useStockCall from "../hooks/useStockCall";

const Home = () => {
  const {getStockData}=useStockCall()

  useEffect(() => {
  getStockData("sales")
  getStockData("purchases")
  }, [getStockData])

  return (
    <div>
      <Typography
        variant="h4"
        mb={3}
        sx={{
          color: "white",
          border: "4px solid black",
          borderRadius: "1rem 0",
          backgroundColor: "orange",
          padding: "0.5rem",
        }}
      >
        Dashboard
      </Typography>

      <KpiCards/>
      <Charts/>
    </div>
  );
};

export default Home;
