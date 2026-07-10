const Listing = require("../models/listing");
const axios = require("axios");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
 const listing =await Listing.findById(req.params.id)
 .populate("owner")
 .populate({
    path:"reviews",
    populate:{
        path:"author",
    },
 });
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    console.log("Owner after populate:", listing.owner);
    console.log("Reviews:", JSON.stringify(listing.reviews, null, 2));
     console.log(listing);
    console.log(listing.geometry);
    res.render("listings/show.ejs",{ listing }
    );
};


module.exports.createListing = async (req, res) => {

    if (!req.file) {
        req.flash("error", "Please upload an image.");
        return res.redirect("/listings/new");
    }

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;

    newListing.image = {
        url: req.file.path,
        filename: req.file.filename,
    };

    try {

        const address = `${newListing.location}, ${newListing.country}`;
        const response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
                params: {
                    q: address,
                    format: "jsonv2",
                    limit: 1,
                },
                headers: {
                    "User-Agent": "wanderlust-app",
                },
            }
        );
          console.log("Nominatim Response:", response.data);
 console.log("Coordinates:", newListing.coordinates);
        if (response.data.length > 0) {

      newListing.coordinates = {
    lat: parseFloat(response.data[0].lat),
    lng: parseFloat(response.data[0].lon),
}
};

  console.log("Coordinates saved:", newListing.coordinates);
    } catch (err) {

        console.log("Geocoding Error:", err.message);

    }

    await newListing.save();
console.log("Saved Listing:");
console.log(JSON.stringify(newListing, null, 2));
    req.flash("success", "New Listing Created!");

    res.redirect("/listings");

};

    module.exports.renderEditForm = async (req, res) => {
        const listing =await Listing.findById(req.params.id);
    if (!listing) {
            req.flash("error", "Listing not found");
            return res.redirect("/listings");
        }

        let originalImageUrl = listing.image.url;
        originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
        res.render("listings/edit.ejs",{ listing, originalImageUrl });
    };


    module.exports.updateListing = async (req, res) => {
        let {id} = req.params;
            let listing = await Listing.findByIdAndUpdate(
                req.params.id,
                req.body.listing
            );
            
                if(typeof req.file !== "undefined"){
            let url=req.file.path;
             let filename=req.file.filename;
             listing.image = {url,filename};
            await listing.save();
                }

            req.flash("success", "Listing updated");
            res.redirect(`/listings/${req.params.id}`);
        };

        module.exports.destroyListing = async (req, res) => {
        await Listing.findByIdAndDelete(
            req.params.id
        ); 
        req.flash("success", "Listing deleted");
        res.redirect("/listings");
    };