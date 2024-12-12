import React from "react";
import { Text, Heading, Flex, Link, Image } from '@chakra-ui/react';
import github from '../asset/images/github.png'
import linkedin from '../asset/images/linkedin.png'
export default function Summary() {

    return (
        <section>
            <Heading p={0} mb={4} className="name-card">Yashwanth Gowda B C</Heading>

            <Text fontSize='lg' className="defaultFont">
            I am a passionate Full Stack Developer with a proven track record of building robust, scalable, and efficient solutions for diverse industries. With expertise in modern technologies like Java, Node.js, React, Spring Boot and Kafka, I specialize in creating real-time systems, intuitive dashboards, and scalable APIs that drive business value.                <br></br>
            My work focuses on optimizing application performance, enhancing data processing, and implementing secure, reliable solutions tailored to meet industry needs. I thrive on solving complex challenges, from developing predictive analytics and streamlining workflows to ensuring seamless data integration and high system uptime.  <br></br>
            With a commitment to delivering excellence, I prioritize user satisfaction, operational efficiency, and team collaboration. Whether it's optimizing databases, implementing CI/CD pipelines, or enhancing application security, I bring a strategic, results-driven approach to every project I undertake. 
            <br></br>Let’s create impactful, innovative solutions together!         
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