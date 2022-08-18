import { memo,  VFC, useState, useEffect, ChangeEvent } from "react";
import { ModalFooter } from "@chakra-ui/react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton"

import { 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Stack,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";

import { User } from "../../../types/api/user"

type Props = {
    user: User | null;
    isOpen: boolean;
    isAdmin?: boolean;
    onClose: () => void;
};


export const UserDetailModal: VFC<Props> = memo((props) => {
    const { user, isOpen, isAdmin = false, onClose } = props;
    const onClickUpdate = () => alert();
    console.log(isAdmin)
    
    const [ username, setUsername ] = useState("");
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    
    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    
    useEffect(() => {
        setUsername(user?.username ?? '');
        setName(user?.name ?? '');
        setEmail(user?.email ?? '');
        setPhone(user?.phone ?? '');
    }, [user])
    
    return (
    <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        autoFocus={false} 
        motionPreset="slideInBottom"
    >
        <ModalOverlay pb={6}>
            <ModalContent pb={2}>
                <ModalHeader>ユーザ情報</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>MAIL</FormLabel>
                            <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
                        </FormControl>
                    </Stack>
                </ModalBody>
                { isAdmin && (
                    <ModalFooter>
                        <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
                    </ModalFooter>
                ) }
            </ModalContent>
        </ModalOverlay>
    </Modal>
    );
});

export {}