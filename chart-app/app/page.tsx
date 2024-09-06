"use client";
import React from "react";
import NavBar from "./components/Navbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Container, Typography } from "@mui/material";
import { LineGraph } from "./components/LineChart";
import { BarGraph } from "./components/BarChart";
import { PieGraph } from "./components/PieChart";
import { CandlestickChart } from "./components/CandlestickChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Home = () => {
  return (
    <div>
      <div></div>
      <div>
        <NavBar />
        <Container sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={4}>
                <Item>
                  <Typography id="candlestick" variant="h6">
                    Candlestick Chart
                  </Typography>
                </Item>
              </Grid>
              <Grid size={10}>
                <Item>
                  <CandlestickChart />
                </Item>
              </Grid>
              <Grid size={4}>
                <Item>
                  <Typography id="line" variant="h6">
                    Line Chart
                  </Typography>
                </Item>
              </Grid>
              <Grid size={10}>
                <Item>
                  <LineGraph />
                </Item>
              </Grid>
              <Grid size={4}>
                <Item>
                  <Typography id="bar" variant="h6">
                    Bar Chart
                  </Typography>
                </Item>
              </Grid>
              <Grid size={10}>
                <Item>
                  <BarGraph />
                </Item>
              </Grid>
              <Grid size={4}>
                <Item>
                  <Typography id="pie" variant="h6">
                    Pie Chart
                  </Typography>
                </Item>
              </Grid>
              <Grid size={15}>
                <Item>
                  <PieGraph />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Home;
