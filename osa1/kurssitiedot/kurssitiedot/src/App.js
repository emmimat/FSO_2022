const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
} 

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part parts={props.parts} />
    </div>
  )
};

const Part = (props) => {
  console.log(props)
	const lists = props.parts.map(value => {
		return (
			<div>
				<p> 
          {value.name} {value.exercises}
        </p>
			</div>
		)
	})
	return lists
}

const Total = (props) => {
  let sum = 0
  const lists = props.parts.map(value => {
    sum = sum + value.exercises
  })
  return (
    <div>
      <p>Number of exercises {sum}</p>
  </div>
  )
}

//Tehtävä 1.4

// const Content = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <Part parts={props.parts} />
//     </div>
//   )
// };

// const Part = (props) => {
//   console.log(props)
// 	const lists = props.parts.map(value => {
// 		return (
// 			<div>
// 				<p> 
//           {value.name} {value.exercises}
//         </p>
// 			</div>
// 		)
// 	})
// 	return lists
// }

// const Total = (props) => {
//   let sum = 0
//   const lists = props.parts.map(value => {
//     sum = sum + value.exercises
//   })
//   return (
//     <div>
//       <p>Number of exercises {sum}</p>
//   </div>
//   )
// }

//Tehtävä 1.3

// const Part = (props) => {
//   console.log(props.name)
//   console.log(props.exercises)
//   return (
//     <div>
//       <p>
//         {props.part.name} {props.part.exercises}
//       </p>
//     </div>
//   )
// } 

// const Content = (props) => {
//   return (
//   <div>
//     <Part part={props.part1}/>
//     <Part part={props.part2}/>
//     <Part part={props.part3}/>
//   </div>
//   )
// }

// const Total = (props) => {
//   console.log(props.exercises)
//   return (
//     <div>
//       <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
//     </div>
//   )
// }

//Tehtävä 1.2

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.part1} exercises={props.exercises1}/>
//       <Part part={props.part2} exercises={props.exercises2}/>
//       <Part part={props.part3} exercises={props.exercises3}/>
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     </div>
//   )
// }

export default App