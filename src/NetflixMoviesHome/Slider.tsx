import {
  useBreakpointValue,
  Flex,
  Button,
  Heading,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";

const Slider = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      overflowX="auto"
      scrollbarWidth="none"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {movies.map((movie) => (
        <Box
          key={movie.id}
          flexShrink={0}
          mr={isMobile ? 2 : 4}
          position="relative"
          _last={{ mr: 0 }}
        >
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            borderRadius="lg"
            w={isMobile ? "100px" : "200px"}
            h={isMobile ? "150px" : "300px"}
            objectFit="cover"
          />
          <Flex
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            align="center"
            justify="center"
            opacity={0}
            _hover={{ opacity: 1, background: "rgba(0,0,0,0.5)" }}
            transition="opacity 0.3s ease"
          >
            <Button colorScheme="red">Watch Now</Button>
          </Flex>
          <Box mt={2}>
            <Heading as="h3" size="sm">
              {movie.title}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {movie.genre}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Slider;
