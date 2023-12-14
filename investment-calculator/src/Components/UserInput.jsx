
export default function UserInput({userInput,onChangeHandler}) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.initailInvestment} onChange={(event)=> onChangeHandler("initailInvestment",event.target.value)}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(event)=> onChangeHandler("annualInvestment",event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(event)=> onChangeHandler("expectedReturn",event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={(event)=> onChangeHandler("duration",event.target.value)}/>
        </p>
      </div>
    </section>
  );
}
