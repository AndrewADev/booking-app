import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const BaListItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#E5E5E5",
  color: "#58727F",
}));

export default BaListItem;