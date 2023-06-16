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
      devtools: false,
      protocolTimeout: 1000000,
    //   slowMo: 100,
    });

// const page = await  browser.newPage()
// await page.setUserAgent( 'Mozilla/5.0 (Windows NT 10.0; Win64; x64 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36');
// // scrapping for daraz
// await  page.goto('https://www.daraz.com.np/mens-clothing/?page=1');


function wait (ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}

export default async function capture(browser, url) {
  // Load the specified page

  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'load'});

  // Get the height of the rendered page
  const bodyHandle = await page.$('body');
  const { height } = await bodyHandle.boundingBox();
  debugger;
  await bodyHandle.dispose();

  // Scroll one viewport at a time, pausing to let content load
  const viewportHeight = page.viewport().height;
  let viewportIncr = 0;
  while ((viewportIncr + viewportHeight )< height) {
    await page.evaluate(_viewportHeight => {
      window.scrollBy(0, _viewportHeight);
    }, viewportHeight);
    await wait(400);
    viewportIncr = viewportIncr + viewportHeight;
  }

  // Scroll back to top
//   await page.evaluate(_ => {
//     window.scrollTo(0, 0);
//   });

  // Some extra delay to let images load
  await wait(100);

  await page.screenshot({path : 'screenshot.png',type: 'png'});
}

await capture( browser, 'https://en.wikipedia.org/wiki/Main_Page')
// for each memmber of the array productCategories
//  the following code will search for it in the seaarch 
// bar and then scrape the required data

// await  page.waitForSelector('.inner--SODwy');

// const scrapedItemLinks = []
// for ( let i = 0; i < 1; i++){
//     await page.waitForSelector('.inner--SODwy');
//     const itemLinks = await page.$$eval('.inner--SODwy', (elements) =>{
//         const links = []
//         for ( const element of elements) {
//             // debugger;
//             links.push( element.querySelector('.title--wFj93 > a').href)
//         }
//         return links
//     })
//     scrapedItemLinks.push( ...itemLinks )

//     // debugger;
//     // // scrap all the links for the items
//     // const itemLinks =await Promise.all( items.map( async ( item ) => {
//     //     const link = await item.$('.title--wFj93 > a')
//     //     console.log( link.href)
//     //     console.log( link )
//     //     return link

//     // const itemLinks =await Promise.all( items.map( async ( item ) => {
//     //     const link = await item.$('.title--wFj93 > a')
//     //     console.log( link.href)
//     //     console.log( link )
//     //     return link

//     // })
//     // const result =  await  page.$$eval( '.inner--SODwy',(elements) =>{
//     //     const scrapedItem = []
//     //     for ( const element of elements) {
//     //     const productName = element.querySelector('.title--wFj93 > a').textContent;
//     //     // const productURL = element.querySelector('.title--wFj93 > a').href;
//     //     const priceInString = element.querySelector('.price--NVB62 > span').textContent;
//     //     const productPrice = Number(priceInString.replace(/[^0-9]+/g, ''));
//     //     const productImage = element.querySelector('.mainPic--ehOdr > a > img').src;
        
//     //     scrapedItem.push( { title: productName, price: productPrice, image: productImage });
//     //     }
//     //     return scrapedItem
//     // })
//     // scrapedItemLinks.push( ...itemLinks ) 
//     debugger;
//     const next = await page.$$('.ant-pagination-item-link')
//     await next[next.length - 1 ].click()
// }
// const products = []
// for( let i = 0; i < scrapedItemLinks.length; i++ ){
//     console.log( 'bullshit \n',scrapedItemLinks[i])
//     await page.goto( scrapedItemLinks[i] )
//     await page.waitForSelector( '.pdp-block')
    
    
    
//     const product =  await page.$eval( '.pdp-block', element => {
//         // debugger;
//         var height = 0;
//         while(height != document.body.scrollHeight ){

//             window.scrollBy(0, 100)
//             height +=100
//             setTimeout( () =>{}, 5)
//         }
//         const titleElement = element.querySelector('.pdp-mod-product-badge-title')
//         const title = titleElement.textContent
//         console.log( title )
//         const priceInStringElement = element.querySelector('.pdp-price')
//         const priceInString = priceInStringElement.textContent
//         const price = Number(priceInString.replace(/[^0-9]+/g, ''))
//         const oldPriceElement = element.querySelector('.pdp-price_color_lightgray')
//         const oldPriceInString =   "" || oldPriceElement?.textContent
//         const oldPrice = Number(oldPriceInString?.replace(/[^0-9]+/g, ''))
//         const isNew = oldPriceElement ? true : false
//         const descriptionElements = Array.from(element.querySelectorAll('.pdp-product-highlights > ul > li'))
//         const description = descriptionElements.map( element => element.textContent)
//         // const category = ;
//         const imageElement = element.querySelector('.pdp-mod-common-image');
//         const image = imageElement.src
//         const ratingElement = element.querySelector('.score-average');
//         const rating = Number(ratingElement.textContent)
//         return { title, price , oldPrice, isNew, description, image, rating }
    
//     } )
//     console.log( product )
//     products.push( product )
// }
//close the page and browser instance
// await page.close()
await browser.close()

//print the length of the scrapped items list
// console.log( products[0])


// for (const product of products){
//     const product = new productSchema(item)
//     await product.save()
//     console.log('Product saved to the database')
// }

db.closeDB()