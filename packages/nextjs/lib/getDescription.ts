const getDescription = async (descriptionCID: string) => {
  const res = await fetch(`https://w3s.link/ipfs/${descriptionCID}/description.txt`);
  const description = await res.text();
  return description;
};

export default getDescription;
