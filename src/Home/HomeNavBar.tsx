import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Select,
  Spacer,
} from "@chakra-ui/react";
import logo from "../assets/ne355f3c4-netflix-logo-file-netflix-2015-logo-svg-wikimedia-commons.png";
import styles from "./Home_modules_css/homeNavBar.module.css";

const HomeNavBar = () => {
  return (
    <Flex p={{ lg: "0px 160px", xl: "0px 160px" }} flexFlow={"row wrap"}>
      <Box
        minWidth={"90px"}
        width={{ base: "100px", md: "100px", lg: "150px" }}
        className={styles.navLogoContainer}
      >
        <Image
          src={logo}
          flexBasis={{ base: "100%", md: "100%" }}
          alt="Netflix Logo"
        />
      </Box>
      <Spacer />
      <HStack spacing={4}>
        <Select
          width={{ base: "68px", sm: "140px", md: "140px" }}
          height={"40px"}
          variant="outline"
          placeholder="English"
        >
          <option value="option1">Option 1</option>
        </Select>

        <Button
          className={styles.navButton}
          color="white"
          colorScheme="red"
          variant="solid"
        >
          Sign in
        </Button>
      </HStack>
    </Flex>
  );
};

export default HomeNavBar;
