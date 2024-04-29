// WatchEveryWhere.jsx
import {
  Flex,
  Center,
  HStack,
  Heading,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import animation from "../assets/watch on everything placeholder.png";
import styles from "./Home_modules_css/watchEveryWhere.module.css";

const WatchEveryWhere = () => {
  return (
    <>
      <Flex
        minHeight={"auto"}
        p={{
          base: "50px 20px 70px 30px ",
          md: "50px 20px 70px 30px ",
        }}
        flexFlow={{ base: "column", md: "column", lg: "row " }}
        justifyContent={"center"}
        position="relative"
        alignItems={{ base: "center", md: "center", lg: "center" }}
      >
        <Flex
          flexFlow={{ base: "column", md: "column", lg: "row " }}
          justifyContent={"center"}
          textAlign={"center"}
          flexBasis={"80%"}
          alignItems={{ base: "center", md: "center", lg: "center" }}
        >
          <Box textAlign={{ base: "center", md: "center", lg: "start" }}>
            <Heading
              fontSize={{ base: "2.1rem", md: "2.1rem", lg: "2.7rem" }}
              fontWeight={{ base: 800, md: 800, lg: 1000 }}
            >
              Watch everywhere
            </Heading>
            <Text
              fontSize={{ base: "1.2rem", md: "1.2rem", lg: "1.4rem" }}
              fontWeight={{ base: 600, md: 600, lg: 600 }}
              mt={"20px"}
            >
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </Text>
          </Box>
          <Box pt={{ base: "20px" }} position="relative">
            {/* Phone Image */}
            <Image
              objectFit="cover"
              mx="auto"
              my="auto"
              src={animation}
              minHeight="120px" // Set the minimum height
              minWidth="120px" // Set the minimum width
            />
          </Box>
        </Flex>
      </Flex>
      <Box width={"100%"} border="4px solid #262626" />
    </>
  );
};

export default WatchEveryWhere;
