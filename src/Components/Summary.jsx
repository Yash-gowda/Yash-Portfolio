import React from "react";
import { Text, Heading, Flex, Link, Image } from '@chakra-ui/react';
import github from '../asset/images/github.png'
import linkedin from '../asset/images/linkedin.png'
export default function Summary() {

    return (
        <section>
            <Heading p={0} mb={4} className="name-card">Yashwanth Gowda B C</Heading>

            <Text fontSize='lg' className="defaultFont">
                Hi, I'm a skilled Software Developer with 6+ years of experience in retirement and insurance vertical and expertise in Front-End development as a freelancer. Proficient in Java/J2EE, Spring Boot, React.js and Microservices architecture, with strong capabilities in the full Software Development Lifecycle (SDLC), Agile methodologies, and database management. Adept at designing and developing scalable Backend Systems, integrating APIs, and creating responsive Front-End components. Recognized for outstanding performance in delivering quality software solutions and enhancing application security
                <br></br>
                My passion for the entire Front-End ecosystem drives me to seek out collaboration opportunities on 
                exciting projects with like-minded individuals. 
                Let's join forces and create something truly exceptional together!
            </Text>
            <Flex justifyContent={'center'}>
                <Link href="https://www.linkedin.com/in/yashwanth-gowda-b-c" isExternal>
                    <Image
                        src={linkedin}
                        alt="LinkedIn"
                        boxSize="75px"
                        m={1}
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                </Link>
                <Link href="https://github.com/yash-gowda" isExternal>
                    <Image
                        src={github}
                        alt="GitHub"
                        boxSize="75px"
                        m={1}
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                </Link>
            </Flex>
        </section>
    )
}