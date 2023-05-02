import { Button, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import FirmCard from "../components/FirmCard"
import FirmModal from "../components/modals/FirmModal"
import useStockCall from "../hooks/useStockCall"
import { flex } from "../styles/globalStyle"

const Firms = () => {
  const { getStockData } = useStockCall()
  const { firms } = useSelector((state) => state.stock)
  const [open, setOpen] = useState(false)

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  })

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    // getFirms()
    getStockData("firms")
  }, []) // eslint-disable-line

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
        Firms
      </Typography>
      <Button
        variant="contained"
        sx={{ color: "white", backgroundColor: "green" }} 
        onClick={handleOpen}
      >
        New Firm +
      </Button>
      <FirmModal open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}/>
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} setOpen={setOpen} setInfo={setInfo}/>
          </Grid>
        ))}
      </Grid>
      ;
    </div>
  );
};

export default Firms;
