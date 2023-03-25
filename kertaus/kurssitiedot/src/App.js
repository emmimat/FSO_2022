const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


const Header = () => {
  return (
    <div>
      <h1>{course}</h1>
    </div>  
  )
}

const Part = (props) => {
  return (
     <div>
       <p>
         {props.part} {props.exercises}
       </p>
     </div>
   )
}

const Content = (props) => {
  console.log(props)
  return (
     <div>
       <Part part={props.part1} exercises={props.exercises1}/>
       <Part part={props.part2} exercises={props.exercises2}/>
       <Part part={props.part3} exercises={props.exercises3}/>
     </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>  
  )
}

  return (
    <div>
       <Header course={course} />
       <Content Part part1={part1} />
       <Content Part part2={part2}/>
       <Content Part part3={part3}/>       
       <Total exercises1={exercises1} />
    </div>
  )
}

export default App