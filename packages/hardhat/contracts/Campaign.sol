// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "./PP.sol";

contract Campaign {
  address admin;
  string public name;
  string public descriptionCID;
  string public imageCID;

  struct CampaignDetails {
    string name;
    string descriptionCID;
    string imageCID;
    uint256 totalArtists;
  }

  CampaignStatus campaignStatus = CampaignStatus.NOT_LIVE;

  PP nftContract;

  uint256 public totalArtists;

  mapping(address => string) public proposals;
  mapping (address => bool) public artists;

  enum CampaignStatus {
    NOT_LIVE,
    LIVE,
    ENDED
  }

  constructor(
    string memory _name,
    string memory _descriptionCID,
    string memory _imageCID
  ) {
    admin = msg.sender;
    name = _name;
    descriptionCID = _descriptionCID;
    imageCID = _imageCID;

    nftContract = new PP();
  }

  modifier onlyAdmin() {
    require(msg.sender == admin, "ERR:NA");
    _;
  }

  modifier onlyLiveStatus() {
    require(campaignStatus == CampaignStatus(uint256(1)), "ERR:NL");
    _;
  }

  modifier onlyNotLiveStatus() {
    require(campaignStatus == CampaignStatus(uint8(0)), "ERR:LE");
    _;
  }

  modifier onlyApprovedArtist() {
    require(artists[msg.sender], "ERR:NA");
    _;
  }

  function startCampaign() external onlyAdmin {
    campaignStatus = CampaignStatus.LIVE;
  }

  function endCampaign() external onlyAdmin {
    campaignStatus = CampaignStatus.ENDED;
  }

  function withdraw() external onlyAdmin {
    require(address(this).balance > 0, "ERR:ZB");
    require(campaignStatus == CampaignStatus.ENDED, "ERR:NE");

    (bool success, ) = msg.sender.call{ value: address(this).balance }("");
    require(success, "ERR:OW");
  }

  function submitProposal(string calldata _proposalCID) external onlyNotLiveStatus {
    proposals[msg.sender] = _proposalCID;
  }

  function acceptProposal(address _artistAddress) external onlyAdmin onlyNotLiveStatus {
    artists[_artistAddress] = true;
    totalArtists++;
  }

  function submitNFT(string calldata _tokenURI) external onlyLiveStatus onlyApprovedArtist {
    nftContract.safeMint(msg.sender, _tokenURI);
  }

  function getCampaignDetails() external view returns (CampaignDetails memory) {
    return CampaignDetails(name, descriptionCID, imageCID, totalArtists);
  }

  // FUNCTION: To tranfer the ERC721 to the buyer
  function buyNFT(
    uint256 tokenId,
    address payable artistAddress,
    uint8 artistSharePercentage,
    uint256 price
  ) external payable onlyLiveStatus {
    require(msg.value == price, "ERR:WP");

    uint256 artistShare = (price * artistSharePercentage * 100) / 10000;

    transferArtistShare(artistAddress, artistShare);

    nftContract.safeTransferFrom(artistAddress, msg.sender, tokenId);
  }

  function transferArtistShare(address payable artistAddress, uint256 artistShare) internal {
    (bool success, ) = artistAddress.call{ value: artistShare }("");
    require(success, "ERR:AS");
  }

  receive() external payable {}

  fallback() external payable {}
}
