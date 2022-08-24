export const address = '0x7ED4F7176fce33D83913f1255902205BEbFCA7db';
export const abi = [
  'error AlreadyInitialized()',
  'error CannotSelfApprove(address)',
  'error IndexOutOfBounds()',
  'error InvalidTransferRecipient(address)',
  'error TokenAlreadyMinted(uint256)',
  'error TokenDoesNotExist(uint256)',
  'error Unauthorized(address addr)',
  'error ZeroAddress()',
  'event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)',
  'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
  'event Mint(address owner, uint256 nftId)',
  'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
  'function approve(address to, uint256 tokenId)',
  'function balanceOf(address holder) view returns (uint256)',
  'function getApproved(uint256 tokenId) view returns (address)',
  'function initialize(string tokenName, string tokenSymbol, string uri)',
  'function isApprovedForAll(address holder, address operator) view returns (bool)',
  'function isInitialized() view returns (bool)',
  'function mint(address owner, uint256 nftId)',
  'function name() view returns (string)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function safeTransferFrom(address from, address to, uint256 tokenId)',
  'function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)',
  'function setApprovalForAll(address operator, bool approved)',
  'function supportsInterface(bytes4 interfaceId) view returns (bool)',
  'function symbol() view returns (string)',
  'function tokenByIndex(uint256 index) view returns (uint256)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
  'function tokenURI(uint256 tokenId) view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function transferFrom(address from, address to, uint256 tokenId)',
  'error NoChange()',
  'error NotNominated(address addr)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function acceptOwnership()',
  'function initializeOwnerModule(address initialOwner)',
  'function isOwnerModuleInitialized() view returns (bool)',
  'function nominateNewOwner(address newNominatedOwner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function renounceNomination()',
  'error ImplementationIsSterile(address implementation)',
  'error NotAContract(address contr)',
  'error UpgradeSimulationFailed()',
  'event Upgraded(address implementation)',
  'function getImplementation() view returns (address)',
  'function simulateUpgradeTo(address newImplementation)',
  'function upgradeTo(address newImplementation)',
];
