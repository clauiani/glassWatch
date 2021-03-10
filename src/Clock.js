import { useState, useEffect } from "react";
import styled from "styled-components";
import Tilt from "./Tilt";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const updateTime = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  const formatTime = (t) => {
    return t.split(/[\s,:]/); //regex
  };
  const options = {
    scale: 1.05,
    speed: 1000,
    max: 10,
    glare: true,
    "max-glare": 0.1,
  };
  return (
    <>
      <Container>
        <Tilt options={options} className="blur">
          <ClockFace>
            <Orasimin>
              <div>{formatTime(time.toLocaleTimeString())[0]}</div>
              <div>{formatTime(time.toLocaleTimeString())[1]}</div>
            </Orasimin>
            <Secunde>
              <div>{formatTime(time.toLocaleTimeString())[2]}</div>
            </Secunde>
            <AMPM>
              <div>{formatTime(time.toLocaleTimeString())[3]}</div>
            </AMPM>
            <DateContainer>{time.toDateString()}</DateContainer>
          </ClockFace>
        </Tilt>
      </Container>
    </>
  );
};
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ddd;
`;
const ClockFace = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgba(28, 25, 25, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  text-align: right;
  min-width: 500px;
  justify-content: center;
  position: relative;
`;
const Orasimin = styled.div`
  align-self: center;
  padding: 1rem;
  font-size: 4rem;
  font-family: "Bangers";
`;

const Secunde = styled.div`
  font-size: 10rem;
  font-family: "Bungee Shade", cursive;
`;
const AMPM = styled.div`
  font-size: 2.5rem;
  align-self: center;
  font-family: "Bungee Shade";
  padding: 2rem;
`;

const DateContainer = styled.div`
  font-size: 2rem;
  position: absolute;
  right: 50%
  transform: translateX(-50%);
  bottom: 0;
  padding: 1 rem;
`;
export default Clock;
