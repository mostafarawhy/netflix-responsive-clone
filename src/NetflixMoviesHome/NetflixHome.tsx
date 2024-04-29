import { Box, Flex, Grid, GridItem, IconButton, Image } from "@chakra-ui/react";
import NavBar from "./NavBar";

const NetflixHome = () => {
  return (
    <Grid
      templateRows="auto 1fr auto" // Define grid rows: navbar, preview, slider
      templateColumns={{ base: "1fr", md: "1fr" }} // Define columns for different screen sizes
      height="100vh" // Set the grid height to 100% of the viewport height
    >
      {/* Navbar */}
      <GridItem bg="gray.800" color="white" p="4">
        <NavBar />
      </GridItem>

      {/* Preview */}
      <GridItem bg="gray.200">
        <Image />
      </GridItem>

      {/* Slider */}
      <GridItem bg="gray.300" p="4">
        <Flex align="center" justify="center">
          <IconButton aria-label="Previous" size="lg" mr={4} />
          <Box w="100%" display="flex" overflowX="auto">
            {/* Slider content */}
            dhksbdjnkj
          </Box>
          {/* Add more sliders as needed */}
          <IconButton aria-label="Next" size="lg" ml={4} />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default NetflixHome;
