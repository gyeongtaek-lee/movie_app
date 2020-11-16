import {useEffect, useState} from "react";

export const usePreventLeave = () => {

    const listener = (event) => {
        // 이벤트 동작을 중단시킨다.
        event.preventDefault();
        // 크롬은 멍청해서 이걸 꼭 적어줘야 돼!!
        event.returnValue = "";
    }

    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);

    return {enablePrevent, disablePrevent};
}