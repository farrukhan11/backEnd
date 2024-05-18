import moongos from 'mongoose'

const userSchema = new moongos.Schema(
 {
    username : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
    },
 },{timestamps: true}
)

export default moongos.model('User', userSchema)

