
//2nd edition
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Review = require("./review.js");

const listingSchema = new Schema({

    title: {
        type: String,
        required: [true, "Title is required"],
    },

    description: {
        type: String,
        required: [true, "Description is required"],
    },

    image: {
        url: String,
        filename: String,
    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be greater than 0"],
    },

    location: {
        type: String,
        required: [true, "Location is required"],
    },

    country: {
        type: String,
        required: [true, "Country is required"],
    },

    // NEW FIELD
coordinates: {
    lat: {
        type: Number,
        default: 20.5937,
    },
    lng: {
        type: Number,
        default: 78.9629,
    },
},

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

// Delete related reviews automatically
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({
            _id: { $in: listing.reviews },
        });

        console.log("Related reviews deleted");
    }
});

module.exports = mongoose.model("Listing", listingSchema);