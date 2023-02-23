import { CIDString, Filelike, Web3Storage, getFilesFromPath, File } from 'web3.storage';

import { WEB3_STORAGE_API_KEY } from '~~/constants';

function getAccessToken(): string {
  return WEB3_STORAGE_API_KEY;
}

function Web3StorageProvider(): Web3Storage {
  return new Web3Storage({ token: getAccessToken() });
}

async function getFiles(path: string): Promise<Filelike[]> {
  const files = await getFilesFromPath(path);
  console.log(`read ${files.length} file(s) from ${path}`);
  return files;
}

async function storeFiles(name: string, description: string): Promise<CIDString> {
  const obj = { name: name, description: description };
  const buffer = Buffer.from(JSON.stringify(obj));

  const files = [new File([buffer], `${name}.json`)];
  const client = Web3StorageProvider();
  const cid = await client.put(files);
  console.log('stored files with cid:', cid);
  return cid;
}

async function storeImage(file: File): Promise<CIDString> {
  const files = [file];
  const client = Web3StorageProvider();
  const cid = await client.put(files);
  console.log('stored files with cid:', cid);
  return cid;
}

export { storeFiles, storeImage };
