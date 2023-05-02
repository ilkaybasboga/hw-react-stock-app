export const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  
}

export const btnStyle = {
  cursor: "pointer",
  "&:hover": { color: "red" },
}
export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f5f3dc",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color:"white"
}
export const flexCenter = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
}
export const flexColumn = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
}
