import { memo, VFC } from "react";

import { Button, Drawer, DrawerOverlay, DrawerBody } from "@chakra-ui/react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose, isOpen } = props;
    
    return (
        <Drawer
            placement='left'
            size="xs"
            onClose={onClose}
            isOpen={isOpen}
        >
            <DrawerOverlay>
                <DrawerBody p={0} bg="gray.100">
                    <Button w="100%">TOP</Button>
                    <Button w="100%">ユーザ一覧</Button>
                    <Button w="100%">設定</Button>
                </DrawerBody>
            </DrawerOverlay>
        </Drawer>
        );
});

export {}