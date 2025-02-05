import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";

const products = [
  {
    id: "1",
    name: "Pizza",
    category: "Italian",
    pname: "FoodTuck Special",
    priority: "High",
    pbg: "error.main",
    budget: "150",
  },
  {
    id: "2",
    name: "Country Burger",
    category: "Fast Food",
    pname: "Spicy Delight",
    priority: "Critical",
    pbg: "success.main",
    budget: "300",
  },
  {
    id: "3",
    name: "Sandwiches",
    category: "Fast Food",
    pname: "Grill Master",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "260",
  },
  {
    id: "4",
    name: "Chocolate Muffin",
    category: "Bakery",
    pname: "Sweet Treats",
    priority: "Low",
    pbg: "primary.main",
    budget: "180",
  },
];

const ProductPerformance = () => {
  return (
    <BaseCard title="Menu Item Performance">
      <TableContainer
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Item Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Category
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Popularity
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Price (PKR)
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {product.name}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {product.category}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.pname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor: product.pbg,
                      color: "#fff",
                    }}
                    size="small"
                    label={product.priority}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{product.budget} /-</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default ProductPerformance;
