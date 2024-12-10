import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Card, Typography, CircularProgress } from "@mui/material";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("userToken");

        if (!token) {
          // If no token is found, redirect to login
          window.location.href = "/login";
          return;
        }

        // Using the new API URL
        const response = await axios.get("https://6756e102c0a427baf94acc34.mockapi.io/EXAM", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again later.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div><CircularProgress /> Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h4" component="h4" gutterBottom>
          Your Registered Courses
        </Typography>
        {courses.length === 0 ? (
          <Typography>No courses available.</Typography>
        ) : (
          <Grid container spacing={2}>
            {courses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <Card sx={{ padding: "16px" }}>
                  <Typography variant="h5" gutterBottom>
                    {course.name}
                  </Typography>
                  <Typography variant="body1">
                    Category: {course.category}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
}
