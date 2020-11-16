export const useInput = (initialValue, validator) => {

    // state의 값을 변경. state => setState => render
    const [value, setValue] = useState(initialValue);

    // input 태그에서 사용할 onChange 함수
    const onChange = event => {
        const {
            target: {value}
        } = event;

        let willUpdate = true;

        // 인자로 들어온 값이 함수인지 타입 체크
        if (typeof validator === "function"){
            // 유효성 함수 호출
            willUpdate = validator(value);
        }

        // 유효성을 체크 (유효성을 통과하지 못하면 value는 변경되지 않음.
        if (willUpdate) {
            // useState를 통해 value의 값을 update.
            setValue(value);
        }
    };

    // 값인 value와 함수인 onChange를 리턴
    // useState 와 비슷하게 하나는 value, 두번째는 이를 변경하는 함수를 리턴함.
    // useInput 역시 리턴을 하나는 값, 두번째는 함수를 리턴해.
    return { value, onChange };
};