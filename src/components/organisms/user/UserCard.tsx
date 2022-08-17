import { memo,  VFC } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
    imageUrl: string;
    userName: string;
    fullName: string;
};

export const UserCard: VFC<Props> = memo((props) => {
    const { imageUrl, userName, fullName } = props;
    return (
            <Box 
                w="260px"
                h="260px"
                bg="white"                    
                borderRadius="10px"
                shadow="md"
                p={4}
                _hover={{
                    cursor: "ponter",
                    opacity: 0.8                    
                }}
            >
                <Stack textAlign="center">
                    <Image 
                        src={imageUrl}                            
                        boxSize="160px"
                        borderRadius="full"
                        alt={userName}
                        m="auto"
                    />
                    <Text
                        fontSize="lg"                            
                        fontWeight="bold"
                    >
                        {userName}
                    </Text>
                    <Text
                        fontSize="sm"
                        color="gray"                        
                    >
                        {fullName}
                    </Text>
                </Stack>
            </Box>
        );
});

export {}