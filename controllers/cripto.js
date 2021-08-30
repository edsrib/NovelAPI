const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

module.exports.Criptografar = function(ret,req){
    var crypto = require('crypto');
    var assert = require('assert');
    
    var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
    var key = 'Novel-API';
    
    var cipher = crypto.createCipher(algorithm, key);  
    var encrypted = cipher.update(req, 'utf8', 'hex') + cipher.final('hex');
    return encrypted;
};

module.exports.DeCriptografar = function(ret,req){
    var assert = require('assert');

    var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
    var key = 'Novel-API';
   
    var decipher = crypto.createDecipher(algorithm, key);
    var decrypted = decipher.update(req, 'hex', 'utf8') + decipher.final('utf8');
    
    return decrypted;
};