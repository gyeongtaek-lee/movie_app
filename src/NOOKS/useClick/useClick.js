import {useEffect, useRef, useState} from "react";

export const useClick = (onClick) => {

    if (typeof onClick !== "function"){
        return;
    }

    const element = useRef();

    useEffect(() => {
        // useEffect가 mount(componentDidMount) 되었을 때 이걸 call 한다
        // 이 부분은 title이 ref 된 h1 tag가 매번 update 될때마다 eventListner가 추가될거고
        // 이건 내가 원하는게 아니야.
        // 그래서 나는 useEffect가 실행되는 componentDidmount, componentDidUpdate 중에서
        // component가 mount 될때 한번만 eventListner를 추가하고 싶어서 두번째 인자에 [] 를 넣을거야
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }

        // useEffect가 componentWillUnmout 때 발생.
        // 그리고 나서 여기 있는 function을 return 할건데
        // 이건 componentWillUnMount 때 호출 될거야.
        // 즉, component가 unmount 될때 한번만!
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        }
    }, []);

    return element;
}