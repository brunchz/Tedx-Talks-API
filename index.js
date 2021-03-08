let Parser = require('rss-parser');
let parser = new Parser();

const getArticles = async () => {
var listOfTedTalks = []
  let feed = await parser.parseURL('https://pa.tedcdn.com/feeds/talks.rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    listOfTedTalks.push(item.title + ':' + item.link)
  });
  return listOfTedTalks.length
}
getArticles().then(console.log)