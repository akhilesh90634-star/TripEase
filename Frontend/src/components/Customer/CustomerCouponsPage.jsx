import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  Chip,
  Stack
} from "@mui/material";

function CustomerCouponsPage() {
  const [code, setCode] = useState("");

  const coupons = [
    {
      id: 1,
      title: "TRIPEASE10",
      offer: "10% OFF",
      desc: "Get 10% off on trips above ₹5,000",
    },
    {
      id: 2,
      title: "TRIPEASE20",
      offer: "20% OFF",
      desc: "Get 20% off on trips above ₹10,000",
    },
    {
      id: 3,
      title: "WELCOMES",
      offer: "5% OFF",
      desc: "Flat 5% off for new users",
    },
    {
      id: 4,
      title: "SUMMER15",
      offer: "15% OFF",
      desc: "Flat 15% off on summer trips above ₹8,000",
    },
  ];

  const handleApply = () => {
    alert("Applied Coupon: " + code);
  };

  const handleUse = (couponCode) => {
    setCode(couponCode);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>

      {/* Header */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Have a coupon code?
      </Typography>

      {/* Input Section */}
      <Box display="flex" gap={2} mb={4}>
        <TextField
          fullWidth
          size="small"
          placeholder="Enter coupon code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button variant="contained" sx={{ px: 3 }} onClick={handleApply}>
          Apply
        </Button>
      </Box>

      {/* Section Title */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Available Coupons
      </Typography>

      {/* Coupon List */}
      <Stack spacing={2}>
        {coupons.map((item) => (
          <Card key={item.id} sx={{ borderRadius: 2 }}>
            <CardContent>

              <Box display="flex" justifyContent="space-between" alignItems="center">

                {/* LEFT SIDE */}
                <Box>
                  {/* green tag like image */}
                  <Chip
                    label={item.title}
                    size="small"
                    sx={{
                      backgroundColor: "#2e7d32",
                      color: "white",
                      fontWeight: "bold",
                      mb: 1
                    }}
                  />

                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Box>

                {/* RIGHT SIDE */}
                <Box textAlign="right">
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="success.main"
                  >
                    {item.offer}
                  </Typography>

                  <Button
                    size="small"
                    variant="contained"
                    sx={{ mt: 1, textTransform: "none" }}
                    onClick={() => handleUse(item.title)}
                  >
                    Use
                  </Button>
                </Box>

              </Box>

            </CardContent>
          </Card>
        ))}
      </Stack>

    </Container>
  );
}

export default CustomerCouponsPage;