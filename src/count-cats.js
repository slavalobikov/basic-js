const CustomError = require("../extensions/custom-error");
module.exports = function countCats( matrix ) {
  //throw new CustomError('Not implemented');
   return matrix.reduce( (cats, levels) =>
       cats + levels.reduce( (catsOnLevel, level) =>
           (catsOnLevel + (level == "^^" ? 1 : 0) ),
       0),
       0);
  // remove line with error and write your code here
};
