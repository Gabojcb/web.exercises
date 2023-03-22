import {promises, readFile} from 'fs';

(async ()=> {
    const files = await promises.readdir('./');


    const readFiles = files.filter(async item => {
        const stats = await promises.stat(item)
        console.log('estoy leyendo');
       if(stats.isDirectory())return;
       return await promises.readFile(item, 'utf8');     
    });
    console.log('estoy leyendo otra vez', readFiles);
    const content = await Promise.all(readFiles);
    content.forEach(item => console.log(`\n------------------${item}\n--------------------`));
})();