import React from 'react';

import './Pie.scss'

function Pie(props) {

  const normalizedRadius = props.radius - props.stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI

  const strokeDashoffset = circumference - props.progress / 100 * circumference

  return (
    <svg
      class="Pie"
      height={props.radius * 2}
      width={props.radius * 2}>
      <circle
        stroke="#bbb"
        fill="white"
        stroke-width={props.stroke / 2}
        r={82}
        cx={props.radius}
        cy={props.radius}
      />
      <circle
        class="Pie__circle"
        stroke="#7FC241"
        fill="transparent"
        strokeDasharray={circumference + ' ' + circumference}
        style={{strokeDashoffset}}
        stroke-width={props.stroke}
        r={normalizedRadius}
        cx={props.radius}
        cy={props.radius}
      />
    </svg>
  )
}

export default Pie
