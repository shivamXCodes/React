import { Demo } from "./App";

export default function Example() {
  return <p>Hello</p>;
}

function Test1() {
  return <p>Test One</p>;
}
function Test2() {
  return true;
}

let a = 100;
export { Test1 as T1, a as value, Test2 as T2 };
