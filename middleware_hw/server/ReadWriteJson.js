const fs = require("fs");
const FILE_PATH = "stats.json";

// read json object from file
const readStats = () => {
  let result = {};
  try {
    result = JSON.parse(fs.readFileSync(FILE_PATH));
    console.log(result)
  } catch (err) {
    
    console.error(err);
    return false
  }
  return result;
};

// dump json object to file
const dumpStats = (stats) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(stats), { flag: "w+" });
  } catch (err) {
    console.error(err);
  }
};


exports.dumpStats = dumpStats;
exports.readStats = readStats;
