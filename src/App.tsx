import "./App.css";
import { Facts } from "./components/Facts";
import { Input } from "./components/Input";
import { PhotoInput } from "./components/PhotoInput";
import { Photos } from "./components/Photos";

function App() {
  return (
    <div>
      <h1>Task 1</h1>
      <Input />
      <Facts />
      <h1>Task 2</h1>
      <PhotoInput />
      <Photos />
    </div>
  );
}

export default App;
