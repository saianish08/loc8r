module.exports.homelist = function(req,res){
    res.render('locations-list',{title:'Home'});
};

module.exports.locationInfo = function(req,res){
    res.render('location-info',{title:'Location Info'});
};

module.exports.locationInfo2 = function(req,res){
    res.render('location-info2',{title:'Location Info'});
};

module.exports.locationInfo3 = function(req,res){
    res.render('location-info3',{title:'Location Info'});
};

module.exports.addReview = function(req,res){
    res.render('location-review-form',{title:'Add Review'});
};

module.exports.addReview2 = function(req,res){
    res.render('location-review-form2',{title:'Add Review'});
};

module.exports.addReview3 = function(req,res){
    res.render('location-review-form3',{title:'Add Review'});
};