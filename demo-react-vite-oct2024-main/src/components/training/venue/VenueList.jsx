import { useState } from "react";
export default function VenueList(){
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
        }
    ]);
    
    let mappedAllVenues = allVenues.map(eachVenue => (
        <tr key={eachVenue.venueId}>
            <td>{eachVenue.venueId}</td>
            <td>{eachVenue.venueName}</td>
            <td>{eachVenue.venueSeater} seats</td>
            <td>{eachVenue.isVenueAC ? "Yes":"No"}</td>
            <td>{eachVenue.venueCity}</td>
            <td>{eachVenue.venueState}</td>
            <td><button onClick={()=>handleView(eachVenue.venueId)} className="btn btn-warning">VIEW</button></td>
            <td><button onClick={()=>handleEdit(eachVenue.venueId)} className="btn btn-primary">EDIT</button></td>
            <td><button onClick={()=>handleDelete(eachVenue.venueId)} className="btn btn-danger">DELETE</button></td>
        </tr>
    ));

    function handleView(venueId){
      console.log(venueId);
    }

    function handleEdit(venueId){
        console.log(venueId);
    }

    function handleDelete(venueId){
        let filteredVenues = allVenues.filter((eachVenue)=> eachVenue.venueId!=venueId);
        setAllVenues(filteredVenues);

    }

    return (
        <>
         <div className="container m-5">
             <h3 style={{color:'purple'}}>List of Venues</h3>
             <table className="table table-secondary table-hover">
                 <thead>
                     <tr>
                         <th>ID</th>
                         <th>NAME</th>
                         <th>Capacity</th>
                         <th>AC</th>
                         <th>City</th>
                         <th>State</th>
                         <th></th>
                         <th></th>
                         <th></th>
                     </tr>
                 </thead>
                 <tbody>
                     {mappedAllVenues}
                 </tbody>
             </table>
         </div>
        </>

    );
}