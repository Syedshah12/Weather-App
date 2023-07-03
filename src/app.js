const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 3000;
const static_path=path.join(__dirname,'../public');
const views_pth=path.join(__dirname,'../templates/views')
const partials_pth=path.join(__dirname,'../templates/partials')
console.log(views_pth);


//midlewares
app.use(express.json());
app.use(express.static(static_path));
app.set('view engine','hbs');
app.set('views',views_pth);
hbs.registerPartials(partials_pth);

//
app.get('/',async(req,res)=>{
    res.render('index');
})

//listening server on port 3000;
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})