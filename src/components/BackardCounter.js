
import useCounter from "../hooks/use-counter";
import Card from "./Card";

const BackardCounter = () => {
const counter = useCounter(false);


  return <Card>{counter}</Card>;
};

export default BackardCounter;

