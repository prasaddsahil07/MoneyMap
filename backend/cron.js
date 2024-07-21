import { log } from "console";
import cron from "cron";
import https from "https";

const URL = "https://moneymap-bqi8.onrender.com"

const job = new cron.CronJob('*/10 * * * *', function(){
    https.get(URL, (res) => {
        if(res.statusCode === 200){
            console.log("request sent successfully");
        }
        else{
            console.log("GET request failed", res.statusCode);
        }
    }).on('error', (e) => {
        console.log("Error while sending cron request", e);
    })
})

export default job;