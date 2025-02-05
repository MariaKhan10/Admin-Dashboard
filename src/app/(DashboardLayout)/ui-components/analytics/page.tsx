"use client";
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";


const analyticsData = [
  { title: "Total Sales", value: "230" },
  { title: "Total Orders", value: "320" },
  { title: "Active Users", value: "1,234" },
  { title: "Total Revenue", value: "4560" },
];

export default function Analytics() {
  return (
    <Grid container spacing={3}>
      {analyticsData.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="h4" fontWeight="bold">
              {item.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
