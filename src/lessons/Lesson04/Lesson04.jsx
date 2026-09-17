import { useState } from "react";
import Counter from "../../components/Counter/Counter";
// import CounterWithState from "../../components/CounterWithState/CounterWithState";
import "./styles.css";
function Lesson04() {
  // Поднятие состояния - подход при котором значения и функции
  // по изменению прописываются в родительском компоненте и передаются в
  // дочерний через пропсы
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);
  const minusCount1 = () => {
    setCount1((prev) => prev - 1);
  };
  const plusCount1 = () => {
    setCount1((prev) => prev + 1);
  };
  const minusCount2 = () => {
    setCount2((prev) => prev - 5);
  };
  const plusCount2 = () => {
    setCount2((prev) => prev + 5);
  };
  return (
    <div className="lesson04-wrapper">
      <Counter
        count={count1}
        onMinusClick={minusCount1}
        onPlusClick={plusCount1}
      />
      <Counter
        count={count2}
        onMinusClick={minusCount2}
        onPlusClick={plusCount2}
      />
      {/* <CounterWithState />
      <CounterWithState /> */}
    </div>
  );
}
export default Lesson04;