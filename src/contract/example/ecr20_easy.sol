// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title A Comprehensive ERC20 Token Example
/// @author 
/// @notice This contract demonstrates an ERC20 implementation with additional features.
/// @dev Implements ERC20 standard with extensions for learning purposes.

contract MyERC20Token {
    // Events
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Paused(address account);
    event Unpaused(address account);
    event Minted(address indexed to, uint256 value);
    event Burned(address indexed from, uint256 value);

    // State variables
    string public name; // Token name
    string public symbol; // Token symbol
    uint8 public decimals; // Number of decimals
    uint256 private _totalSupply; // Total supply of the token
    bool private _paused; // Pause state of the contract

    // Mappings for balances and allowances
    mapping(address => uint256) private _balances; // Tracks balances of addresses
    mapping(address => mapping(address => uint256)) private _allowances; // Tracks allowances

    // Access control
    address public owner; // Owner of the contract
    mapping(address => bool) private _minters; // Tracks authorized minters

    /// @notice Modifier to restrict access to owner only
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    /// @notice Modifier to restrict access to authorized minters
    modifier onlyMinter() {
        require(_minters[msg.sender], "Caller is not a minter");
        _;
    }

    /// @notice Modifier to ensure the contract is not paused
    modifier whenNotPaused() {
        require(!_paused, "Contract is paused");
        _;
    }

    /// @notice Modifier to ensure the contract is paused
    modifier whenPaused() {
        require(_paused, "Contract is not paused");
        _;
    }

    /// @dev Constructor to initialize the token
    /// @param _name Token name
    /// @param _symbol Token symbol
    /// @param _decimals Number of decimals
    /// @param initialSupply Initial supply of tokens
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 initialSupply
    ) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        owner = msg.sender;
        _mint(msg.sender, initialSupply);
    }

    /// @notice Returns the total supply of the token
    /// @return The total supply
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    /// @notice Returns the balance of a specific account
    /// @param account The address of the account
    /// @return The balance of the account
    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    /// @notice Transfers tokens to a specific address
    /// @param to The address of the recipient
    /// @param amount The amount of tokens to transfer
    /// @return Whether the transfer was successful
    function transfer(address to, uint256 amount) public whenNotPaused returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }

    /// @notice Approves a spender to spend a specific amount of tokens on behalf of the caller
    /// @param spender The address of the spender
    /// @param amount The amount of tokens to approve
    /// @return Whether the approval was successful
    function approve(address spender, uint256 amount) public whenNotPaused returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }

    /// @notice Returns the remaining amount a spender is allowed to spend on behalf of an owner
    /// @param owner The address of the owner
    /// @param spender The address of the spender
    /// @return The remaining allowance
    function allowance(address owner, address spender) public view returns (uint256) {
        return _allowances[owner][spender];
    }

    /// @notice Transfers tokens from one address to another
    /// @param from The address of the sender
    /// @param to The address of the recipient
    /// @param amount The amount of tokens to transfer
    /// @return Whether the transfer was successful
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public whenNotPaused returns (bool) {
        uint256 currentAllowance = _allowances[from][msg.sender];
        require(currentAllowance >= amount, "Transfer amount exceeds allowance");
        _approve(from, msg.sender, currentAllowance - amount);
        _transfer(from, to, amount);
        return true;
    }

    /// @notice Mints new tokens
    /// @param to The address to receive the minted tokens
    /// @param amount The amount of tokens to mint
    function mint(address to, uint256 amount) public onlyMinter whenNotPaused {
        _mint(to, amount);
        emit Minted(to, amount);
    }

    /// @notice Burns tokens from the caller's balance
    /// @param amount The amount of tokens to burn
    function burn(uint256 amount) public whenNotPaused {
        _burn(msg.sender, amount);
        emit Burned(msg.sender, amount);
    }

    /// @notice Pauses the contract
    function pause() public onlyOwner whenNotPaused {
        _paused = true;
        emit Paused(msg.sender);
    }

    /// @notice Unpauses the contract
    function unpause() public onlyOwner whenPaused {
        _paused = false;
        emit Unpaused(msg.sender);
    }

    /// @notice Grants minter role to an address
    /// @param account The address to grant the minter role
    function addMinter(address account) public onlyOwner {
        _minters[account] = true;
    }

    /// @notice Revokes minter role from an address
    /// @param account The address to revoke the minter role
    function removeMinter(address account) public onlyOwner {
        _minters[account] = false;
    }

    // Internal functions
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal {
        require(from != address(0), "Transfer from zero address");
        require(to != address(0), "Transfer to zero address");
        require(_balances[from] >= amount, "Transfer amount exceeds balance");

        _balances[from] -= amount;
        _balances[to] += amount;
        emit Transfer(from, to, amount);
    }

    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "Mint to zero address");

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "Burn from zero address");
        require(_balances[account] >= amount, "Burn amount exceeds balance");

        _balances[account] -= amount;
        _totalSupply -= amount;
        emit Transfer(account, address(0), amount);
    }

    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal {
        require(owner != address(0), "Approve from zero address");
        require(spender != address(0), "Approve to zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }
}