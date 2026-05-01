import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import PopularPackages from "../LandingPage/PopularPackages";
import Navbar from "../LandingPage/Navbar";

function DestinationDetails({ packages }) {
  const { type } = useParams();

const filteredPackages = packages.filter((pkg,ind) => {
        if (!pkg.category) {
            return false;
        }

        const category = pkg.category.toLowerCase();
        const selectedType = type.toLowerCase();

        if (category === selectedType) {
            return true;
        } else {
            return false;
        }
        });

  return (
    <Box>
      <Navbar />

      <Box sx={{ px: 4, py: 12 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={4}
        >
          {type.toUpperCase()} PACKAGES
        </Typography>

        {filteredPackages.length === 0 ? (
          <Typography textAlign="center">
            No packages available
          </Typography>
        ) : (
          <PopularPackages packages={filteredPackages} />
        )}
      </Box>
    </Box>
  );
}

export default DestinationDetails;