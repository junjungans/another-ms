const { Verifier } = require("@pact-foundation/pact");
const initialize = require("./index");

const server = initialize();

describe("another-ms", () => {
  it("should verify contract", () => {
    const opts = {
      provider: "another-ms",
      providerBaseUrl: "http://localhost:3000",
      pactBrokerUrl: "http://localhost:9292",
      enablePending: true,
      consumerVersionSelectors: [{ latest: true }],
      publishVerificationResult: true,
      providerVersion: process.env.GIT_COMMIT,
      providerVersionBranch: process.env.GIT_BRANCH,
    };

    return new Verifier(opts).verifyProvider().then((output) => {
      console.log("Pact Verification Complete!");
      server.close();
    });
  });
});
