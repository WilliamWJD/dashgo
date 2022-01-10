import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box marginRight="4" textAlign="right">
                <Text>William dias</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    william@email.com.br
                </Text>
            </Box>
            <Avatar
                size="md"
                name="William Dias"
            // src="https://github.com/williamwjd.png"
            />
        </Flex>
    )
}