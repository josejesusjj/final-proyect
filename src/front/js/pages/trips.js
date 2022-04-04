import React, { useState } from "react";
import CardTrip from "../component/cardTrip";

export default function Trips() {
  const [trips, setTrips] = useState([]);

  const listTrips = () => {
    fetch(
      "https://3001-francescagiovin-finalpro-m4vz8yo8vlu.ws-eu38.gitpod.io/api/getTrips"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setTrips(data);
        // this.setState({ totalReactPackages: data.total })
      });
  };
  listTrips();

  //! Hacia arriba es la logica del front --> REACT

  //! Aqui empieza la vista --> Lenguaje HTML / CSS HACIA ABAJO

  return (
    <div>
      <span className="listTrips">Mis viajes</span>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">City</th>
            <th scope="col">Begin Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        {trips.map((value, index) => {
          return <CardTrip key={index} trip={value} />;
        })}
      </table>
    </div>
  );
}
