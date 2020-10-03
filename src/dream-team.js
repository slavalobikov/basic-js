const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  return members.map(name => {
    if (typeof name !== 'string') return;
    return name.trim()[0].toUpperCase();
  }).sort().join('');
};
