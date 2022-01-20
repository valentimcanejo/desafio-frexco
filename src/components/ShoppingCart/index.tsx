import { Box, Grid, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [arr, setArr] = useState<any[]>([]);

  useEffect(() => {
    setArr(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={0}
      >
        <Grid item>
          <DataGrid
            style={{ height: 400, width: "100%" }}
            columns={[
              { field: "id", headerName: "ID" },
              { field: "name", headerName: "Name" },

              {
                field: "price",
                headerName: "Price $",
              },
            ]}
            rows={arr.map((a, index) => ({
              id: a.id,
              name: a.name,

              price: a.price,
            }))}
          />
        </Grid>
        <Grid item>
          <Box
            style={{ marginTop: "30px" }}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            {arr.length !== 0 ? (
              <Link style={{ textDecoration: "none" }} to="/purchase">
                <Button variant="contained" color="success">
                  Purchase
                </Button>
              </Link>
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;

/* <Paper sx={{ padding: "20px" }}>
              <Grid container spacing={0} direction="column">
                <Typography textAlign="center" variant="body1">
                  Order number {index + 1}
                </Typography>
                <Grid item>
                  <Typography variant="body1">{a.id}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{a.name}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{a.genus}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{a.family}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{a.order}</Typography>
                </Grid>
              </Grid>
            </Paper> */
