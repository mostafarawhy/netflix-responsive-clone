import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/ne355f3c4-netflix-logo-file-netflix-2015-logo-svg-wikimedia-commons.png";

const NavBar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? (
        <Flex flexDirection="row" alignItems="center" justifyContent="start">
          <Flex flexDirection="row" alignItems="center" justifyContent="start">
            <Button>B</Button>
            <Image width="80px" src={logo} />
          </Flex>
          <Spacer />
          <Input width={"80px"} />
        </Flex>
      ) : (
        // Render components for larger screens
        // For example, add more buttons or other elements
        <>{/* Add more elements as needed */}</>
      )}
    </>
  );
};

export default NavBar;
