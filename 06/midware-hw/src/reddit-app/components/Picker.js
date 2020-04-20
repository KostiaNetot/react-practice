import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddit } from "../redux/actions";

const Picker = () => {

  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(state => state.selectedSubreddit);

  return (
    <div>
      <h2>ReactJS</h2>
      <select onChange={(e) => dispatch(selectSubreddit(e.target.value))} value={selectedSubreddit} >
        <option >----</option>
        <option value='reactjs'>ReactJS</option>
        <option value='frontend'>Frontend</option>
      </select>
    </div>
  );
};

export default Picker;
