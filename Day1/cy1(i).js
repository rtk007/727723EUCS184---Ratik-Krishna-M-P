function Compare() {
    const name1 = "Kabil";
    const name2 = "Kabil";

    const object1 = { name: "Kabil" };
    const object2 = { name: "Kabil" };

    const pri = (name1 === name2);
    console.log("Pri:", pri);

    const ref = (object1 === object2);
    console.log("Ref:", ref);

    alert("Check the console output ");
}

function Butn()
{
    return(
        <div>
            <button onClick={Compare}>Js</button>
        </div>
        
    )
}export default Butn;