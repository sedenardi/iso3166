var http = require('http');
var fs = require('fs');
var parseString = require('xml2js').parseString;

var ISO3166_URL = 'http://anonscm.debian.org/gitweb/?p=iso-codes/iso-codes.git;a=blob_plain;f=iso_3166/iso_3166.xml;hb=HEAD';

var getXml = function(cb) {
  http.get(ISO3166_URL, function(res){
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk){
      body += chunk;
    });
    res.on('end', function() {
      cb(null, body);
    });
  }).on('error', function(e) {
    cb(e);
  });
};

module.exports = function(cb) {
  getXml(function(err, res) {
    if (err) return cb(err);
    parseString(res, function (pErr, json) {
      if (pErr) return cb(pErr);
      var mapped = json['iso_3166_entries']['iso_3166_entry'].map(function(c) {
        return c['$'];
      });
      return cb(null, mapped);
    });
  });
};
