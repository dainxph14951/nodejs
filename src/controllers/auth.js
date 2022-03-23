import User from "../models/users";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                messager: 'Email đã tồn tại'
            })
        }
        const user = await new User({name, email, password}).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email:user.email
            }
        });
    } catch (error) {
        res.json(400).json({
            messager: 'không tạo được tài khoản'
        })
    }

}
export const signin = (req, res) => {

}