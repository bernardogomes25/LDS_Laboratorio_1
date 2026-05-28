const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imgDir = path.join(__dirname, 'meu-portfolio/src/assets/img');

async function optimizeImages() {
  try {
    // Convert GIFs to WebP
    const gifs = ['GerenciamentoDeTarefas.gif', 'HotelManagement.gif', 'GerenciamentoAeroporto.gif'];

    for (const gif of gifs) {
      const inputPath = path.join(imgDir, gif);
      const outputPath = path.join(imgDir, gif.replace('.gif', '.webp'));

      console.log(`Converting ${gif} to WebP...`);
      await sharp(inputPath)
        .webp({ quality: 75 })
        .toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size / 1024 / 1024;
      const outputSize = fs.statSync(outputPath).size / 1024 / 1024;
      console.log(`✓ ${gif}: ${inputSize.toFixed(2)}MB → ${outputSize.toFixed(2)}MB`);
    }

    // Compress JPEG
    const jpegPath = path.join(imgDir, 'pfp.JPEG');
    const jpgPath = path.join(imgDir, 'pfp.jpg');

    console.log(`\nCompressing pfp.JPEG...`);
    await sharp(jpegPath)
      .jpeg({ quality: 85, progressive: true })
      .toFile(jpgPath);

    const jpegSize = fs.statSync(jpegPath).size / 1024;
    const jpgSize = fs.statSync(jpgPath).size / 1024;
    console.log(`✓ pfp.JPEG: ${jpegSize.toFixed(2)}KB → ${jpgSize.toFixed(2)}KB`);

    console.log('\n✅ Image optimization complete!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

optimizeImages();
