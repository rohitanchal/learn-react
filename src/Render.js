// function Item({ name, isPacked }) {
//     return <li className="item">{name}</li>;
// }

// function Render() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item isPacked={true} name="Space suit" />
//                 <Item isPacked={true} name="Helmet with a golden leaf" />
//                 <Item isPacked={false} name="Photo of Tam" />
//             </ul>
//         </section>
//     );
// }

// export default Render;


function List({name, carBrands})
{
    return <li>{name}</li>
}

function Render()
{
    return(
        <section>
            <h3>List Your Favorite Cars Brands </h3>

            <List carBrands={true} name="Rubicone" />
            <List carBrands={true} name="Lamborghini" />
            <List carBrands={true} name="BMW" />
            <List carBrands={true} name="Benz" />
            <List carBrands={true} name="Audi" />

        </section>
    )
}

export default Render; 