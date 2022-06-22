import React from "react";

function NavBar(){
  const links = ["home", "about", "projects"];

  return <nav>{links.map((n,id)=> <a key={id} href={"#"+n}>{n}</a> )}</nav>;
}

export default NavBar;
