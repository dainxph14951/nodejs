import User from "../models/users";
import jwt from 'jsonwebtoken';

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
export const signin = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email}).exec();
    if(!user){
        res.status(401).json({
            messager: 'User không tồn tại'
        })
    }
    if(!user.authenticate(password)){
        res.status(401).json({
            messager: 'Sai mật khẩu'
        })
    }
    const token = jwt.sign({_id: user.id}, '123456', { expiresIn: 60 * 60 });
    res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
}