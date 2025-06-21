import { useContext } from "react"
import State from "../hooks/State"
import {Link} from "react-router-dom"
import { UserContext } from "../hooks/UserContext"

const About = () => {
  const name=useContext(UserContext)
  return (
    <div>
      <h1>Hi! {name}</h1>
      <link to='/state'>UseState Example</link><br/>
      <link to='/form'>Controlled Form</link><br/>
      <link to='/effect'>UseEffect example</link>
    </div>
  )
}

export default About

