const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            require: true
        },
        discount: {
            type: Number,
            default: 0
        },
        rating: {
            type: Number,
            default: 0
        },
        popular: {
            type: Boolean,
            default: false
        },
        Stock: {
            type: Number,
            default: 0
        },
        sold: {
            type: Number,
            default: 0
        },
        category: {
            type: ObjectId,
            ref: "Categoty",
            required: true,
        },
        image: {
            data: Buffer,
            contentType: String,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema);