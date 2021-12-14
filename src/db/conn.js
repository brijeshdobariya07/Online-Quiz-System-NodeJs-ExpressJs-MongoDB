const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/quizProject",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDB Connected...");
}).catch((error)=>{
    console.log(error);
})
