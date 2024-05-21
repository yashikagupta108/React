import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [mob, setMob] = useState("");

  mobCheck = () => {
    this.setState;
  };

  return (
    <>
      <form>
        <div class="pb-2">
          <label class="label">First Name :</label>
          <input type="text"></input>
        </div>
        <div class="pb-2">
          <label class="label">Last Name :</label>
          <input type="text"></input>
        </div>
        <div class="pb-2">
          <label class="label" value={mob} onChange={mobCheck}>
            Mobile Number :
          </label>
          <input type="tel"></input>
        </div>
        <div class="pb-2">
          <label class="label">Email Id:</label>
          <input type="text"></input>
        </div>
      </form>
      <button class="btn btn-primary">Submit</button>
    </>
  );
}

export default App;
