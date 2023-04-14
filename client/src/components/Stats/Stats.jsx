import './Stats.scss';
import {
  Box,
  Container,
  Icon,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import { GiMoneyStack, GiPiggyBank, GiCalendar } from 'react-icons/gi';

export const Stats = () => {
  return (
    <Box id="about" ms={{ base: 9, md: 4 }} my={{ base: 0, md: 10 }}>
      <Container className="container statsContainer">
        <Container
          className="stage-cube-cont"
          data-aos="fade-right"
          data-aos-anchor=".statsContainer"
          data-aos-duration="500"
        >
          <StatGroup
            mt={{ base: 10, md: 15 }}
            ms={{ base: 0, md: 8 }}
            alignItems="center"
          >
            <Container className="cubespinner">
              <Container className="face1">
                <Stat alignItems="center">
                  <StatLabel
                    color="brand.800"
                    fontWeight="bold"
                    fontSize="2xl"
                    mb={2}
                  >
                    Income
                  </StatLabel>
                  <StatNumber color="brand.700" fontWeight="semibold">
                    $345,670
                  </StatNumber>
                  <StatHelpText
                    color="brand.800"
                    fontWeight="bold"
                    fontSize="xl"
                  >
                    <StatArrow type="increase" color="brand.700" />
                    23.36%
                  </StatHelpText>
                </Stat>
              </Container>
              <Container className="face2">
                <Icon as={GiMoneyStack} color="brand.800" />
              </Container>
              <Container className="face3">
                <Stat alignItems="center">
                  <StatLabel
                    color="brand.800"
                    fontWeight="bold"
                    fontSize="2xl"
                    mb={2}
                  >
                    Short-Payments
                  </StatLabel>
                  <StatNumber color="brand.700" fontWeight="semibold">
                    15
                  </StatNumber>
                  <StatHelpText
                    color="brand.800"
                    fontWeight="bold"
                    fontSize="xl"
                  >
                    <StatArrow type="decrease" color="brand.700" />
                    9.05%
                  </StatHelpText>
                </Stat>
              </Container>
              <Container className="face4">
                <Icon as={GiPiggyBank} color="brand.800" />
              </Container>
              <Container className="face5">
                <Stat alignItems="center">
                  <StatLabel
                    color="brand.800"
                    fontWeight="bold"
                    fontSize="2xl"
                    mb={2}
                  >
                    Average DTP
                  </StatLabel>
                  <StatNumber color="brand.700" fontWeight="semibold">
                    29.8d
                  </StatNumber>
                  <StatHelpText
                    color="brand.800"
                    fontWeight="bold"
                    fontSize="xl"
                    mt={2}
                  >
                    <StatArrow type="decrease" color="brand.700" />
                    10.2d
                  </StatHelpText>
                </Stat>
              </Container>
              <Container className="face6">
                <Icon as={GiCalendar} color="brand.800" />
              </Container>
            </Container>
          </StatGroup>
        </Container>
      </Container>
    </Box>
  );
};