import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import phoneImage from "../assets/phone-animation-placeholder.jpg";
import strangerThings from "../assets/strangerthings-img.png";
import downloadGif from "../assets/download on device-animation.gif";

const WatchOnDevice = () => {
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
          flexFlow={{ base: "column", md: "column", lg: "row-reverse " }}
          justifyContent={"center"}
          textAlign={"center"}
          flexBasis={"80%"}
          alignItems={{ base: "center", md: "center", lg: "center" }}
        >
          <Box textAlign={{ base: "center", md: "center", lg: "start" }}>
            <Heading
              fontSize={{ base: "2.1rem", md: "2.1rem", lg: "2.7rem" }}
              fontWeight={{ base: 800, md: 800, lg: 1000 }}
              textAlign={"start"}
            >
              Download your shows to watch offline
            </Heading>
            <Text
              fontSize={{ base: "1.2rem", md: "1.2rem", lg: "1.4rem" }}
              fontWeight={{ base: 600, md: 600, lg: 600 }}
              textAlign={"start"}
              mt={"20px"}
            >
              Save your favorites easily and always have something to watch.
            </Text>
          </Box>
          <Box pt={{ base: "20px" }} position="relative">
            {/* Phone Image */}
            <Image
              objectFit="cover"
              mx="auto"
              my="auto"
              src={phoneImage}
              minWidth={{ base: "120px", md: "120px", lg: "500px" }} // Set the minimum width
            />

            {/* Box under the image */}
            <Box
              position="absolute"
              bottom="20px" // Adjust the bottom value to move the box up
              left="50%"
              transform="translateX(-50%)"
              textAlign="center"
              p="10px"
              bgColor="black" // Background color
              borderRadius="10px" // Border radius
              height={{ base: "25%", md: "25%" }}
              width={{ base: "70%", md: "60%" }} // Adjust the width for responsiveness
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderStyle="solid"
              borderWidth="1px"
              borderColor="gray.300"
            >
              {/* Left Image */}
              <Image
                src={strangerThings}
                width="auto"
                maxWidth="100%"
                maxHeight="100%"
              />

              {/* Text in the middle */}
              <Box mx={"8px"} textAlign={"start"}>
                <Text
                  fontSize={{ base: "0.8rem" }}
                  color="white"
                  fontWeight="bold"
                >
                  Stranger Things
                  <Text fontSize={{ base: "0.7rem" }} color="#0071eb">
                    Downloading...
                  </Text>
                </Text>
              </Box>

              {/* Right Image */}
              <Image
                src={downloadGif}
                width="20%"
                maxWidth="100%"
                maxHeight="100%"
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box width={"100%"} border="4px solid #262626" />
    </>
  );
};

export default WatchOnDevice;
