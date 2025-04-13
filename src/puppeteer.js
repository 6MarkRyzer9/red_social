import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });

  await delay(2000);

  let  url = "https://datos.sinim.gov.cl/ficha_comunal.php";

  const page = await browser.newPage();
  await delay(4000);
  page.goto(url,{waitUntil: "domcontentloaded" })
  await delay(4000);
  page.setViewport({ width: 1080, height: 1024});
  await delay(4000);

  //Algarrobo
  page.hover('#bar > nav > dl > dt > a');
  await delay(3000);
  page.click('#municipio_chzn > a');
  await delay(3000);
  page.click('#municipio_chzn_o_1');
  await delay(3000);

  const html = await page.content();
  await delay(3000);
  fs.writeFileSync("algarrobo.html", html);

  //alhue
  //page.hover('#bar > nav > dl > dt > a');
  //await delay(3000);
  //page.click('#municipio_chzn > a');
  //await delay(3000);
  //page.click('#municipio_chzn_o_1');
//  await delay(3000);

  console.log("Guardado!!");

  await browser.close();
})();

const delay = async (time = 2000) =>
  await new Promise((resolve) => setTimeout(resolve, time));
