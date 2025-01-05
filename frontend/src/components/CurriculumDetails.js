const CurriculumDetails = ({ curriculum }) => {

    return (
      <div className="Curriculumdetails">
        <h4>{curriculum.name}</h4>
        <p><strong>Credit : </strong>{curriculum.credit}</p>
        <p><strong>Course Tittle: </strong>{curriculum.tittle}</p>
        <p><strong>Parallel Course: </strong>{curriculum.parrallelCourse}</p>

      </div>
    )
  }
  
  export default CurriculumDetails