import Category from '../models/category';
import slugify from 'slugify';
import Product from '../models/products';

export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name);
    try {
            const category = await new Category(req.body).save()
            res.json(category);
    } catch (error) {
        res.status(400).json({
            messsager: "thêm không thành công"
        })
    }
}
export const list = async (req, res) => {
    try {
        const categorys = await Category.find().exec();
        res.json(categorys);
    } catch (error) {
        res.status(400).json({
            messsager: "thêm không thành công"
        })
    }
}
export const read = async (req, res) => {
    try {
            const category = await Category.findOne({slug: req.params.slug}).exec();
            const products = await Product.find({category: category}).populate('category').select('-category').exec();
            res.json({
                category, products
            });
    } catch (error) {
        res.status(400).json({
            messsager: "Lỗi"
        })
    }
}


