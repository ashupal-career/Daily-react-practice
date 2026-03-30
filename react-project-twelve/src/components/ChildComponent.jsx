import React from 'react'

const ChildComponent = React.memo(
    (props) => {
    console.log('Child Component is re-render');
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
    </div>
  )
}
)

export default ChildComponent

// React.memo -> wrap -> Component -> Component re-render tabhi hoga jab props change honge nhin toh re-render mahi hoga

// If you are sending a function, then react.memo wont be able to save yoyu from re-rendering