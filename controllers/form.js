
const form = exports;
form.get = async(req , res) =>{
    const data = {
        "title":"Avinash",
        "Id":1
    }
    return res.send(data);
}

form.post = async(req,res)=> {
    const title = req.title;
    const form =  req.blog;
}