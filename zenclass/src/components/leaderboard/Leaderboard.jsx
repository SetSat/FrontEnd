import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://capstone-x52g.onrender.com/leader/data")
      .then((response) => {
        setData(response.data.sort((a, b) => a.rank - b.rank));
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Box>
      ) : (
        <TableContainer
          component={Paper}
          style={{ margin: "auto", width: "80vw" }}
        >
          <Table>
            <TableHead>
              <TableRow style={{ backgroundcolor: "grey" }}>
                <TableCell align="center">Rank</TableCell>
                <TableCell style={{ fontweight: "bold" }}>Name</TableCell>
                <TableCell style={{ fontweight: "bold" }}>Batch</TableCell>
                <TableCell style={{ fontweight: "bold" }}>
                  Learning (%)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item._id}>
                  <TableCell align="center" style={{ color: "blue" }}>
                    {item.rank}
                  </TableCell>
                  <TableCell style={{ color: "black" }}>{item.name}</TableCell>
                  <TableCell style={{ color: "black" }}>{item.batch}</TableCell>
                  <TableCell style={{ color: "black" }}>
                    {item.learning}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default DataTable;
