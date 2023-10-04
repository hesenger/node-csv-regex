const fs = require("fs");
const csv = require("csv-parser");

// Regular expression to match slugs (modify this regex as needed)
const regexPattern =
  /^\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\/(alabama|alaska|arizona|arkansas|california|colorado|connecticut|delaware|florida|georgia|hawaii|idaho|illinois|indiana|iowa|kansas|kentucky|louisiana|maine|maryland|massachusetts|michigan|minnesota|mississippi|missouri|montana|nebraska|nevada|new-hampshire|new-jersey|new-mexico|new-york|north-carolina|north-dakota|ohio|oklahoma|oregon|pennsylvania|rhode-island|south-carolina|south-dakota|tennessee|texas|utah|vermont|virginia|washington|west-virginia|wisconsin|wyoming)$/;

// Array to store filtered entries
const filteredEntries = [];

// Read and parse the CSV file
fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (row) => {
    // Check if the 'slug' column matches the regex
    if (regexPattern.test(row.slug)) {
      filteredEntries.push(row);
    }
  })
  .on("end", () => {
    // Output the filtered entries
    filteredEntries.forEach((filteredEntries) => {
      console.log(filteredEntries.slug);
    });
  });
