var Zone = require('../models/Zone');

module.exports = {
  find: function(params, callback){
    Zone.find(params, function(err, zones){
      if(err){
        callback(err, null)
        return
      }

      callback(null, zones)
    })
  },
  findById: function(id, callback){
    Zone.findById(id, function(err, zone){
      if(err){
        callback(err, null)
        return
      }

      callback(null, zone)
    })
  },
  create: function(params, callback){
    var zips = params['zipCodes'];
    var zip = zips.split(',');
    var newZips = [];
    zip.forEach(function(zipcode){
      newZips.push(zipcode.trim());
    })

    params['zipCodes'] = newZips;

    Zone.create(params, function(err, zone){
      if(err){
        callback(err, null)
        return
      }

      callback(null, zone)
    })
  },
  update: function(){

  }
}
