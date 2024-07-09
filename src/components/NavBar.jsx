import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../utils/citySlice";
import { Paper } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import LogoutIcon from "@mui/icons-material/Logout";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "50%",
  },
  transition: "background-color 0.3s ease",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.grey[700],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SuggestionsContainer = styled(Paper)(({ theme }) => ({
  position: "fixed",
  zIndex: 10,
  right: "13%",
  backgroundColor: theme.palette.background.paper,
  width: "48%",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[100]}`,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function NavBar() {
  const searchCities = useSelector((store) => store.city.searchCities || []);
  const cities = React.useMemo(() => searchCities.slice(0, 5), [searchCities]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  // console.log(cities);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cityRef = React.useRef();

  const handleSearch = () => {
    const city = cityRef.current.value;
    // console.log(city);
    dispatch(addCity(city));
  };

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });
  }, [dispatch, navigate]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "#333", color: "white" }}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 300,
            }}
          >
            Weather App
          </Typography>
          <Search
            onFocus={() => setShowSuggestions(true)}
            // onMouseOver={() => setShowSuggestions(true)}
            // onMouseLeave={() => setShowSuggestions(false)}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputRef={cityRef}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            sx={{
              marginLeft: 2,
              borderRadius: "20px",
              backgroundColor: "#333",
              color: "white",
              textTransform: "none",
              "&:hover": {
                color: "black",
                backgroundColor:"white",
              },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>

          <LogoutIcon
            onClick={handleClick}
            sx={{
              marginLeft: 2,
              backgroundColor: "#333",
              color: "white",
              textTransform: "none",
              transition:300,
              "&:hover": {
                cursor:"pointer",
                scale:"1.2",
              },
            }}
          />
        </Toolbar>
      </AppBar>
      {showSuggestions && (
        <SuggestionsContainer elevation={3}>
          {/* <div><b>Last 5 cities you searched</b></div> <br /> */}

          {cities.map((list, index) => (
            <Box
              onClick={() => {
                dispatch(addCity(list));
                setShowSuggestions(false);
              }}
              onMouseOver={() => setShowSuggestions(true)}
              onMouseLeave={() => setShowSuggestions(false)}
              key={index}
              sx={{ py: 1, cursor: "pointer" }}
            >
              {list}
            </Box>
          ))}
        </SuggestionsContainer>
      )}
    </Box>
  );
}
