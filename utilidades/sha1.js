const crypto = require('crypto');

function encryptSHA1(str) {
    const sha1Hash = crypto.createHash('sha1');
    sha1Hash.update(str);
    const encryptedStr = sha1Hash.digest('hex');
    return encryptedStr;
  }

module.exports = {
    encryptSHA1
}