export const address = '0xD20a197537c02bC3069a97A5833679B7E05EC637';
export const abi = [
  'constructor()',
  'function allRoundDataShouldRevert() view returns (bool)',
  'function decimals() view returns (uint8)',
  'function entries(uint256) view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)',
  'function getAnswer(uint256 _roundId) view returns (int256)',
  'function getRoundData(uint80 _roundId) view returns (uint80, int256, uint256, uint256, uint80)',
  'function getTimestamp(uint256 _roundId) view returns (uint256)',
  'function keyDecimals() view returns (uint8)',
  'function latestRound() view returns (uint256)',
  'function latestRoundData() view returns (uint80, int256, uint256, uint256, uint80)',
  'function latestRoundDataShouldRevert() view returns (bool)',
  'function roundId() view returns (uint80)',
  'function setAllRoundDataShouldRevert(bool _shouldRevert)',
  'function setDecimals(uint8 _decimals)',
  'function setLatestAnswer(int256 answer, uint256 timestamp)',
  'function setLatestAnswerCurrent(int256 answer)',
  'function setLatestAnswerWithRound(int256 answer, uint256 timestamp, uint80 _roundId)',
  'function setLatestRoundDataShouldRevert(bool _shouldRevert)',
];
