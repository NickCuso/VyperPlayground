const artifact = artifacts.require("BytesArray");

contract("BytesArray", () => {
  let contract;

  before(async () => {
    contract = await artifact.new();
  });

  it("testPublic fails", async () => {
    await contract.publicMethod();
  });

  it("testPublicWithData works", async () => {
    await contract.publicMethodWithData(web3.utils.asciiToHex("Testing"));
  });

  it("testPublicWithHop fails", async () => {
    await contract.publicMethodWithHop(web3.utils.asciiToHex("Testing"));
  });
});
