const { Verifier } = require("@pact-foundation/pact");
const initialize = require("./index");

const server = initialize();

describe("another-ms", () => {
  it("should verify contract", () => {
    const opts = {
      provider: "another-ms",
      providerBaseUrl: process.env.PROVIDER_URL,
      pactBrokerUrl: process.env.BROKER_URL,
      enablePending: true,
      consumerVersionSelectors: [{ latest: true }],
      publishVerificationResult: true,
      providerVersion: process.env.GIT_COMMIT,
      providerVersionBranch: process.env.GIT_BRANCH,
      pactBrokerUsername: 'userTesting',
      pactBrokerPassword: 'userTestingPassword'
    };

    return new Verifier(opts).verifyProvider().finally(() => {
      console.log("Pact Verification Complete!");
      server.close();
    });
  });
});
