import {
  Box,
  Grid,
  Typography,
  Paper,
  Drawer,
  IconButton,
  styled,
  Stack,
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

type Anchor = "right";

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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
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
  const [sum, setSum] = useState(0);
  useEffect(() => {
    axios.get(`https://www.fruityvice.com/api/fruit/all`).then((res) => {
      setData(res.data);
    });
  }, []);

  // useEffect(() => {
  //   console.log(data[0].img);
  //   //data[0].img = Banana;
  // }, []);
  //data[0].img = Banana;

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
          }}
          color="success"
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
        spacing={0}
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
      </Grid>

      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {data.map((e, index) => (
          <Card
            key={index}
            id={e.id}
            order={e.order}
            name={e.name}
            genus={e.genus}
            family={e.family}
            nutritions={e.nutritions}
            img={images[0 + index]}
          />
        ))}
      </Grid>
    </Box>
  );
}
