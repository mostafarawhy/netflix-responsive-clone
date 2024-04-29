import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import HomeNavBar from "./HomeNavBar";
import backGround from "../assets/backGroundnetflix.webp";

const DescriptionAndGettingStarted = () => {
  return (
    <>
      <Box
        bgImage={`radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.85) 100%), url(${backGround})`}
        flexDirection="column"
        backgroundSize="cover"
        backgroundPosition="center"
        p={{ base: "25px" }}
        boxSizing="border-box"
      >
        <HomeNavBar />
        <Flex
          minHeight={"auto"}
          m={{ base: "30px auto", md: "65px auto", lg: "135px auto" }}
          p={{ base: "40px auto" }}
          flexFlow={{ base: "column", md: "column" }}
          justifyContent={"center"}
        >
          <Box m={{ base: "auto", md: "50px 30px" }} textAlign={"center"}>
            <Heading
              fontSize={{ base: "2rem", md: "2rem", lg: "2.9rem" }}
              fontWeight={{ base: 800, md: 800, lg: 1000 }}
            >
              Unlimited movies, TV shows, and more
            </Heading>

            <Text
              mt={"20px"}
              fontSize={{ base: "1.3rem", md: "1.3rem", lg: "1.3rem" }}
              fontWeight={{ base: 600, md: 600, lg: 600 }}
            >
              Watch anywhere. Cancel anytime.
            </Text>
            <VStack rowGap={"15px"} mt={"20px"}>
              <Text
                fontSize={{ base: "1.2rem", md: "1.2rem", lg: "1.3rem" }}
                fontWeight={{ base: 600, md: 600, lg: 600 }}
              >
                Ready to watch? Enter your email to create or restart your
                membership.
              </Text>
              <Flex
                justifyContent={"center"}
                gap={"15px"}
                flexFlow={{ base: "row wrap", md: "row " }}
              >
                <Input
                  width={{ base: "90%", md: "350px" }}
                  height={{ base: "48px", md: "50px" }}
                  border={"1px solid grey"}
                  focusBorderColor="white"
                  variant="filled"
                  placeholder="Email address"
                />
                <Button
                  borderRadius="5px"
                  width={{ base: "50%", md: "200px" }}
                  height={{ base: "48px", md: "50px" }}
                  fontSize={{ base: "auto", md: "20px" }}
                  fontWeight={{ base: 800 }}
                  color="white"
                  colorScheme="red"
                  variant="solid"
                  style={{
                    whiteSpace: "normal",
                    overflowWrap: "break-word",
                    textAlign: "center", // Center the text
                    display: "flex", // Use flex display
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                  }}
                >
                  Get Started
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Box>

      <Box width={"100%"} border=" 4px solid #262626" />
    </>
  );
};

export default DescriptionAndGettingStarted;
