import React from "react";
import {Address} from "./components/Address";
import {Age} from "./components/Age"

export function App() {

var user1 ={
  ime:"Dimitar",
  prezime:"Dimoski",
  adresa:"Prilep",
  godini:"29"
};
var user2 ={
  ime:"Ana",
  prezime:"Maneska",
  adresa:"Skopje",
  godini:"21"
};
var user3 ={
  ime:"Mihail",
  prezime:"Taneski",
  adresa:"Prilep",
  godini:"17"
};
var user4 ={
  ime:"Ksenija",
  prezime:"Abramova",
  adresa:"Bitola",
  godini:"24"
};


var users = [user1, user2, user3, user4];

  return( <div>

<h2>App</h2>
<Address users={users}/>  
<Age users={users}/>
</div>)
}
