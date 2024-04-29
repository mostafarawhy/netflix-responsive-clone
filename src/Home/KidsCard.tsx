// KidsCard.jsx
import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react";
import animation from "../assets/kids pic- animation placeholder.png";

const KidsCard = () => {
  return (
    <>
      <Flex
        minHeight={"auto"}
        p={{
          base: "50px 20px 70px 30px ",
          md: "50px 20px 70px 30px ",
          lg: "none",
        }}
        flexFlow={{ base: "column", md: "column", lg: "row-reverse " }}
        justifyContent={"center"}
        alignItems={{ base: "center", md: "center", lg: "center" }} // Center vertically on LG screens
        position="relative"
      >
        <Flex
          flexFlow={{ base: "column", md: "column", lg: "row-reverse " }}
          justifyContent={"center"}
          textAlign={"center"}
          flexBasis={{ base: "100%", lg: "80%" }} // Full width on small screens, 80% on LG screens
          alignItems={{ base: "center", md: "center", lg: "center" }} // Center vertically on LG screens
        >
          <Box textAlign={{ base: "center", md: "center", lg: "start" }}>
            <Heading
              fontSize={{ base: "2.1rem", md: "2.1rem", lg: "2.7rem" }}
              fontWeight={{ base: 800, md: 800, lg: 1000 }}
            >
              Create profiles for kids
            </Heading>
            <Text
              fontSize={{ base: "1.2rem", md: "1.2rem", lg: "1.4rem" }}
              fontWeight={{ base: 600, md: 600, lg: 600 }}
              mt={"20px"}
            >
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </Text>
          </Box>
          <Box pt={{ base: "20px" }} position="relative">
            {/* Phone Image */}
            <Image
              objectFit="cover"
              mx="auto"
              my="auto"
              src={animation}
              minWidth={{ base: "120px", md: "120px", lg: "500px" }} // Set the minimum width
            />
          </Box>
        </Flex>
      </Flex>
      <Box width={"100%"} border="4px solid #262626" />
    </>
  );
};

export default KidsCard;
