// ColorContext.js
import React from 'react';

// global array of colors that we will use
export const colors = ['#000000', '#0000ff', '#00ff00', '#ff00ff', '#ff0000', '#bbbbbb', '#ff69b4'];

//make sure that the Context matches the signature that your Consumer will expect later
export const ColorContext = React.createContext({
  color: '',
  changeColor: () => {} // emtpy function <= we will apply a function to in our Provider
});