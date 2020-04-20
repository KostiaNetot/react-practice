import React from 'react';
import Picker from "./components/Picker";
import PostsList from "./components/PostsList";

const AsyncApp = () => {
  return (
    <div>
      <Picker />
      <PostsList />
    </div>
  );
};

export default AsyncApp;
