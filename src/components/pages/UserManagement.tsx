import { memo, VFC, useEffect, useCallback } from "react";

import {
    Wrap,
    WrapItem, 
    Spinner, 
    Center, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    useDisclosure, 
    ModalHeader, 
    ModalCloseButton,
    ModalBody, 
    Stack,
    FormControl, 
    FormLabel, 
    Input
    
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers"
import { useSelectUser } from "../../hooks/useSelectUser"
import { UserDetailModal } from "../organisms/user/UserDetailModal";
export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, loading, users } = useAllUsers();
    const { onSelectUser, selectedUser } = useSelectUser();
    
    
    useEffect(() => getUsers(), [])
    
    const onClickUser = useCallback((id: number) => {
        console.log(id);
        onSelectUser({ id, users, onOpen })
    }, [users]);
    
    return (
        <>
            {loading ? (
                <Center h="100vh">    
                    <Spinner />
                </Center>
            ) : (
                <Wrap 
                    p={{
                        base: 4,
                        md: 10
                    }}
                >
                    {users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard 
                                id={user.id}
                                imageUrl="https://source.unsplash.com/random" 
                                userName={user.username}
                                fullName={user.name}
                                onClick={onClickUser}
                                />
                        </WrapItem>
                    ))}
                </Wrap>
            )};
            <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose}  />
        </>
        );
});

export {}