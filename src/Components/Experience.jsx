import React from "react";
import { Heading, SubHeading, Text, Image, Flex, Divider } from '@chakra-ui/react'
import reKnowledgeInc from '../asset/images/ReKnowledgeInc_logo.png';
import atos_syntel_logo from '../asset/images/atos_syntel_logo.jpg';

export default function Expereince() {
    return (
        <section className="experience">
             <br></br> <br></br> <br></br>
            <Heading className="heading" p={0} mb={4}>Professional Experience   </Heading>
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={reKnowledgeInc}
                            alt='reKnowledgeInc logo'
                            mb={4}
                            
                        />
                        <Text>June, 2023 - Present</Text>
                        <Text>Freelancer</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='320px' m={4} />
                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >Full Stack Developer </Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        ReKnowledge.inc, 
                        Kitchener, Ontario
                    </Flex>
                    <Flex>
                        <Text className="defaultFont">At ReKnowledge Inc., I drive impactful results as a Full Stack Developer by optimizing applications with Node.js and React, improving user satisfaction by 15%. I reduced API response times by 20% with scalable RESTful APIs and enhanced backend efficiency using Redis caching. My work includes managing PostgreSQL databases, integrating third-party APIs, and streamlining deployment by 30% through CI/CD pipelines. With a focus on security and code quality, I ensured 100% compliance with standards and fostered collaboration within cross-functional teams using Confluence and GitHub.</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/* Atos Syntel */}
            <Flex flexDirection="row" alignItems="center" p={0} mb={5}>
                <Flex className="duration" justifyContent={'center'} flex="1">
                    <Flex flexDirection={"column"} justifyContent={'center'}>
                        <Image
                            borderRadius={'10px'}
                            boxSize='100px'
                            src={atos_syntel_logo}
                            alt='Atos Syntel Logo'
                            mb={4}
                        />
                        <Text>April, 2017 - April, 2023</Text>
                        <Text>Full Time</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='280px' m={4} />
                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >Software Developer</Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        Atos Syntel,
                        Chennai, India
                    </Flex>
                    <Flex className="exp_content">
                        <Text className="defaultFont">
                        At Atos Syntel, as a Software Developer I have developed real-time monitoring systems to deliver actionable insights for critical applications, leveraging tools like Kafka, Prometheus, and Grafana for efficient data streaming and performance optimization. I designed scalable APIs using Spring Boot and Node.js, enabling seamless data integration, and built intuitive React dashboards for decision-making across industries. By implementing predictive analytics, optimizing databases like TimescaleDB and MongoDB, and resolving system bottlenecks, I enhanced operational efficiency and reliability. Additionally, I delivered scalable solutions with advanced security measures and process automation, ensuring cost-effective performance and improved user satisfaction.






</Text>
                    </Flex>
                </Flex>
            </Flex>
            
            
        </section>
    )
} 