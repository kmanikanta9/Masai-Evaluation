function AddSnack({item}){
    function Change(e){
        let name=e.target.name;
        let value=e.target.value;
        item.setSnack({...item.snack,[name]:value})
    }
    async function adds(){
        let res=await fetch("https://data-46361-default-rtdb.asia-southeast1.firebasedatabase.app/Snack.json",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(item.snack)
        })
    }
    return (
        <> 
            <div id="add-snack">
            <h3>Add Snacks</h3>
            <input type="text" placeholder="Title" name="title" onChange={Change}/><br />
            <input type="text" placeholder="Category" name="category" onChange={Change}/><br />
            <input type="text" placeholder="Price" name="price" onChange={Change}/> <br />
            <input type="text" placeholder="Rating" name="rating" onChange={Change}/> <br />
            <button onClick={adds}>Add</button>
            </div>
        </>
    )
}

export default AddSnack;