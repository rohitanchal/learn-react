import { useState } from "react";
function Header() //header Component function based 
{
    const [data, setData] = useState(0);
    function updatedata() {
        setData(data+1);
    }
    return (
        <div>
            <h1>Hello This is My New Header and First Component in React.Js</h1><hr />

            <h1>{data}</h1>
            <button onClick={updatedata}>Update Data</button>
            <hr />
        </div>
    )
}
export default Header;