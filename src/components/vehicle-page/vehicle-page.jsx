import React from "react";
import Row from '../row';
import { VehicleDetails, VehicleList } from "../sw-components";

const VehiclePage = ({ match, history }) => {

  const { id } = match.params;

  console.log(id)

  return (
    <Row
      left={<VehicleList onItemSelected={(id) => history.push(id)} activeItem={id} />}
      rigth={<VehicleDetails selectedItem={id} />}
    />
  )
}
export default VehiclePage;
