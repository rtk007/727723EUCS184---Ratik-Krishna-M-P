     let directions = ["North", "South", "East", "West"];
    function ref()
    {
        document.write(directions);
    }
    ref()
    function Add() {
      directions = directions.map(direction => direction + " News");
      document.write(directions);
      
      <div>
        <button onClick={ref}>ref</button>
      </div>
    }
    function D()
    {
        return(
            <div  className="arrayDisplay">
                <button onClick={Add}>Add</button>
                
            </div>
        )
    }export default D;
