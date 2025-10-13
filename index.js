
let express=require("express")
let app=express()
app.use(express.urlencoded({extended:true}))
app.listen(3000,()=>{
    console.log("server is working");
    
})
app.get('/',(req,res)=>{
    res.send("working")
    
})
let books=[
    {
        title:"Never Ending Tales",
        author:"Venkateswar Rao",
        price:1000,
    
    },
      {
        title:" Successful person ",
        author:"ammu",
        price:2000,
        
    },
      {
        title:"My life My rules",
        author:"sai",
        price:3000,
        
    },
    {
        title:"Hello Besties",
        author:"harshitha",
        price:5000
    }

]
app.set("view engine","ejs");
app.get('/books',(req,res)=>{
    //res.send(books);
      res.render("books",{books})
})
app.get('/books/new',(req,res)=>{
 res.render("new")
})
app.post('/books',(req,res)=>{
    let {title,author,price}=req.body;
    books.push({
        title,author,price
    })
    res.redirect('/books')
})