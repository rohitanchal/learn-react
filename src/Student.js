function Student(props) {    //here props called

    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <div> 
                <hr />
                <h1>Student Component</h1>
            </div>
            <div>
                <hr />
                <h1>Name :{props.name}</h1> {/*here props accessed with parameter*/}
                <h2>Email : {props.email}</h2>
                <h3>Address : {props.other.address}</h3>
                <h3>Mobile : {props.other.mobile}</h3>
            </div>
            <hr />
        </div>
    );
}
export default Student;
