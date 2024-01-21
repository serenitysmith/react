
import './App.css';
import Header from './header'
// import { useState } from 'react';
import Body from './body'
import React from 'react';

// solution move this line to the app component, it was in the header /     const [user, setUser] = 


// added this componet to the header 
// import React from "react"

// export default function Header(props) {
//     return (
//         <header>
//             <p>Current user: {props.user}</p>
//         </header>
//     )
// }


//removed this // React.useState("Joe")

function App() {
// this remained the same
const [user, setUser] = React.useState("Joe")
    
  /**
   * Challenge:
   * Raise state up a level and pass it down to both the
   * Header and Body components through props.
   */

  
  return (

    <main>

      {/* added the user prop directly into header an body */}
      {/* //added props to the body tba go look there */}
 <Header user={user}/>
     <Body user={user}/>
  
    </main>
  )
}




// import React from "react"

// export default function Header() {
//     const [user, setUser] = React.useState("Joe")
    
//     return (
//         <header>
//             <p>Current user: {user}</p>
//         </header>
//     )
// }

export default App