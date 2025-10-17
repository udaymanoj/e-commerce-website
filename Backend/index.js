
const port=3000;
const express=require('express')
const app=express();
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const cors=require('cors')
const multer=require('multer')
const path=require('path');
const { error } = require('console');
const { type } = require('os');
const { emit } = require('process');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://udaymanoj:uday%40123@cluster0.ljsug1l.mongodb.net/myContacts-Backend");

app.get('/',(req,res)=>{
    res.send("hello");
})


const storage=multer.diskStorage({
    destination:'./Upload/Images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage});

app.use('/images',express.static("Upload/Images"))

app.post ('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
});

//schema for creating products

const products=mongoose.model('product',{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
         type:String,
        required:true,
    },
    category:{
         type:String,
        required:true,
    },
    new_price:{
         type:Number,
        required:true,
    },
    old_price:{
         type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
         type:Boolean,
        required:true,
         default: true
    }
})

//create schema for Usermode

const Users=mongoose.model('Users',{
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,

    },
    cartData:{
        type:Object
    },
    Data:{
        type:Date,
        default:Date.now
    },
})

//create user

app.post('/signup',async(req,res)=>
{
    let check=await Users.findOne({email:req.body.email})
    if(check)
    {
        return res.status(400).json({success:false,error:"existing user found"})
    }
    let cart={}
    for( let i=0;i<300; i++ )
    {
        cart[i]=0;
    }
    const user=new Users({
        name:req.body.username, 
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save()

    const data={
        user:{
            id:user.id
        }
    }

    const token=jwt.sign(data,"error_secert");
    res.json({success:true,token})
})

//creating endpoint for userlogin

app.post('/login',async(req,res)=>
{
    let user=await Users.findOne({email:req.body.email});
    if(user)
    {
        const passwordCompare=req.body.password===user.password
        if(passwordCompare)
        {
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,"error_secert")
            res.json({success:true,token})
        }
        else{
            res.json({success:false,error:"wrong password"})
        }
    }
    else{
        res.status(400).json({success:false,error:"wrong email crenditails"})
    }
})

//creatinig endpoint for new collection data
app.get('/newcollection',async(req,res)=>
{
    let product=await products.find({})
    let newcollection=product.slice(1).slice(-8);
    console.log("newcollection feteched")
    res.send(newcollection)
})

//creating endpoint for popular in women

app.get('/popularinwomen',async(req,res)=>
{
    let product=await products.find({category:"women"})
    let popularinwomen=product.slice(0,4)
    console.log("popular in women")
    res.send(popularinwomen)
})

const fetchuser=async(req,res,next)=>{
    const token=req.header('auth_token');
    if(!token)
    {
        res.status(401).send({error:"please authenticate using valid user"})
    }
    else{
        try{
            const data=jwt.verify(token,"error_secert");
            req.user=data.user
            next();
        }
        catch(error){
            res.status(401).send({error:"please authenticate using a valid token"})
        }
    }
}

//creating endpoint for card

app.post('/addtocart',fetchuser, async(req,res)=>{  
    let userData=await Users.findOne({_id:req.user.id })
    userData.cartData[req.body.itemId]+=1
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Added")
})

app.post('/removecart',fetchuser,async(req,res)=>{
     let userData=await Users.findOne({_id:req.user.id })
     if(userData.cartData[req.body.itemId]>0){
     userData.cartData[req.body.itemId]-=1
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Removed")
     }
})
// creting 

app.post('/getcart',fetchuser,async(req,res)=>
{   
    console.log("get cart")
    let userData=await Users.findOne({_id:req.user.id})
    res.json(userData.cartData)

})

app.post('/addproducts',async(req,res)=>{                                                                   
    let avProduct=await products.find({})
    let id;
    if(avProduct.length>0)
    {
         let last_products_array=avProduct.slice(-1);
         let last_product=last_products_array[0];
        id=last_product.id+1;

    }
    else{
        id=1
    }
    const product= new products({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        date:req.body.date,
        available:req.body.available
    });
    await product.save();
    console.log("saved");
    res.json({
        success:"true",
        name:req.body.name,
    })
})

app.post('/removeproduct',async(req,res)=>
{
    await products.findOneAndDelete({id:req.body.id})
    console.log("removed")
    res.json({
        success:"true",
        name:req.body.name
    })
})

app.get('/allproducts',async(req,res)=>
{
    let allproducts=await products.find({})
    console.log("all products send")
    res.send(allproducts)
})
app.listen(port,(error)=>{
    if(!error)
    {
        console.log("server is running on port"+port);
    }
    else{
        console.log('error'+error);
    }
})