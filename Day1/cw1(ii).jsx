function Word()
{
    let m={name:"Madras"};
    let k=m;
    k.name="chennai";
    let a=["a","e","i","o"];
    let v=a;
    a.push("u");
    alert("Check the Console Output");
    console.log(k);
    console.log(m);
    console.log(v);
    console.log(a);
}
function K()
{
    return(
        <div>
            <button onClick={Word}>click</button>
        </div>
    )
}export default K;