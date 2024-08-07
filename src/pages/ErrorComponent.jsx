import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCity } from "../utils/citySlice";
import { useNavigate } from "react-router";

const ErrorComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleRefresh = () => {
    dispatch(addCity("mumbai"));
    navigate("/")
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
          Error
        </Typography>
        <Typography variant="h5" gutterBottom>
          An unexpected error occurred.
          <br /> 
          Refresh or Please try again later.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleRefresh}>
          Go Back
        </Button>
      </div>
    </Box>
  );
};

export default ErrorComponent;
