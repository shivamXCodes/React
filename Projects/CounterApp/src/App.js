// import "./styles.css";
import Counter from "./Counter";

export default function App() {
  let a = 10;

  return (
    <div>
      <Counter diff={1} />
      <Counter diff={2} />
      <Counter diff={10} />
    </div>
  );
}