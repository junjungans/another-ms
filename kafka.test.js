const { MessageProviderPact, providerWithMetadata } = require('@pact-foundation/pact');

describe('sampleRepository verification', () => {
  describe('kafka producer verifier', () => {
    describe('asyncCreate', () => {
      const kafkaProducers = {
        create: () => {
          return new Promise((resolve) => {
            resolve({
              id: 'id'
            });
          });
        }
      };

      const kafkaProvider = new MessageProviderPact({
        messageProviders: {
          'a message from kafka': providerWithMetadata(() => kafkaProducers.create(), {
            queue: 'sample'
          })
        },
        provider: 'kafka-another-ms',
        providerVersion: process.env.GIT_COMMIT,
        providerVersionBranch: process.env.GIT_BRANCH,
        pactBrokerUrl: process.env.BROKER_URL,
        pactBrokerUsername: 'userTesting',
        pactBrokerPassword: 'userTestingPassword',
        publishVerificationResult: true,
        consumerVersionSelectors: [{ latest: true }]
      });
      describe('kafkaProducers', () => {
        it('should verify consumer contract testing', () => {
          return kafkaProvider.verify();
        });
      });
    });
  });
});
