import React, { useState } from "react";
import { Heading, Image, Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import java from '../asset/images/java.png'
import html from '../asset/images/html.png'
import css from '../asset/images/css.png'
import bootstarp from '../asset/images/bootstrap.png'
import spring from '../asset/images/spring.png'
import circleCI from '../asset/images/circleCI.png'
import js from '../asset/images/js.png'
import react from '../asset/images/react.png'
import node from '../asset/images/nodejs.png'
import sql from '../asset/images/mysql.png'
import mongo from '../asset/images/mongo.png'
import Snyk from '../asset/images/snyk.png'
import redux from '../asset/images/redux.png'
import docker from '../asset/images/docker.png'
import git from '../asset/images/git.png'
import postman from '../asset/images/postman.png';



export default function Skills() {

 const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });


    const [skills] = useState([
        { name: "JavaScript", path: js },
        { name: "Java", path: java },
        { name: "spring", path: spring },
        { name: "React", path: react },
        { name: "Redux", path: redux },
        { name: "docker", path: docker },
        { name: "Node Js", path: node },
        { name: "Mongo DB", path: mongo },
        { name: "My SQL", path: sql },
        { name: "HTML", path: html },
        { name: "CSS", path: css },
        { name: "Bootstrap", path: bootstarp },
        { name: "Git", path: git },
        { name: "circleCI", path: circleCI },
        { name: "Postman", path: postman },
        { name: "Snyk", path: Snyk },

    ])
    return (
        <section className="skill">
             <br></br> <br></br> <br></br>
            <Heading className="heading" p={0} mb={4}>Skills</Heading>
            <Flex flexDirection={flexDirection} className="skill-box" gap={4} mb={5}>
                
                <Box width={useBreakpointValue({ base: '100%', md: '100%' })}>
                    <Flex flexDirection="row" flexWrap="wrap" justifyContent={'center'} gap={10}>
                        {skills && skills.map((data, index) => (
                            <Box key={index} borderRadius="10px" boxSize="85px" display="flex" flexDirection="column" alignItems="center">
                                <Image
                                    src={data.path}
                                    alt={data.name}
                                    m={1}
                                    _hover={{ transform: 'scale(1.1)' }}
                                />
                                <Text>{data.name}</Text>
                            </Box>
                        ))}
                    </Flex>

                </Box>
            </Flex>

        </section>
    )
}