import React, { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#85FFBD",
    backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  cardHeader: {
    marginBottom: "10px",
  },
  cardBody: {
    color: "#333",
  },
  loader: {
    margin: "50px auto",
  },
}));

function Requirement() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://capstone-x52g.onrender.com/req/requirements"
        );
        setRequirements(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress className={classes.loader} />
      ) : (
        requirements.map((requirement, index) => (
          <div className={classes.card} key={index}>
            <div className={classes.cardHeader}>
              <Typography variant="h5">{requirement.companyName}</Typography>
            </div>
            <div className={classes.cardBody}>
              <Typography variant="body1">
                <strong>Role:</strong> {requirement.role}
              </Typography>
              <Typography variant="body1">
                <strong>Nature of Job:</strong> {requirement.natureOfJob}
              </Typography>
              <Typography variant="body1">
                <strong>Deadline:</strong> {requirement.deadline}
              </Typography>
              <Typography variant="body1">
                <strong>CTC:</strong> {requirement.ctc}
              </Typography>
              <Typography variant="body1">
                <strong>Openings:</strong> {requirement.openings}
              </Typography>
              <Typography variant="body1">
                <strong>Program:</strong> {requirement.program}
              </Typography>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Requirement;
