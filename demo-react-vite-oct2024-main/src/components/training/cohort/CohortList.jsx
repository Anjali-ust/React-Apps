import { useState } from "react";
export default function CohortList()
{
    const [allCohorts,setAllCohorts] = useState([
        {
            cohortId:201,
            cohortSize : 26,
            cohortVenueId : 0,
            cohortStack : "Java Full Stack",
            cohortStartDate : "2024-12-12",
            cohortDurationWeeks : 6,
            cohortSPOC : "",
            cohortInstructor:""
        },
        {
            cohortId:202,
            cohortSize : 24,
            cohortVenueId : 101,
            cohortStack : "Dotnet Full Stack",
            cohortStartDate : "2024-12-02",
            cohortDurationWeeks : 6,
            cohortSPOC : "",
            cohortInstructor:""
        }
    ]);

    const [allVenues,setAllVenues] = useState([
        {
            venueId : 101,
            venueName : "Pallavas",
            venueSeater : 30,
            isVenueAC : true,
            venueCity : "Trivandrum",
            venueState : "Kerala",
        },
        {
            venueId : 102,
            venueName : "Cholas",
            venueSeater : 30,
            isVenueAC : true,
            venueCity : "Trivandrum",
            venueState : "Kerala",
        },

    ]);

    let mappedAllCohorts = allCohorts.map(eachCohort => (
        <tr key={eachCohort.cohortId}>
            <td>{eachCohort.cohortId}</td>
            <td>{eachCohort.cohortStack}</td>
            <td>{eachCohort.cohortSize}</td>
            <td>{eachCohort.cohortVenueId == 0 ? (
                <button className="btn btn-secondary text text-dark"
                style={{ backgroundColor: 'palevioletred'  }}>
                  <p style={{color: 'white'}}>Map</p></button>
            ) :
            (eachCohort.cohortVenueId)
            }</td>
            <td>{eachCohort.cohortStartDate}</td>
            <td>{eachCohort.cohortDurationWeeks} weeks</td>
            <td>{eachCohort.cohortStartDate}</td>
            <td>{eachCohort.cohortSPOC}</td>
            <td>{eachCohort.cohortInstructor}</td>
            <td><button onClick={()=>handleView(eachCohort.cohortId)} className="btn btn-warning">VIEW</button></td>
            <td><button onClick={()=>handleEdit(eachCohort.cohortId)} className="btn btn-primary">EDIT</button></td>
            <td><button onClick={()=>handleDelete(eachCohort.cohortId)} className="btn btn-danger">DELETE</button></td>
        </tr>
    ));

    function handleView(cohortId){
        console.log(cohortId);
      }
  
      function handleEdit(cohortId){
          console.log(cohortId);
      }
  
      function handleDelete(cohortId){
        let filteredCohorts = allCohorts.filter((eachCohort)=> eachCohort.cohortId!=cohortId);
        setAllCohorts(filteredCohorts);
  
      }
    return(
    <>
    <div className="container m-5">
             <h3 style={{fontFamily: 'Roboto, sans-serif',color:"palevioletred"}}>List of Cohorts</h3>
             <table className="table table-secondary table-hover">
                 <thead>
                     <tr>
                         <th>ID</th>
                         <th>NAME</th>
                         <th>SIZE</th>
                         <th>VENUE ID</th>
                         <th>START DATE</th>
                         <th>DURATION IN WEEKS</th>
                         <th>END DATE</th>
                         <th>SPOC</th>
                         <th>INSTRUCTOR</th>
                         <th></th>
                         <th></th>
                         <th></th>
                     </tr>
                 </thead>
                 <tbody>
                     {mappedAllCohorts}
                 </tbody>
             </table>
         </div>
    </>);
}