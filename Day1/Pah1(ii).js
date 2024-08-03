function Pah2() {
    let age = 18;
    let name = "kiran";
    let setStatus = false;
    let userDefault = undefined;
    let responseValue = null;

    console.log("Initial Values:");
    console.log("Age:", age);
    console.log("Name:", name);
    console.log("Set Status:", setStatus);
    console.log("User Default:", userDefault);
    console.log("Response Value:", responseValue);

    age = 25;
    let oldage = age;

    setStatus = true;
    let status = setStatus;

    console.log("Updated Values:");
    console.log("New Age:", oldage);
    console.log("Set Status:", status);

    alert("Check the console output!");
    
}
function Buttn()
{
    return(
        <div>
            <button onClick={Pah2}>JAVASCRIPT</button>
        </div>
    )
}export default Buttn;
