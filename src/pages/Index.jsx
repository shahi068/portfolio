import React, { useContext, useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Heading, Text, Image, Button, Link, UnorderedList, ListItem, Divider, IconButton, useColorMode } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ColorModeContext } from '../main';


const projects = [
  {
    title: "Cryptocurrency Price Tracker",
    description: "Created a program capable of tracking the prices of cryptocurrency updated in live time utilizing Python & PyQt6. The program UI was created using QT Designer.",
  },
  {
    title: "Drone Simulation Model",
    description: ["Directed an advanced drone delivery simulation using State and Observer patterns to enhance realism by 30%.", "Enhanced both front-end and back-end development processes, achieving a 25% reduction in bug occurrence and a 20% improvement in UI responsiveness.", "Refined Agile project delivery with Jira, leading to a 40% boost in team productivity and a 15% reduction in release time."],
  },
  {
    title: "Handwritten Digit Detector",
    description: ["Created a machine-learning model capable of identifying handwritten digits utilizing the open-source TensorFlow library and the MNIST dataset.", "The machine-learning model achieved an accuracy of 93 percent on average."],
  },
  {
    title: "Publish Subscribe System (PubSub)",
    description: ["PubSub is a publish-subscribe system that allows clients to join, leave, subscribe, unsubscribe, publish and ping.", "The system is comprised of two components: the server and the client.", "The server is implemented using the Remote Procedure Call (RPC) library rpyc and manages a list of clients and articles.", "The client uses the rpyc library to connect to the server and allows the user to make requests.", "Articles are received by clients using a UDP socket and a receive thread is started to listen for incoming articles."],
  },
  {
    title: "Tetris Variant",
    description: ["Implemented an animated Python GUI program to play a variant of the classic video game Tetris using the turtle library.", "Utilized object-oriented programming concepts to create classes that encapsulate the game's data and behavior.", "Customized the game's play area size and color, making the game adaptable to different screen sizes."],
  },
];

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


const Index = () => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // This line is crucial
  

  // Ensure this function definition is correct
  const nextProject = () => {
    setCurrentProjectIndex((current) => (current + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    swipeToSlide: true,
    nextArrow: <IconButton aria-label="Next project" icon={<FaArrowRight />} />,
    prevArrow: <IconButton aria-label="Previous project" icon={<FaArrowLeft />} />,
  };

  

  return (
    <Box bg={colorMode === "light" ? "white" : "gray.800"} color={colorMode === "light" ? "black" : "white"}>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={colorMode === "light" ? "gray.100" : "gray.700"}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Adam Shahin
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }}>{/* TODO: Add responsive menu */}</Box>

        <Box display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1}>
        <IconButton onClick={toggleColorMode} ml="auto" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} aria-label="Toggle color mode" />
        <Button variant="ghost" onClick={() => scrollToSection('about')} aria-label="Go to About Section">About</Button>
          <Button variant="ghost" onClick={() => scrollToSection('qualifications')} aria-label="Go to Qualifications Section">Qualifications</Button>
          <Button variant="ghost" onClick={() => scrollToSection('projects')} aria-label="Go to Projects Section">Projects</Button>
          <Button variant="ghost" onClick={() => scrollToSection('contact')} aria-label="Go to Contact Section">Contact</Button>
        </Box>
      </Flex>

      {/* About Section */}
      <Box id="about" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Hi, I'm Adam!
        </Heading>
        <Image src="/IMG_1638.jpg" alt="Adam Shahin" borderRadius="full" boxSize="200px" objectFit="cover" float="right" ml={4} />
        <Text fontSize="xl" mb={4}>
          I'm a Computer Science graduate from the University of Minnesota, Twin Cities, and I call the vibrant Minneapolis area my home. My journey in tech is fueled by a passion for creating innovative solutions and a love for working in fast-paced environments where I can contribute to projects with meaningful outcomes.
        </Text>
        <Text fontSize="xl" mb={4}>
          Outside of my academic pursuits in computer science, my life is a tapestry of varied and dynamic interests. From the disciplined focus of Brazilian Jiu-Jitsu and Kickboxing to the precision and thrill of ice fishing and snowmobiling in Minnesota's great outdoors, these activities endow me with persistence, strategy, and adaptability. My enthusiasm for cooking reflects my approach to software development: creative, innovative, and bold. These hobbies do more than just enrich my personal life; they also shape my professional approach, inspiring me to stay at the forefront of technology and trends.
        </Text>
        <Text fontSize="xl">My goal is to weave these diverse experiences into the fabric of my work, developing user-friendly applications and collaborating on cutting-edge projects to make a significant impact in the tech world.</Text>
      </Box>

      <Divider my={8} />

      {/* Qualifications Section */}
      <Box id="qualifications" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Qualifications
        </Heading>
        <Heading as="h3" size="lg" mb={2}>
          Education
        </Heading>
        <Text fontSize="xl" mb={2}>
          University of Minnesota, Twin Cities
        </Text>
        <Text fontSize="lg" mb={4}>
          Sept. 2020 - Dec. 2023
        </Text>
        <Text fontSize="lg" mb={2}>
          Bachelor of Science, Computer Science
        </Text>
        <Text fontSize="lg" mb={4}>
          Relevant Coursework:
        </Text>
        <UnorderedList mb={4}>
          <ListItem>Advanced Programming Principles</ListItem>
          <ListItem>Algorithms and Data Structures</ListItem>
          <ListItem>Discrete Structures of Computer Science</ListItem>
          <ListItem>Introduction to Artificial Intelligence</ListItem>
          <ListItem>Intro to Distributed Systems</ListItem>
          <ListItem>Software Engineering I</ListItem>
        </UnorderedList>
        <Text fontSize="lg" mb={4}>
          Activities: CodeMetas, Muslim Student Association, Arab Student Union
        </Text>

        <Heading as="h3" size="lg" mb={2}>
          Experience

        </Heading>
        <Text fontSize="xl" mb={2}>
          Software Developer
        </Text>
        <Text fontSize="lg" mb={2}>
          Minnesota IT Services, Saint Paul, MN
        </Text>
        <Text fontSize="lg" mb={4}>
          May. 2023 – Present
        </Text>
        <UnorderedList mb={4}>
          <ListItem>Analyzed, designed, and developed technical solutions in collaboration with project managers and IT resources, using Azure Dev Ops and Visual Studio for software management and work item management.</ListItem>
          <ListItem>Contributed to the full Software Development Life Cycle (SDLC) of IT applications, emphasizing service-oriented design and development with .NET Core, C\#, and ASP.NET MVC.</ListItem>
          <ListItem>Led maintenance of IT applications, demonstrating leadership and enhancing functionality and availability under the sprint team leader’s guidance.</ListItem>
          <ListItem>Designed and implemented automated testing within CI/CD pipelines using Visual Studio, improving code quality and deployment reliability.</ListItem>
        </UnorderedList>

      


          
        <Text fontSize="xl" mb={2}>
          Software Developer Intern
        </Text>
        <Text fontSize="lg" mb={2}>
          Cloudscape, Saint Paul, MN
        </Text>
        <Text fontSize="lg" mb={4}>
          May. 2023 – Aug. 2023
        </Text>
        <UnorderedList mb={4}>
          <ListItem>Implemented responsive UIs for web applications, enhancing interactivity and user experience.</ListItem>
          <ListItem>Boosted data processing speed by 25% through performance optimization techniques.</ListItem>
          <ListItem>Resolved 20+ software issues during QA, ensuring high-quality solution delivery.</ListItem>
          <ListItem>Collaborated with teams to turn designs into functional web apps, improving team integration.</ListItem>
          <ListItem>Applied profiling tools to improve web app performance across devices and browsers.</ListItem>
        </UnorderedList>

        <Text fontSize="xl" mb={2}>
          Project Manager
        </Text>
        <Text fontSize="lg" mb={2}>
          CodeMetas, Minneapolis, MN
        </Text>
        <Text fontSize="lg" mb={4}>
          Sep. 2022 – Present
        </Text>
        <UnorderedList mb={4}>
          <ListItem>Managed a dynamic 6-member team through Jira utilizing Agile development methodologies, optimizing workflow and task prioritization, which contributed to a 20% increase in project execution speed.</ListItem>
          <ListItem>Leveraged SQL for efficient database management, implementing optimizations and queries that improved data retrieval times by 25%, enhancing overall system performance and user satisfaction.</ListItem>
          <ListItem>Conducted weekly stand-ups and strategic sessions, enhancing team unity and communication efficiency, achieving a 15% improvement in milestone delivery.</ListItem>
        </UnorderedList>
      </Box>

      <Divider my={8} />

      {/* Projects Section with Carousel */}
      <Box id="projects" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Projects
        </Heading>
        <Flex direction="column" align="center">
        
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} mb={4}
     boxShadow="lg" transition="transform 0.3s, box-shadow 0.3s"
     _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}>
            <Heading as="h3" size="lg" mb={2}>
              {projects[currentProjectIndex].title}
            </Heading>
            {Array.isArray(projects[currentProjectIndex].description) ? (
              <UnorderedList>
                {projects[currentProjectIndex].description.map((desc, idx) => (
                  <ListItem key={idx}>{desc}</ListItem>
                ))}
              </UnorderedList>
            ) : (
              <Text>{projects[currentProjectIndex].description}</Text>
            )}
          </Box>
          <Flex gap="4">
            <Button onClick={prevProject} variant="outline" colorScheme="teal" _hover={{ bg: "teal.600", borderColor: "teal.600" }}>
              Previous
            </Button>
            <Button onClick={nextProject} variant="outline" colorScheme="teal" _hover={{ bg: "teal.600", borderColor: "teal.600" }}>
              Next
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Divider my={8} />

      {/* Contact Section */}
      <Box id="contact" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Let's Connect!
        </Heading>
        <Text fontSize="xl" mb={4}>
          Feel free to reach out to discuss any opportunities or just to say hi!
        </Text>
        <Button as={Link} href="mailto:adam.dawada@gmail.com" leftIcon={<FaEnvelope />} colorScheme="blue" mb={4}>
          Send Email
        </Button>
        <Text fontSize="xl" mb={4}>
          Or find me on...
        </Text>
        <Flex>
          <IconButton as={Link} href="https://www.linkedin.com/in/adamshahin" aria-label="LinkedIn" icon={<FaLinkedin />} colorScheme="blue" mr={2} />
          <IconButton as={Link} href="https://github.com/shahi068" aria-label="GitHub" icon={<FaGithub />} colorScheme="gray" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
