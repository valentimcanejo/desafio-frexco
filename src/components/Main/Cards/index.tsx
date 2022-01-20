import {
  Box,
  Grid,
  Typography,
  Paper,
  Drawer,
  IconButton,
  styled,
  Stack,
  TextField,
  Card as CardM,
  makeStyles,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ShoppingCart from "../../ShoppingCart";
import Card from "../Card";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Banana from "../../../assets/banana.jpg";
import Apple from "../../../assets/apple.jpg";
import Apricot from "../../../assets/apricot.jpg";
import Blackberry from "../../../assets/blackberry.jpg";
import Blueberry from "../../../assets/blueberry.jpg";
import Cherry from "../../../assets/cherry.jpg";
import Durian from "../../../assets/durian.jpg";
import fig from "../../../assets/fig.jpg";
import gooseberry from "../../../assets/gooseberry.jpg";
import grapes from "../../../assets/grapes.jpg";
import guava from "../../../assets/guava.jpg";

import kiwi from "../../../assets/kiwi.jpg";
import lemon from "../../../assets/lemon.jpeg";
import lime from "../../../assets/lime.jpg";
import lingonberry from "../../../assets/lingonberry.jpg";
import lychee from "../../../assets/lychee.jpeg";
import mango from "../../../assets/mango.jpg";
import melon from "../../../assets/melon.jpg";
import orange from "../../../assets/orange.jpg";
import papaya from "../../../assets/papaya.jpg";
import passionfruit from "../../../assets/passionfruit.jpg";
import pear from "../../../assets/pear.jpg";
import persimmon from "../../../assets/persimmon.jpg";
import pineapple from "../../../assets/pineapple.jpg";
import raspberry from "../../../assets/raspberry.jpg";
import strawberry from "../../../assets/strawberry.jpg";
import tomato from "../../../assets/tomato.jpg";
import watermelon from "../../../assets/watermelon.jpg";
import SearchIcon from "@mui/icons-material/Search";
const drawerWidth = 500;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Cards() {
  const [data, setData] = useState<any[]>([]);

  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<any[]>([
    Apple,
    Apricot,
    Banana,
    Blackberry,
    Blueberry,
    Cherry,
    Durian,
    fig,
    gooseberry,
    grapes,
    guava,
    kiwi,
    lemon,
    lime,
    lingonberry,
    lychee,

    mango,

    melon,
    orange,
    papaya,
    passionfruit,
    pear,
    persimmon,
    pineapple,
    raspberry,
    strawberry,
    tomato,
    watermelon,
  ]);
  const [prices, setPrices] = useState([
    2.25, 1.5, 3.9, 1, 2.19, 0.81, 0.99, 0.67, 1.45, 1.8, 0.5, 2.26, 3.0, 1.98,
    1.27, 0.58, 3.23, 2.99, 1.9, 2.87, 1.7, 0.89, 1.11, 1.43, 0.99, 2.9, 3.6,
    1.76,
  ]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get(`https://www.fruityvice.com/api/fruit/all`).then((res) => {
      setData(res.data);
    });
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box m={5}>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={0}
            >
              <Grid item>
                <IconButton size="large" onClick={handleDrawerClose}>
                  <ChevronRightIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="h6">Purchase Cart</Typography>
              </Grid>

              <Grid item>
                <DrawerHeader>
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item>
                      <Main open={open}>
                        <ShoppingCart />
                      </Main>
                    </Grid>
                  </Grid>
                </DrawerHeader>
              </Grid>
            </Grid>
          </Drawer>
        </Grid>
      </Grid>
      <Stack direction="row" justifyContent="end">
        <IconButton
          sx={{
            padding: "20px",
            color: "white",
            backgroundColor: "rgb(136,188,35)",
            "&:hover": {
              backgroundColor: "green",
            },
          }}
          onClick={handleDrawerOpen}
        >
          <ShoppingCartIcon />
          Open Cart
        </IconButton>
      </Stack>

      <Grid
        alignItems="center"
        justifyContent="center"
        container
        spacing={3}
        direction="column"
      >
        <Grid item>
          <Typography variant="h4">Fruityvice</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Description for a Java Spring based web service that serves
            information about all kind of fruits!
          </Typography>
        </Grid>
        <Grid item>
          {/* <Typography sx={{ textAlign: "left" }} variant="h6">
            Search for fruit:
          </Typography> */}
          <TextField
            type="text"
            fullWidth
            id="outlined-basic"
            label="Search Fruit"
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {data.map((e, index) =>
          e.name.toLowerCase().includes(query) ? (
            <Card
              key={index}
              id={e.id}
              order={e.order}
              name={e.name}
              genus={e.genus}
              family={e.family}
              nutritions={e.nutritions}
              img={images[index]}
              price={prices[index]}
            />
          ) : null
        )}
      </Grid>
    </Box>
  );
}
