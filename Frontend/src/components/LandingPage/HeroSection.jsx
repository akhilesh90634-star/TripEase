import {Box,Button,Chip,Container,Stack,TextField,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../Api/Api";
import { KeyboardArrowDown, Search } from "@mui/icons-material";

function HeroSection({ setFilteredPackages }) {

  const [packages, setPackages] = useState([]);
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");


  async function fetchPackages() {
    try {
      const res = await api.get("/api/packages");
      setPackages(res.data);
      setFilteredPackages(res.data);
    } catch (err) {
      console.log("Error fetching packages");
    }
  }

 function handleFilter(type) {
          setSelected(type);

          if (type === "All") {
            setFilteredPackages(packages);
            return;
          }

          if (type === "Solo") {
            setFilteredPackages(
              packages.filter((item) => {
                return item.bookingType?.toLowerCase() === "solo";
              })
            );
            return;
          }

          if (type === "Group") {
            setFilteredPackages(
              packages.filter((item) => {
                return item.bookingType?.toLowerCase() === "group";
              })
            );
            return;
          }

          if (type === "Under ₹10,000") {
            setFilteredPackages(
              packages.filter((item) => {
                return Number(item.price.replace(/[^0-9]/g, "")) < 10000;
              })
            );
            return;
          }

          if (type === "₹10k-₹20k") {
            setFilteredPackages(
              packages.filter((item) => {
                const price = Number(item.price.replace(/[^0-9]/g, ""));
                return price >= 10000 && price <= 20000;
              })
            );
            return;
          }

          if (type === "₹20k+") {
            setFilteredPackages(
              packages.filter((item) => {
                return Number(item.price.replace(/[^0-9]/g, "")) > 20000;
              })
            );
            return;
          }

          setFilteredPackages(
            packages.filter((item) => {
              return item.category
                ?.toLowerCase()
                .includes(type.toLowerCase());
            })
          );
        }
  function handleSearch(value) {
    setSearch(value);

    setFilteredPackages(
      packages.filter((item ,ind) =>{
        item.title?.toLowerCase().includes(value.toLowerCase())
      }
        
      )
    );
  }
  
  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div>

      {/* VIDEO HERO */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          color: "white",
           marginTop: "-80px" 
        }}
      >
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0
          }}
        >
          <source src="/TripEaseLP.mp4" type="video/mp4" />
        </video>
        <Box
               sx={{
                      position: "absolute",
                      bottom: 20,
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer"
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        letterSpacing: "3px"
                      }}
                    >
                      SCROLL
                    </Typography>

                    <Button
                      sx={{
                        minWidth: "30px",
                        color: "#fff",
                        fontSize: "18px"
                      }}
                    >
                      <KeyboardArrowDown/>
                    </Button>
                  </Box>

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.25)"
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography
            sx={{
              fontSize: "64px",
              fontWeight: 300,
              mb: 6,
              fontFamily: "serif"
            }}
          >
             Making Every Trip Easy
          </Typography>

          <Stack direction="row" spacing={4} alignItems="center">
            <Box>
              <Typography mb={1} fontSize={20} textAlign="center">
                Where to next?
              </Typography>

              <Stack direction="row">
                <TextField
                  placeholder="Explore destinations"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  sx={{
                    width: "320px",
                    bgcolor: "transparent",
                    input: { color: "white" },
                    fieldset: { borderColor: "white" }
                  }}
                />

                <Button
                  sx={{
                    bgcolor: "#e5ddd5",
                    color: "black",
                    minWidth: "60px"
                  }}
                >
                  <Search />
                </Button>
              </Stack>
            </Box>           
          </Stack>
        </Box>
      </Box>

      {/* CHIPS (unchanged) */}
     <Box sx={{ backgroundColor: "#f5f7fb", pt: 3, pb: 2 }}>
  <Container sx={{ mt: 3 }}>
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {[ "All", "Beach", "Mountain", "City", "Desert", "Nature", "Heritage", "Solo",
        "Group",  "Under ₹10,000",  "₹10k-₹20k",  "₹20k+"].map((item,ind)=>(
        <Chip
          key={item}
          label={item}
          clickable
          onClick={() => handleFilter(item)}
          color={selected === item ? "primary" : "default"}
        />
      ))}
    </Stack>
  </Container>
</Box>

    </div>
  );
}

export default HeroSection;