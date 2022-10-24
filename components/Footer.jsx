import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box
    textAlign="center"
    padding="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.300"
  >
    copyright &copy; RealEstator {new Date().getFullYear()}
  </Box>
);

export default Footer;
