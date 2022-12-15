const mongoose = require("mongoose")


const listSchema = new mongoose.Schema({
    title : {type : String, required : true},
    quantity : {type : String, required : true},
    date : {type : String, required : true},
    timestamp : {type : String, required : true},
    priority : {type : String, required : true},
    des:{type:String}
})

const ListModel = mongoose.model("list", listSchema)



module.exports = {
    ListModel
}
