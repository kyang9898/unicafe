import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //1.6
//   return (
//     <div>
//       <Title name={"give feedback"} />
//       <Button name={"good"} func={setGood} value={good} />
//       <Button name={"neutral"} func={setNeutral} value={neutral} />
//       <Button name={"bad"} func={setBad} value={bad} />

//       <Title name={"statistics"} />
//       <Counter name={"good"} number={good} />
//       <Counter name={"neutral"} number={neutral} />
//       <Counter name={"bad"} number={bad} />
//     </div>
//   );
// };

// const Title = (props) => {
//   return <h2> {props.name} </h2>;
// };
// const Button = (props) => {
//   return (
//     <button onClick={setToValue(props.func, props.value + 1)}>
//       {props.name}
//     </button>
//   );
// };
// const Counter = (props) => {
//   return (
//     <div>
//       {props.name} {props.number}
//     </div>
//   );
// };
// const setToValue = (func, newValue) => () => {
//   func(newValue);
// };

//1.7

export default App;
