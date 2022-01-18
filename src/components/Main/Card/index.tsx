import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

interface Nutrition {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}

interface Props {
  nutritions: Nutrition;
  id: number;
  genus: string;
  name: string;
  family: string;
  order: string;
}

const Card: React.FC<Props> = ({
  id,
  genus,
  name,
  family,
  order,
  nutritions,
}) => {
  const [arr, setArr] = useState<Nutrition[]>([nutritions]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m={5}>
      <Grid container spacing={2}>
        <Grid item>
          <Paper sx={{ padding: "50px" }}>
            <Grid container spacing={1} direction="column">
              {/* <Grid item>
                <Typography>{id}</Typography>
              </Grid> */}

              <Grid item>
                <Typography variant="h6">{name}</Typography>
              </Grid>

              <Grid item>
                <Typography variant="body2">Genus: {genus}</Typography>
              </Grid>

              <Grid item>
                <Typography variant="body2">Family: {family}</Typography>
              </Grid>

              <Grid item>
                <Typography variant="body2">Order: {order}</Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{ backgroundColor: "rgb(136,188,35)" }}
                  color="success"
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  View Nutrition
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <Grid item>
                    <DialogTitle id="alert-dialog-title">
                      Nutrition table of "{name}"
                    </DialogTitle>
                  </Grid>
                  <Grid item>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <Grid container spacing={0}>
                          {arr.map((a, index) => (
                            <Grid item key={index}>
                              <Typography>Calories: {a.calories}</Typography>

                              <Typography>
                                Carbohydrates: {a.carbohydrates}
                              </Typography>

                              <Typography>Fat: {a.fat}</Typography>

                              <Typography>Protein: {a.protein}</Typography>

                              <Typography>Sugar: {a.sugar}</Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </DialogContentText>
                    </DialogContent>
                  </Grid>
                  <Grid item>
                    <DialogActions>
                      <Button
                        sx={{ backgroundColor: "rgb(136,188,35)" }}
                        variant="contained"
                        color="success"
                        onClick={handleClose}
                        fullWidth
                      >
                        Ok
                      </Button>
                    </DialogActions>
                  </Grid>
                </Dialog>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card;
