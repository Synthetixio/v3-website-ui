export const address = '0x02BFAF3bd7e67d238df13A5996bbbe2068433A11';
export const abi = [
  'error FailedTransfer(address from, address to, uint256 value)',
  'error InsufficientMarketCollateralDepositable(uint128 marketId, address collateralType, uint256 amountToDeposit)',
  'error InsufficientMarketCollateralWithdrawable(uint128 marketId, address collateralType, uint256 amountToWithdraw)',
  'error Unauthorized(address addr)',
  'event MarketCollateralDeposited(uint128 indexed marketId, address indexed collateralType, uint256 amount, address indexed sender)',
  'event MarketCollateralWithdrawn(uint128 indexed marketId, address indexed collateralType, uint256 amount, address indexed sender)',
  'event MaximumMarketCollateralConfigured(uint128 indexed marketId, address indexed collateralType, uint256 amount, address indexed sender)',
  'function configureMaximumMarketCollateral(uint128 marketId, address collateralType, uint256 amount)',
  'function depositMarketCollateral(uint128 marketId, address collateralType, uint256 amount)',
  'function getMarketCollateralAmount(uint128 marketId, address collateralType) view returns (uint256)',
  'function getMaximumMarketCollateral(uint128 marketId, address collateralType) view returns (uint256)',
  'function withdrawMarketCollateral(uint128 marketId, address collateralType, uint256 amount)',
];
