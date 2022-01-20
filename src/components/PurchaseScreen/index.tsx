import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PurchaseCard from "../Main/Card/PurchaseCard";

export default function PurchaseScreen() {
  const [arr, setArr] = useState<any[]>([]);

  useEffect(() => {
    setArr(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const endPurchase = () => {
    localStorage.removeItem("cart");
    alert("Purchase ended, thank you for buying our fruits :)");
  };

  return (
    <Box m={5}>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item>
          <Paper style={{ padding: "50px" }}>
            <Grid item>
              <Typography variant="h5" textAlign="center">
                Cart items:
              </Typography>
            </Grid>
            <Grid container spacing={0} justifyContent="space-between">
              <Grid item>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button color="error" variant="contained">
                    Cancel
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={endPurchase}
                    color="success"
                    variant="contained"
                  >
                    Purchase
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
            >
              {arr.map((e, index) => (
                <PurchaseCard
                  key={index}
                  id={e.id}
                  order={e.order}
                  name={e.name}
                  genus={e.genus}
                  family={e.family}
                  nutritions={e.nutritions}
                  price={e.price}
                  img={e.img}
                />
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
