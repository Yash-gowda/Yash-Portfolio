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
                        <Text>March, 2024 - Present</Text>
                        <Text>Freelancer</Text>
                    </Flex>
                </Flex>
                <Divider orientation='vertical' h='320px' m={4} />
                <Flex className="exp_container" flexDirection={'column'} flex="3">
                    <Flex className="role" mb={2}>
                        <Heading >Front-End Developer </Heading>
                    </Flex>
                    <Flex className="org_name" mb={2}>
                        ReKnowledge.inc, 
                        Kitchener, Ontario
                    </Flex>
                    <Flex>
                        <Text className="defaultFont">At ReKnowledge Inc., I played a key role as a Front-End Developer, specializing 
                            in designing and implementing dynamic web applications using React.js. 
                            I developed responsive and mobile-friendly user interfaces, optimizing performance with techniques 
                            like lazy loading and code splitting. My responsibilities included creating and integrating APIs, 
                            collaborating with Back-End Developers to ensure seamless functionality, and enhancing data fetching 
                            using GraphQL. I managed CI/CD and testing pipelines on Azure DevOps and utilized DevOps tools such as 
                            CircleCI, Confluence, and GitHub to streamline development workflows. My role also involved diagnosing 
                            and resolving quality issues, maintaining test suites and addressing security vulnerabilities in web 
                            applications using tools like Snyk. I conducted code reviews, provided hotfixes for production issues 
                            and mentored junior developers to ensure code quality and adherence to best practices. 
                            Collaborating within Agile teams, I focused on translating design concepts into functional interfaces, 
                            conducting regular security assessments, and staying updated with the latest web development trends to 
                            continuously improve application capabilities.</Text>
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
                        At Atos Syntel, I have worked as a Java Developer with comprehensive experience in designing, developing and maintaining 
                        robust applications using Java, Spring, Spring Boot, Servlets, JSP, and IBM WebSphere9. I have a strong background in Front-End 
                        technologies such as HTML, CSS, and JavaScript, as well as in database management with DB2 and Oracle, where I excel in writing 
                        efficient SQL queries and managing stored procedures. I have implemented security features such as OTP, RSA, and two-step 
                        authentication to enhance application security and compliance.
                        I have successfully worked on projects for Manulife Financial, involving complex fund management processes and 
                        online withdrawal systems, utilizing technologies like Java, Spring Boot, React JS, Docker, and Kubernetes. 
                        My role included writing test cases using JUnit, setting up CI/CD pipelines, and using version control tools 
                        like SVN and Git. I have hands-on experience with build tools such as Ant and JRebel and performed thorough code 
                        reviews and debugging to ensure high-quality deliverables. I have worked in both Waterfall and Agile environments,
                        efficiently managing all project stages from development to production, UAT, and release flow. 
                        My expertise includes conducting performance testing, regression, and QA, along with mentoring junior developers 
                        and ensuring adherence to best practices and industry standards.</Text>
                    </Flex>
                </Flex>
            </Flex>
            
            
        </section>
    )
} 