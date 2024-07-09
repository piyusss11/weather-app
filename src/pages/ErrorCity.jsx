import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCity } from "../utils/citySlice";

const ErrorCity = () => {
  const dispatch = useDispatch();
  const handleRefresh = () => {
    dispatch(addCity("mumbai"));
    // window.location.reload(); // Refresh the page
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <div>
        <Typography variant="h3" gutterBottom>
          City Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The City you requested could not be found.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleRefresh}>
          Go Back
        </Button>
      </div>
    </Box>
  );
};

export default ErrorCity;
