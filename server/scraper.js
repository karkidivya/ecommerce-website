// this is for scrapping the product off of daraz for 
//data collection
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth' 
import dotenv from 'dotenv'

//curom imoports
import productSchema from './models/productShema.js'
import Database from './utils/db.js'

const db = new Database()
dotenv.config()
const URI = process.env.MONGODB_URI
await db.connectDB( URI )

puppeteer.use(StealthPlugin())
const browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
      args: [`--window-size=1920,1080`],
      defaultViewport: {
        width:1920,
        height:1080
      },
      devtools: true,
      protocolTimeout: 1000000
    });

const page = await  browser.newPage()
await page.setUserAgent( 'await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36');
// scrapping for daraz
await  page.goto('https://www.daraz.com.np/mens-clothing/?page=1');

// for each memmber of the array productCategories
//  the following code will search for it in the seaarch 
// bar and then scrape the required data

await  page.waitForSelector('.inner--SODwy');
const scrapedItems = []
for ( let i = 0; i < 10; i++){
    await page.waitForSelector('.inner--SODwy');
    const result =  await  page.$$eval( '.inner--SODwy',(elements) =>{
        const scrapedItem = []
        for ( const element of elements) {
        const productName = element.querySelector('.title--wFj93 > a').textContent;
        // const productURL = element.querySelector('.title--wFj93 > a').href;
        const priceInString = element.querySelector('.price--NVB62 > span').textContent;
        const productPrice = Number(priceInString.replace(/[^0-9]+/g, ''));
        const productImage = element.querySelector('.mainPic--ehOdr > a > img').src;
        
        scrapedItem.push( { title: productName, price: productPrice, image: productImage });
        }
        return scrapedItem
    })
    scrapedItems.push( ...result ) 
    debugger;
    const next = await page.$$('.ant-pagination-item-link')
    await next[2].click()
}
//close the page and browser instance
await page.close()
await browser.close()

//print the length of the scrapped items list
console.log( scrapedItems[0])


for (const item of scrapedItems){
    const product = new productSchema(item)
    await product.save()
    console.log('Product saved to the database')
}

db.closeDB()