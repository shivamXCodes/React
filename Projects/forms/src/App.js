// import E from "./example";
// import { T1, value, T2 } from "./example";

import "./styles.css";
import Form from "./Form";
import { obj } from "./Form";
export default function App() {
  // let { name, age } = obj;
  // console.log(name);
  // console.log(age);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <p>{obj.name}</p> */}
      <Form />
    </div>
  );
}

// function Demo() {
//   return <p>demo</p>; //functional Component
// }
// export { Demo };
