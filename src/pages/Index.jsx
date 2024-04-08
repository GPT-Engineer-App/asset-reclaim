import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Stack, Icon } from "@chakra-ui/react";
import { FaCar, FaShip, FaHome, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                American Recovery Service
              </Heading>
              <Text fontSize="xl" mb={8}>
                Reliable asset recovery solutions for financial institutions
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhc3NldCUyMHJlY292ZXJ5fGVufDB8fHx8MTcxMjYwMTM1NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Asset Recovery" w={500} />
          </Flex>
        </Box>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <Flex justifyContent="space-between">
            <Box textAlign="center">
              <Icon as={FaCar} boxSize={20} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Vehicle Recovery
              </Heading>
              <Text>Recover cars, trucks, and motorcycles</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaShip} boxSize={20} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Boat Recovery
              </Heading>
              <Text>Recover boats and watercraft</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaHome} boxSize={20} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Property Recovery
              </Heading>
              <Text>Recover homes and real estate</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* About Section */}
      <Box bg="gray.100" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Box maxW="md">
              <Heading as="h2" size="xl" mb={4}>
                About Us
              </Heading>
              <Text mb={8}>American Recovery Service is a leading provider of asset recovery solutions for financial institutions. With years of experience and a dedicated team, we ensure the efficient and compliant recovery of assets nationwide.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3MTI2MDEzNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="About Us" w={400} />
          </Flex>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Contact Us
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={8} alignItems="center">
            <Icon as={FaPhoneAlt} boxSize={12} color="blue.500" />
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Get in Touch
              </Heading>
              <Text fontSize="xl">
                Call us at{" "}
                <Box as="span" color="blue.500" fontWeight="bold">
                  (123) 456-7890
                </Box>{" "}
                or email us at{" "}
                <Box as="span" color="blue.500" fontWeight="bold">
                  info@americanrecovery.com
                </Box>
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
