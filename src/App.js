import ExampleClass from "./ExampleClass";
import "./styles.css";

export default function App() {
  const stuff = [{ me: "Rob", age: "40", sex: "male" }];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ExampleClass blah={stuff} />
    </div>
  );
}
