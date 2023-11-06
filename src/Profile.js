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

    // const [login, setLogin] = useState(true);
    const [login, setLogin] = useState(1);

    return(
        <div>
            {
                // login?
                // <h1>Your are login</h1>
                // :<h1>Login first</h1>

                login==1?
                <h1>Your option is 1 : user:1</h1>
                :login==2?
                <h2>Your option is 2 : user:2</h2>
                :<h3>Your option is 2 : user:3</h3>
            }
        </div>
    )
}

export default Profile;