import {useEffect, useState} from "react";

export const useConfirm = (message, onConfirm, onCancel) => {
    if (!onConfirm && typeof onConfirm !== "function") {
        return;
    }
    else if (!onCancel && typeof onCancel !== "function") {
        return;
    }

    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        }
        else {
            onCancel();
        }
    }

    return confirmAction;

}