"use client";

import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const TermsSection = () => {
  return (
    <Box
      sx={{
        marginTop: "1rem",
        gap: "0.3rem",
        display: "flex",
        flexWrap: "wrap",
      }}>
      <Typography variant="subtitle2">
        By continuing, I agree to Greenstand's
      </Typography>
      <Link href="#" component={NextLink} variant="subtitle2">
        Privacy Policy
      </Link>
      <Typography variant="subtitle2">and</Typography>
      <Link href="#" component={NextLink} variant="subtitle2">
        Terms of Use
      </Link>
    </Box>
  );
};

export default TermsSection;
