const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');

function extractZip(zipFilePath, extractToPath) {
    fs.createReadStream(zipFilePath)
        .pipe(unzipper.Extract({ path: extractToPath }))
        .on('close', () => {
            console.log(`Extraction complete to: ${extractToPath}`);
        })
        .on('error', (err) => {
            console.error(`Extraction failed: ${err}`);
        });
}


const zipPath = path.join(__dirname, 'archiveNew.zip');       
const outputPath = path.join(__dirname, 'archiveNewExtracted'); 
extractZip(zipPath, outputPath);
