import { Box, Grid, Typography, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";

export default function Cards() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`https://www.fruityvice.com/api/fruit/all`).then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(data);

  return (
    <Box m={5}>
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

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {data.map((e, index) => (
          <Card
            key={index}
            id={e.id}
            order={e.order}
            name={e.name}
            genus={e.genus}
            family={e.family}
            nutritions={e.nutritions}
          />
        ))}
      </Grid>
    </Box>
  );
}
