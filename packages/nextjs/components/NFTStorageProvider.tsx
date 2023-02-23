import { NFTStorage } from 'nft.storage';
import { NFT_STORAGE_API_KEY } from '~~/constants';

async function getExampleImage(url: string): Promise<File> {
  let blob = await fetch(url).then((r) => r.blob());
  let dataUrl = await new Promise((resolve) => {
    let reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });

  console.log(dataUrl as File);
  return dataUrl as File;
}

async function storeExampleNFT(url: string, name: string, description: string): Promise<string> {
  const image = await getExampleImage(url);
  const nft = {
    image, // use image Blob as `image` field
    name: name,
    description: description,
  };

  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const metadata = await client.store(nft);

  return metadata.url;
}
