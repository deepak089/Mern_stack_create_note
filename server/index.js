const express =require('express');
const app=express();


app.get('/',(req,res)=>{
 res.send("hello user");    
});


app.get('/api/notes/:id',(req,res)=>{
const note=note.find((n) => n._id ===req.params.id);
res.send(note);

});
app.listen(5000,(req,res)=>{
    console.log('listening to the port 5000');
});