import React, { Component } from 'react';
import Render from './render.js';


// class Render extends Component {
//   render(props) {
//     return (
//       <div className="render">
//         <h2>Preview</h2>
//         <p>{props.value}</p>
//         <textarea disabled>  </textarea>
//       </div>
//     );
//   }
// }

class Box extends Component {
  render() {
    return (
      <div className="boxes">
        <Input />
      </div>
    );
  }
}

export default Box;
