import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import animation from "../assets/leo.gif";
import tv from "../assets/animation placeholder.png";

const WatchOnTv = () => {
  return (
    <>
      <Flex
        minHeight={"auto"}
        p={{
          base: "50px 20px 70px 20px ",
          md: "50px 20px 70px 20px ",
          lg: "140px 20px",
        }}
        flexFlow={{ base: "column", md: "column", lg: "row " }}
        justifyContent={"center"}
        alignItems={{ base: "center", md: "center", lg: "center" }}
      >
        <Flex
          flexFlow={{ base: "column", md: "column", lg: "row " }}
          justifyContent={"center"}
          textAlign={{ base: "center", md: "center", lg: "left" }}
          alignItems={{ base: "center", md: "center", lg: "center" }}
          flexBasis={{ base: "100%", lg: "80%" }}
        >
          <Box textAlign={{ base: "center", md: "center", lg: "start" }}>
            <Heading
              fontSize={{ base: "2.1rem", md: "2.1rem", lg: "2.7rem" }}
              fontWeight={{ base: 800, md: 800, lg: 1000 }}
            >
              Enjoy on your TV
            </Heading>
            <Text
              fontSize={{ base: "1.2rem", md: "1.2rem", lg: "1.4rem" }}
              fontWeight={{ base: 600, md: 600, lg: 600 }}
              mt={"20px"}
            >
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </Text>
          </Box>
          <Box
            flexFlow={{ base: "column", md: "column", lg: "row " }}
            justifyContent={"center"}
            alignContent={"center"}
            textAlign="center"
            pt={{ base: "20px" }}
            position="relative"
            width="100%"
            minHeight={{ base: "40vh" }}
            overflow="hidden"
          >
            {/* Background GIF */}
            <Box
              position="absolute"
              top={{ base: "50%", md: "48%" }}
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex="1"
              width="80%" // Adjust the width of the GIF
            >
              <Image
                mx="auto"
                my="auto"
                src={animation}
                alt="Background GIF"
                objectFit="cover"
              />
            </Box>

            {/* Transparent TV Image */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex="2"
              width="100%" // Adjust the width of the TV image
            >
              <Image
                objectFit="cover"
                mx="auto"
                my="auto"
                src={tv}
                alt="Transparent TV"
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box width={"100%"} border=" 4px solid #262626" />
    </>
  );
};

export default WatchOnTv;
