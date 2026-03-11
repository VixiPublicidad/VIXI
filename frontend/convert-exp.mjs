import sharp from 'sharp';

async function convert() {
  await sharp('C:/Users/dario/.gemini/antigravity/brain/841fdd18-c7e1-42c8-b3c3-4e80093516ff/experiencia_1_1773265563701.png')
    .avif()
    .toFile('c:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/public/gallery/experiencia_1.avif');
    
  await sharp('C:/Users/dario/.gemini/antigravity/brain/841fdd18-c7e1-42c8-b3c3-4e80093516ff/experiencia_2_1773265578146.png')
    .avif()
    .toFile('c:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/public/gallery/experiencia_2.avif');
    
  await sharp('C:/Users/dario/.gemini/antigravity/brain/841fdd18-c7e1-42c8-b3c3-4e80093516ff/experiencia_3_1773265594258.png')
    .avif()
    .toFile('c:/Users/dario/Desktop/WebDev/CREORAMA/VIXI/vixi/frontend/public/gallery/experiencia_3.avif');
}

convert().catch(console.error);
