let bucket = [`salt`,`rice`,`veg`,`oil`]
const briyanipromise = new Promise((resolve,reject)=>
{
    if(bucket.includes(`salt`)&&bucket.includes(`rice`)&&bucket.includes(`veg`)&& bucket.includes(`oil`)){
        resolve(`all the ingredients are available`)
    }
    else{
        reject(`some ingredients are missing`)
    }
})

briyanipromise.then((buck)=>{
    console.log(buck);
}).catch((err)=>{
    console.log(err);
})

setTimeout(()=>{
    console.log(`this is testing priority`);
})