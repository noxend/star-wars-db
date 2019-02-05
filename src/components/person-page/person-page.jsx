import React from "react";
import Row from "../row";
import { PersonsList, PersonDetails } from "../sw-components";


const PersonPage = ({ match, history }) => {

  const { id } = match.params;

  return (
    <Row
      left={<PersonsList onItemSelected={id => history.push(id)} activeItem={id} />}
      rigth={<PersonDetails selectedItem={id} />}
    />
  );
};

export default PersonPage;
