import React, { useState } from "react";
// function Profile()
// {
//     const [loggedIn, setLoggedIn] = useState(false);

//     if(loggedIn){
//         return(
//             <div className="App">
//                 <h1>This is the Lecture 18 of Conditional rendering & if Condition</h1><hr/>
    
//             </div>
//         )
//     }

//     else{
//         return(
//             <div className="App">
//                 <h1>Login first !!</h1><hr/>
    
//             </div>
//         )
//     }
 
// }


function Profile(){

    const [login, setLogin] = useState(true);

    return(
        <div>
            {
                login?
                <h1>Your are login</h1>
                :<h1>Login first</h1>
            }
        </div>
    )
}

export default Profile;