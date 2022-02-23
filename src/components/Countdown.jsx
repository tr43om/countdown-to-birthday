import Cards from "./Cards";

import Card from "./Card";
import { useContext } from "react";
import TimeLeftContext from "./TimeLeftContext";

const Countdown = () => {
  const { seconds, minutes, hours, days } = useContext(TimeLeftContext);
  return (
    <Cards>
      <Card text={"days"} time={days}></Card>
      <Card text={"hours"} time={hours}></Card>
      <Card text={"minutes"} time={minutes}></Card>
      <Card text={"seconds"} time={seconds}></Card>
    </Cards>
  );
};

export default Countdown;
