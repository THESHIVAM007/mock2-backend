const mongoose = require("mongoose")


const bmSchema = new mongoose.Schema({
    title : {type : String, required : true},
    quantity : {type : String, required : true},
    date : {type : String, required : true},
    timestamp : {type : String, required : true},
    priority : {type : String, required : true},
    des:{type:String}
})

const BMModel = mongoose.model("bookmarks", bmSchema)



module.exports = {
    BMModel
}
