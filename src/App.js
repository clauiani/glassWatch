import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";
import styled from "styled-components";

function App() {
  return (
    <Div className="App">
      <Clock />
    </Div>
  );
}
const Div = styled.div`
  background: url("https://source.unsplash.com/PuaIPFH3FHg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

export default App;
