import {Box, Button, Chip, Container, Stack,TextField, Typography} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import api from "../Api/Api";
import { KeyboardArrowDown, Search } from "@mui/icons-material";

function HeroSection({ setFilteredPackages }) {

  const [packages, setPackages] = useState([]);
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  // Suggestions
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const wrapperRef = useRef(null);

  // FETCH DATA
  async function fetchPackages() {
    try {
      const res = await api.get("/api/packages");
      setPackages(res.data);
      setFilteredPackages(res.data);
    } catch {
      console.log("Error fetching packages");
    }
  }

  useEffect(() => {
    fetchPackages();
  }, []);

  //  FILTER + SEARCH
  function applyFilters(type, searchValue) {
    let filtered = [...packages];

    // FILTER
    if (type && type !== "All") {

      if (type === "Solo" || type === "Group") {
        filtered = filtered.filter(
          (item) =>
            item.bookingType?.toLowerCase() === type.toLowerCase()
        );
      }

      else if (type === "Under ₹10,000") {
        filtered = filtered.filter(
          (item) =>
            Number(item.price.replace(/[^0-9]/g, "")) < 10000
        );
      }

      else if (type === "₹10k-₹20k") {
        filtered = filtered.filter((item) => {
          const price = Number(item.price.replace(/[^0-9]/g, ""));
          return price >= 10000 && price <= 20000;
        });
      }

      else if (type === "₹20k+") {
        filtered = filtered.filter(
          (item) =>
            Number(item.price.replace(/[^0-9]/g, "")) > 20000
        );
      }

      else {
        filtered = filtered.filter((item) =>
          item.category?.toLowerCase().includes(type.toLowerCase())
        );
      }
    }

    // SEARCH
    if (searchValue) {
      const val = searchValue.toLowerCase();

      filtered = filtered.filter((item) =>
        item.title?.toLowerCase().includes(val) ||
        item.category?.toLowerCase().includes(val) ||
        item.location?.toLowerCase().includes(val) ||
        item.bookingType?.toLowerCase().includes(val)
      );
    }

    setFilteredPackages(filtered);
  }

  // FILTER CLICK
  function handleFilter(type) {
    setSelected(type);
    applyFilters(type, search);
  }

  //  SEARCH + SUGGESTIONS
  function handleSearch(value) {
    setSearch(value);

    if (!value) {
      setSuggestions([]);
      setShowSuggestions(false);
      applyFilters(selected, "");
      return;
    }

    const val = value.toLowerCase();

    const matches = packages
      .filter((item) =>
        item.title?.toLowerCase().includes(val) ||
        item.category?.toLowerCase().includes(val) ||
        item.location?.toLowerCase().includes(val) ||
        item.bookingType?.toLowerCase().includes(val)
      )
      .slice(0, 5);

    setSuggestions(matches);
    setShowSuggestions(true);

    applyFilters(selected, value);
  }

  // CLICK SUGGESTION
  function handleSuggestionClick(item) {
    setSearch(item.title);
    setShowSuggestions(false);
    applyFilters(selected, item.title);
  }

  // CLICK OUTSIDE CLOSE
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>

      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          color: "white"
        }}
      >
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        >
          <source src="/TripEaseLP.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
             background: "rgba(0,0,0,0.3)"
          }}
        />

        {/* CONTENT */}
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

          {/*  SEARCH BOX WITH DROPDOWN */}
          <Stack direction="row" spacing={2}>
            <Box sx={{ position: "relative" }} ref={wrapperRef}>

              <TextField
              placeholder="Search: Goa, Mountain, Solo..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => suggestions.length && setShowSuggestions(true)}
              variant="outlined"
              sx={{
                width: "320px",

              // Input text color
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",   
                },

                // Focus border
                "&.Mui-focused fieldset": {
                  borderColor:"white",
                  borderWidth: "2px",
                }
              }
            }}
          />

              {/* DROPDOWN */}
              {showSuggestions && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "100%",
                    bgcolor: "#fff",
                    color: "#000",
                    borderRadius: 2,
                    boxShadow: 3,
                    mt: 1,
                    zIndex: 10,
                    maxHeight: 200,
                    overflowY: "auto"
                  }}
                >
                  {suggestions.length > 0 ? (
                    suggestions.map((item, i) => (
                      <Box
                        key={i}
                        onClick={() => handleSuggestionClick(item)}
                        sx={{
                          px: 2,
                          py: 1,
                          cursor: "pointer",
                          "&:hover": { bgcolor: "#f0f0f0" }
                        }}
                      >
                        {item.title}
                        <Typography variant="caption" display="block">
                          {item.category} • {item.location}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography sx={{ p: 2 }}>
                       The Package is not found
                    </Typography>
                  )}
                </Box>
              )}

            </Box>

          <Button
            onClick={() => handleSearch(search)}
            sx={{
              bgcolor: "#e5ddd5",
              color: "black",
              minWidth: "60px",
              "&:hover": {
                bgcolor: "#e5ddd5", 
              },
              "&:active": {
                bgcolor: "#e5ddd5",   
              },
              
            }}
          >
            <Search />
          </Button>
          </Stack>
        </Box>

        {/* SCROLL */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          <Typography fontSize="12px">SCROLL</Typography>
          <KeyboardArrowDown />
        </Box>
      </Box>

      {/* FILTERS */}
      <Box sx={{ backgroundColor: "#f5f7fb", py: 3 }}>
        <Container>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {[
              "All", "Beach", "Mountain", "City", "Desert",
              "Nature", "Heritage", "Solo", "Group",
              "Under ₹10,000", "₹10k-₹20k", "₹20k+"
            ].map((item) => (
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