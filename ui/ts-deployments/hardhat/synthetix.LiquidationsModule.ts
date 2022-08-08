export const address = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';
export const abi = [
  'error FundAlreadyApproved(uint256 fundId)',
  'error FundAlreadyExists(uint256 fundId)',
  'error FundNotFound(uint256 fundId)',
  'error InsufficientAvailableCollateral(uint256 accountId, address collateralType, uint256 requestedAmount)',
  'error InvalidCollateralType(address collateralType)',
  'error InvalidParameters()',
  'error OnlyTokenProxyAllowed(address origin)',
  'error PositionOutOfBounds()',
  'event DelegationUpdated(bytes32 liquidityItemId, uint256 accountId, uint256 fundId, address collateralType, uint256 amount, uint256 leverage)',
  'event FundApprovedAdded(uint256 fundId)',
  'event FundApprovedRemoved(uint256 fundId)',
  'event FundCreated(address owner, uint256 fundId)',
  'event FundPositionSet(uint256 fundId, uint256[] markets, uint256[] weights, address executedBy)',
  'event NominatedNewOwner(address nominatedOwner, uint256 fundId)',
  'event OwnershipAccepted(address newOwner, uint256 fundId)',
  'event OwnershipRenounced(address target, uint256 fundId)',
  'event PositionAdded(bytes32 liquidityItemId, uint256 accountId, uint256 fundId, address collateralType, uint256 amount, uint256 leverage, uint256 shares, uint256 initialDebt)',
  'event PositionDecreased(bytes32 liquidityItemId, uint256 fundId, address collateralType, uint256 amount, uint256 leverage, uint256 shares, uint256 initialDebt)',
  'event PositionIncreased(bytes32 liquidityItemId, uint256 fundId, address collateralType, uint256 amount, uint256 leverage, uint256 shares, uint256 initialDebt)',
  'event PositionRemoved(bytes32 liquidityItemId, uint256 accountId, uint256 fundId, address collateralType)',
  'event PreferredFundSet(uint256 fundId)',
  'function isLiquidatable(uint256 accountId, uint256 fundId, address collateralType) returns (bool)',
  'function liquidate(uint256 accountId, uint256 fundId, address collateralType)',
];
