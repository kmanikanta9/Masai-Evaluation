function remove(s){
    let res=s.split(" ").reverse()
    let res1= res.join(" ")
    let res2=res1.replace(/\s+/g," ").trim()
    return res2
}
s="  the   sky  is blue  "
console.log(remove(s))