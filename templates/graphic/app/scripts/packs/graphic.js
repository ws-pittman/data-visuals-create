/* eslint-disable no-unused-vars */
import * as d3 from 'd3';
import createBase from '../utils/d3-base';

// a reference to the default graphic container, change if needed
const container = d3.select('#graphic');

// a helper function to clear the container of its contents
const clearContainer = () => container.html('');

// a helper function to grab the container's width
const getFrameWidth = () => container.node().offsetWidth;

/**
 * This function is called to render a graphic, using d3 or a library of your choice.
 *
 * @return {void}
 */
export default function renderGraphic() {
  // pass the recalculated frameWidth to parts of your chart (like an axis) that change with resize!
  //
  // UNCOMMENT THESE TWO LINES IF YOU'RE SCRIPTNG A GRAPHIC
  // clearContainer();
  // const frameWidth = getFrameWidth();
  //
  // rest of your code goes here
  // use createBase() to create the base of an d3 chart
}
