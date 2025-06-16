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
      <p>
        <strong>Total of exercises {sum}</strong>
      </p>
  </>
  )

}

export default Course
