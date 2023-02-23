// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./Campaign.sol";

contract PotatoPotata is Ownable {
  mapping(address => address[]) campaignsPerAddr;
  address[] campaigns;

  Campaign campaignContract;

  function registerCamapaign(
    string memory _name,
    string memory _descriptionCID,
    string memory _imageCID
  ) external returns (address) {
    campaignContract = new Campaign(_name, _descriptionCID, _imageCID);
    campaignsPerAddr[msg.sender].push(address(campaignContract));
    campaigns.push(address(campaignContract));
    return address(campaignContract);
  }

  function getCampaigns(uint256 cursor, bool all) external view returns (address[] memory data) {
    if (all) {
      return campaigns;
    }
    data = new address[](6);
    for (uint256 i = 0; i < 6; i++) {
      if (cursor + i >= campaigns.length) {
        return data;
      }
      data[i] = campaigns[cursor + i];
    }
    return data;
  }

  function getCampaignAddress(address _address) external view returns (address[] memory) {
    return campaignsPerAddr[_address];
  }
}
