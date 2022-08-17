import { memo, VFC } from "react";

import { Button, Drawer, DrawerOverlay, DrawerBody } from "@chakra-ui/react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickUserManagement: () => void;
    onClickSetting: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting } = props;
    
    return (
        <Drawer
            placement='left'
            size="xs"
            onClose={onClose}
            isOpen={isOpen}
        >
            <DrawerOverlay>
                <DrawerBody p={0} bg="gray.100">
                    <Button onClick={onClickHome} w="100%">TOP</Button>
                    <Button onClick={onClickUserManagement} w="100%">ユーザ一覧</Button>
                    <Button onClick={onClickSetting}  w="100%">設定</Button>
                </DrawerBody>
            </DrawerOverlay>
        </Drawer>
        );
});

export {}