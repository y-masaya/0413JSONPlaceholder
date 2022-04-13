import axios from "axios";
import "./styles.css";

export default function App() {
  const onclickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onclickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={onclickUsers}>users</button>
      <button onClick={onclickUser1}>id=1のuser</button>
    </div>
  );
}
