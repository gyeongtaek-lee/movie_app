// useState에 처음에 설정할 수 있는 초기값과 모든 탭에 대한 content 변수를 인자로 받는다.
export const useTabs = (initialTab, alltabs) => {

    /* if (!alltabs || !Array.isArray(alltabs)) {
         return;
     }*/

    // state 값을 변경. 처음 인자는 현재 state의 값이고 두번째 인자는 state의 값을 변경하는 함수이다.
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    // 첫번째로, 모든 탭에서 현재 선택된 인덱스의 item(탭)을 넘겨주고
    // 두번째로, state의 값을 변경하는 함수를 넘겨준다.
    return {
        currentItem: alltabs[currentIndex],
        changeItem: setCurrentIndex
    }

};