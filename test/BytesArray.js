const artifact = artifacts.require("BytesArray");

contract("BytesArray", () => {
  let contract;

  before(async () => {
    contract = await artifact.new();
  });

  it("testPublic should not fail", async () => {
    await contract.testPublic();
  });

  it("testPublicWithData should not fail", async () => {
    await contract.testPublic(web3.utils.asciiToHex("Testing"));
  });
});
