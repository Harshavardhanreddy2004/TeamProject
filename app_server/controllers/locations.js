const {Review} = require("../models/review.js")
const homelist = (req, res) => {
    res.render('locations-list', {
      title:'Fertilizers- find a crop to spary the Fertilizers',
      pageHeader: {
        title: 'FertilizerShops',
        strapline: 'Fertilizers- find a crop to spary the Fertilizers'
      },
      sidebar: 'FertilizeFind helps you locate the perfect shop for your garden needs. Whether its organic compost, plant food, or soil enhancers, let FertilizeFind point you to the right place for a thriving garden' ,
         locations:[{
           name: 'Sri Sai Fertilizer Shop',
           address: 'Pochampalli(V) Regonda(M) Bhupalpllay(D)',
           rating: 4,
           facilities: ['Seeds', 'Fertilizers', 'Pesticides'],
           distance: '100m',
           link:"/location"
         },{
           name: 'Raja Rajeshwara Fertilizers and Pesticides',
           address: 'Regonda(M) ',
           rating: 3,
           facilities: ['Seeds', 'Fertilizers', 'Pesticides'],
           distance: '200m',
           link:"/raja"
         },{
           name: 'Sri Laxminarasimha Fertilizers and Pesticides',
           address: 'Near Parkal',
           rating: 2,
           facilities: [ 'Fertilizers', 'Pesticides'],
           distance: '250m',
           link:"/sri"
          },{
            name: 'Reddy Fertilizers and Pesticides',
            address: 'Ghanpur',
            rating: 1,
            facilities: [ 'Fertilizers', 'Pesticides'],
            distance: '150m',
            link:"/Reddy"
         }]
       });
      };
         /* GET 'Location info' page */
    const locationInfo = (req, res) => {
       res.render('location-info', { title: 'Location info' });
      };
      const raja = (req, res) => {
        res.render('raja', { title: 'Raja Rajeshwara Fertilizers and Pesticides' });
       };
       const sri = (req, res) => {
        res.render('sri', { title: 'Sri Laxminarasimha Fertilizers and Pesticides' });
       };
       const reddy = (req, res) => {
        res.render('reddy', { title: ' Reddy Fertilizers and Pesticides' });
       };
      /* GET 'Add review' page */
      const addReview = (req, res) => {
       res.render('location-review-form', { title: 'Add review' });
      };
      const Reviews = (req, res) => {
        res.Render('Reviews', { title: 'Reviews' });
       };
// Submit Review Route
const submitReview = async (req, res) => {
  const { name, rating, review } = req.body;
console.log(req.body)
  // Create a new review instance
  const newReview = new Review({
    name: name,
    rating: parseInt(rating, 10), // Ensure the rating is saved as a number
    review: review
  });

  try {
    // Save the review to the database
    await newReview.save();
    console.log('Review saved:', newReview);

    // Redirect to the home page after submission
    res.redirect('/');
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).send('Error saving review');
  }
};

      module.exports = {
       homelist,
       locationInfo,
       raja,
       sri,
       reddy,
       addReview,
       Reviews,
       submitReview
      };
 