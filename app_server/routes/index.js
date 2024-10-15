const express = require('express');
const router = express.Router();
const ctrlLocations = 
require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/raja', ctrlLocations.raja);
router.get('/sri', ctrlLocations.sri);
router.get('/reddy', ctrlLocations.reddy);
router.get('/location/review/new', ctrlLocations.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/Reviews', ctrlOthers.Reviews);
router.post('/location/review', ctrlLocations.submitReview);
module.exports = router;