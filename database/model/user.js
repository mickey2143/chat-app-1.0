
import { Schema,model, models} from "mongoose";



const UserScheme = new Schema({
    username:String,
    password:String
},{ timestamps: true })

const User = models.User || model("User",UserScheme)

export default User