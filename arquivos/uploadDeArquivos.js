const fs = require('fs');

fs.createReadStream('./imagens/lhassa.jpg')
    .pipe(fs.createWriteStream('./imagens/lhassa-stream.jpg'))
    .on('finish', () => console.log('stream finalizada'))