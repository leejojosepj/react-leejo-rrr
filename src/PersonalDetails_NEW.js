import React, { useState } from "react";
import { connect,useSelector,useDispatch  } from "react-redux";
import { updatePersonalDetails } from "./actions";

const PersonalDetails = () => {
  
  const dispatch = useDispatch();
  const personalDetailsStore = useSelector((state) => state.education);
  const [details, setDetails] = useState(personalDetailsStore);

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updatePersonalDetails(details));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        defaultValue={"asd"}
        
        onChange={event => setDetails({ ...details, [event.target.name]: event.target.value })}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={event => setDetails({ ...details, [event.target.name]: event.target.value })}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={event => setDetails({ ...details, [event.target.name]: event.target.value })}
      />
      <button type="submit">Save</button>
    </form>
  );
};


export default PersonalDetails;
