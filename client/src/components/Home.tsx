import React from "react"
import { Link } from 'react-router-dom';
import { ROOT_ID } from "relay-runtime";
import environment from "../Environment";

// pega valor fora
const dat = environment
	.getStore()
	.getSource()
	.get(ROOT_ID)
	
function Envi(ob: any): any {
  return ob.localValue
}
alert(Envi(dat))

export default function Home(props: any) {
  return (
    <div className="forms">
      <Link to="/signin">SignIn</Link><br />
      <Link to="/signup">SignUp</Link><br />
      <Link to="/profile">profile</Link><br />
    </div>
  );
}
