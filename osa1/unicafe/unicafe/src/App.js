import { useState } from 'react'

// Unicafe step 1.6

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <td>
      <p>
        {props.text} {props.value}
      </p>
    </td>
  )
}

const Statistics = (props) => {
  if (props.all === 0) 
  return (
    <p>No feedback collected yet</p>
  )
  
  return (
    <table>
      <tbody>
      <tr><StatisticLine text="Good" value ={props.good} /></tr>
          <tr><StatisticLine text="Neutral" value={props.neutral}  /></tr>
          <tr><StatisticLine text="Bad" value ={props.bad} /></tr>
          <tr><StatisticLine text="All" value ={props.all} /></tr>
          <tr><StatisticLine text="Average" value ={props.average} /></tr>
          <tr><StatisticLine text="Positive" value ={props.positive} /></tr>
      </tbody>
    </table>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const allFeedback = () => setAll (all + 1)

  const goodFeedback = () => {
    setGood(good + 1)
    allFeedback(all + 1)
  }
 
  const neutralFeedback = () => {
    setNeutral(neutral + 1)
    allFeedback(all + 1)
  }
  
  const badFeedback = () => {
    setBad(bad + 1)
    allFeedback(all + 1)
  }
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        handleClick={goodFeedback}
        text='good'
      />
      <Button
        handleClick={neutralFeedback}
        text='neutral'
      />
      <Button
        handleClick={badFeedback}
        text='bad'
      />
      <h2>Statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={(good-bad)/(all)}
        positive={(good/all)*100 + ' %'} />
    </div>
  )
}

export default App