function App() {
const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
  <div>
      <Course courses={courses} />
  </div>
  )
}

function Course({courses}){
  return(
    courses.map(course=> 
      <div key={course.id}>
        <Header course={course}/>
        <Content  parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )

  )
}

function Header({course}) {

  return(
    <>
      <h1> {course.name} </h1>
    </>
  )
}
function Content({parts}) {
  return(
  <>
    {parts.map((singlePart)=>

      <Part key={singlePart.id} part={singlePart.name} exercise= {singlePart.exercises} />
      )}
  </>
  )

}

function Part({part, exercise}){
  return(
  <>
     <p>{part} {exercise}</p> 
  </>
  )
}

function Total({parts}) {

  const sum = parts.reduce((acc,curr) => {
  return (acc+ curr.exercises)},0)

  return(
  <>
      <p> <strong>Total of exercises 
        {sum}</strong>
      </p>
  </>
  )

}

export default App
