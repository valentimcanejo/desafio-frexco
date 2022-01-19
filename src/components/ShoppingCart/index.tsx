import {
  Box,
  Grid,
  Typography,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Props } from "../Main/Card/index";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [arr, setArr] = useState<any[]>([]);
  const [sum, setSum] = useState(1);
  const [cartItems, setCartItems] = useState([] as Props[]);
  //const [images, setImages] = useState<any[]>([arr[0].img]);

  useEffect(() => {
    setArr(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  return (
    <Box>
      <DataGrid
        style={{ height: 400, width: "100%" }}
        columns={[
          { field: "id", headerName: "ID" },
          { field: "name", headerName: "Name" },
          {
            field: "family",
            headerName: "Family",
          },
        ]}
        rows={arr.map((a, index) => ({
          id: a.id,
          name: a.name,
          family: a.family,
        }))}
      />
      <Box
        style={{ marginTop: "30px" }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Link style={{ textDecoration: "none" }} to="/purchase">
          <Button variant="contained" color="success">
            Purchase
          </Button>
        </Link>
      </Box>
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
