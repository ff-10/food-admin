import { createContext, useContext, useState } from "react";
import ConfirmationDialog from "../shared/components/ConfirmModal";

const ConfirmationDialogContext = createContext({});

export default function ConfirmationDialogProvider({ children }) {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogConfig, setDialogConfig] = useState({});

    const openDialog = ({ actionCallback }) => {
        setDialogOpen(true);
        setDialogConfig({ actionCallback });
    };

    const resetDialog = () => {
        setDialogOpen(false);
        setDialogConfig({});
    };

    const onConfirm = () => {
        resetDialog();
        dialogConfig.actionCallback(true);
    };

    const onDismiss = () => {
        resetDialog();
        dialogConfig.actionCallback(false);
    };

    return (
        <ConfirmationDialogContext.Provider value={{ openDialog }}>
            <ConfirmationDialog
                open={dialogOpen}
                onConfirm={onConfirm}
                onDismiss={onDismiss}
            />
            {children}
        </ConfirmationDialogContext.Provider>
    );
};

export function useConfirmationDialog() {
    const { openDialog } = useContext(ConfirmationDialogContext);

    const getConfirmation = () =>
        new Promise((res) => {
            openDialog({ actionCallback: res });
        });

    return { getConfirmation };
};
