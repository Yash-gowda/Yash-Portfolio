import React, { useState } from "react";
import { Heading, Flex, Image, Tag, Box, HStack, Text, useBreakpointValue, Link } from '@chakra-ui/react'
import todoImage from '../asset/images/ToDo-app.png'
import emsImage from '../asset/images/EMS_Screenshot.png'
import ccImage from '../asset/images/career-compass.png'
export default function Projects() {
    const [todoStack] = useState(['React', 'Redux', 'Material UI'])
    const [emsStack] = useState(['React', 'GraphQL', 'Node JS', 'Mongo DB', 'Chakra UI', 'Webpack'])
    const [ccStack] = useState(['React', 'Node JS', 'Mongo DB', 'MUI', 'Jest'])
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const flexDirectionReverse = useBreakpointValue({ base: 'column-reverse', md: 'row' });

    return (
        <section className="project-section">
             <br></br> <br></br> <br></br>
            <Heading className="heading" p={0} mb={10}>Projects</Heading>
            <Flex gap={20} flexDirection={"column"} mb={5}>
                <Flex gap={10} flexDirection={flexDirection}>
                    <Box width={useBreakpointValue({ base: '100%', md: '40%' })} mb={4}>
                        <Image
                            className="project-image"
                            src={todoImage}
                            alt='Todo App'
                            m={1}
                            _hover={{ transform: 'scale(1.1)' }}
                            borderRadius={'10px'}
                            mb={5}
                        />
                        <Flex flexDirection={'row'} justifyContent={'space-around'} alignContent={'center'}>
                            <Link href='https://github.com/Yash-gowda/toDo-React.git' isExternal color={'blueviolet'} className="text-link">
                                Code
                            </Link>
                            <Link href='https://yash-gowda.github.io/toDo-React/' isExternal color={'teal'} className="text-link">
                                Live
                            </Link>
                        </Flex>
                    </Box>
                    <Box width={useBreakpointValue({ base: '100%', md: '60%' })}>
                        <Text fontSize='lg' className="defaultFont" mb={4}>
                            The ToDo App is a user-friendly task management tool designed to efficiently organize daily tasks.
                            It supports full CRUD operations, enabling task addition, editing, deletion, and filtering.
                            These functionalities are integrated through a clean and responsive interface, ensuring a seamless
                            user experience. Redux is employed for state management, enhancing the app's consistency and
                            reliability, while Chakra UI ensures the interface is accessible and visually appealing.
                            This application serves as a prime example of leveraging modern web technologies to create scalable
                            and interactive applications.
                        </Text>
                        <HStack spacing={2} width={'100%'} wrap={'wrap'} justifyContent={'center'}>
                            {todoStack && todoStack.map((data) => (
                                <Tag key={data} borderRadius={'1em'} variant='solid'
                                    height={'1.75rem'}
                                    minWidth={'5rem'}
                                    colorScheme='purple'
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    alignContent={'center'}>
                                    {data}
                                </Tag>
                            ))}
                        </HStack>
                    </Box>
                </Flex>
                <Flex gap={10} flexDirection={flexDirectionReverse}>
                    <Box width={useBreakpointValue({ base: '100%', md: '60%' })}>
                        <Text fontSize='lg' className="defaultFont" mb={4}>
                            The Employment Management System is a comprehensive web application designed for robust management
                            of employee data. It supports complete CRUD (Create, Read, Update, Delete) operations, making it
                            highly effective for handling complex employee data. The integration of GraphQL enhances data
                            interaction capabilities, improving overall efficiency and responsiveness. This system demonstrates
                            the successful use of modern web technologies to streamline and optimize employment data management
                            processes, making it a vital tool for organizations.
                        </Text>
                        <HStack spacing={2} width={'100%'} wrap={'wrap'} justifyContent={'center'}>
                            {emsStack && emsStack.map((data) => (
                                <Tag key={data} borderRadius={'1em'} variant='solid'
                                    height={'1.75rem'}
                                    minWidth={'5rem'}
                                    colorScheme='purple'
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    alignContent={'center'}>
                                    {data}
                                </Tag>
                            ))}
                        </HStack>
                    </Box>
                    <Box width={useBreakpointValue({ base: '100%', md: '40%' })} mb={4}>
                        <Image
                            className="project-image"
                            src={emsImage}
                            alt='EMS App'
                            m={1}
                            _hover={{ transform: 'scale(1.1)' }}
                            borderRadius={'10px'}
                            mb={5}

                        />
                        <Flex flexDirection={'row'} justifyContent={'space-around'} alignContent={'center'}>
                            <Link href='https://github.com/Yash-gowda/EMS.git' isExternal color={'blueviolet'} className="text-link">
                                Code
                            </Link>
                           
                        </Flex>
                    </Box>
                </Flex>

                <Flex gap={10} flexDirection={flexDirection}>
                    <Box width={useBreakpointValue({ base: '100%', md: '40%' })} mb={4}>
                        <Image
                            className="project-image"
                            src={ccImage}
                            alt='Jobsphere'
                            m={1}
                            _hover={{ transform: 'scale(1.1)' }}
                            borderRadius={'10px'}
                            mb={5}
                        />
                        <Flex flexDirection={'row'} justifyContent={'space-around'} alignContent={'center'}>
                            <Link href='https://github.com/Yash-gowda/career-compass.git' isExternal color={'blueviolet'} className="text-link">
                                Code
                            </Link>
                        </Flex>
                    </Box>
                    <Box width={useBreakpointValue({ base: '100%', md: '60%' })}>
                        <Text fontSize='lg' className="defaultFont" mb={4}>
                            Career Compass is a web application to connect job seekers with employers efficiently. 
                            Built using the MERN stack (React, Node.js, Express, MongoDB), the platform enables candidates 
                            to create profiles, search for jobs, apply for positions, and manage applications. 
                            Employers can register, post jobs and manage applications. The site is managed by an admin 
                            to ensure smooth operations. Future enhancements include AI-driven job recommendations and 
                            an AI-powered resume builder
                        </Text>
                        <HStack spacing={2} width={'100%'} wrap={'wrap'} justifyContent={'center'}>
                            {ccStack && ccStack.map((data) => (
                                <Tag key={data} borderRadius={'1em'} variant='solid'
                                    height={'1.75rem'}
                                    minWidth={'5rem'}
                                    colorScheme='purple'
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    alignContent={'center'}>
                                    {data}
                                </Tag>
                            ))}
                        </HStack>
                    </Box>
                </Flex>
            </Flex>


        </section>
    )
}