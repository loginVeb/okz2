'use client'

const Button = (props) => {
  
  return (
    <button className={props.styles.button} >
     {props.children}
    </button>
  )
}

export default Button