import sharp from 'sharp';

async function convert() {
  await sharp('C:/Users/dario/.gemini/antigravity/brain/841fdd18-c7e1-42c8-b3c3-4e80093516ff/ciencia_pillar_1773262259084.png')
    .avif()
    .toFile('c:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/public/pillars/ciencia.avif');
    
  await sharp('C:/Users/dario/.gemini/antigravity/brain/841fdd18-c7e1-42c8-b3c3-4e80093516ff/experiencia_pillar_1773262272140.png')
    .avif()
    .toFile('c:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/public/pillars/experiencia.avif');
    
  await sharp('C:/Users/dario/.gemini/antigravity/brain/841fdd18-c7e1-42c8-b3c3-4e80093516ff/cercania_pillar_1773262286517.png')
    .avif()
    .toFile('c:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/public/pillars/cercania.avif');
}

convert().catch(console.error);
