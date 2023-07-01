import { Outlet } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";

export default function LogoOnlyLayout() {
  return (
    <Container maxWidth="sm" sx={{ height: "100%" }}>
      <Box sx={{mt: 10}}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
          }}
        >
          Trello Clone
        </Typography>
        
      </Box>
      <Box sx={{ mt: 5 }}>
        <Outlet />
      </Box>
    </Container>
  );
}
