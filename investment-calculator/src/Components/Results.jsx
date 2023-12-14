import { calculateInvestmentResults,formatter } from "../investment";
export default function Results({input}){
    const resultsData = calculateInvestmentResults(input);
    const initailInvestment=resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Intrest (Year)</th>
            <th>Total Intrest</th>
            <th>Investment Capital</th>
          </tr>
        </thead>
        <tbody>
            {resultsData.map((yearData)=>{ 
                const totalIntrest =yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initailInvestment
            const totalAmountInvested=yearData.valueEndOfYear - totalIntrest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalIntrest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
            
            })}
        </tbody>
      </table>
    );

}