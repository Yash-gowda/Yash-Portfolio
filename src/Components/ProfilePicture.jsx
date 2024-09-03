import React from "react";
import { Image, Flex } from '@chakra-ui/react'
import image2 from '../asset/images/profile-pic.png';

export default function ProfilePicture() {

    return (
        <section className="profile_image">
            <Flex p={0} mb={8}>
                <Image
                    borderRadius='full'
                    boxSize='350px'
                    src={image2}
                    alt='Profile Picture'

                />
            </Flex>
        </section>
    )
}