function customerFine(customer){
    arr=[]
    arr1=[]
    let filtered=customer.filter((ele)=>{
         return ele.daysLate>5
    })
    filtered.map((ele)=>{
        fines={name:ele.name,fine:ele.daysLate*20,type:ele.type}
        arr.push(fines)
    })
    let discount=arr.map((ele)=>{
        if(ele.type=="VIP"){
            fines={name:ele.name,fine:ele.fine-(ele.fine*30/100)}
            arr1.push(fines)
        }
        else{

            arr1.push({name:ele.name,fine:ele.fine})
        }
    })
    let total=arr1.reduce((acc,cur)=>{
        return acc+=cur.fine
    },0)
    arr1.push(`totalCollected: ${total}`)
    console.log(arr1)
}
const customers = [
  { name: "Aman", daysLate: 4, type: "Regular" },
  { name: "Priya", daysLate: 6, type: "VIP" },
  { name: "Dev", daysLate: 8, type: "Regular" },
  { name: "Riya", daysLate: 10, type: "VIP" }
];
(customerFine(customers))