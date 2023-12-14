import Header from "./Components/Header"
import UserInput from "./Components/UserInput";
import {useState} from "react"
 import Results from './Components/Results'
function App() {
    const [userInput, setUserInput] = useState({
      initialInvestment: 1000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });
     const inputValid =userInput.duration >=1;
    function handleChange(inputIndentifier, newValue) {
      setUserInput((prevInput) => {
        return {
          ...prevInput,
          [inputIndentifier]: +newValue,
        };
      });
    }

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChangeHandler={handleChange}/>
    {inputValid ? <Results input={userInput}  /> : <p className="center">Please enter a duration greater then 1.</p>}
    </>
  );
}

export default App;
