import { memo, VFC, useEffect, useCallback } from "react";

import {
    useDisclosure,
    Wrap,
    WrapItem, 
    Spinner, 
    Center, 
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers"
import { useSelectUser } from "../../hooks/useSelectUser"
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, loading, users } = useAllUsers();
    const { onSelectUser, selectedUser } = useSelectUser();
    const { loginUser } = useLoginUser();
    console.log(loginUser);
    
    
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
            <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose}  />
        </>
        );
});

export {}