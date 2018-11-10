import React, { Component } from 'react';

const render = (props) => {
  return (
    <div>
      <h2>Input To Render</h2>
      <textarea id="editor" onChange={props.handleChange}></textarea>
    </div>
  )
}

export default render;
