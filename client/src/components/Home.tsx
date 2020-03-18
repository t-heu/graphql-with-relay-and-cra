import React from "react"
import { Link } from 'react-router-dom';

export default function Home(props: any) {
  return (
    <div>
      <Link to="/signin">SignIn</Link><br />
      <Link to="/signup">SignUp</Link><br />
      <Link to="/profile">profile</Link><br />
    </div>
  );
}