const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  // Remove the first byte if it's a full public key
  const slicedKey = publicKey.slice(1);

  const keccakHash = keccak256(slicedKey);

  // Return the last 20 bytes
  return keccakHash.slice(-20);
}

module.exports = getAddress;
