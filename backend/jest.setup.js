// Mock environment variables
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';
process.env.MONGODB_URI = 'mongodb://localhost:27017/activity-points-test';

// Mock mongoose connection
jest.mock('mongoose', () => ({
  connect: jest.fn(),
  connection: {
    on: jest.fn(),
    once: jest.fn(),
    close: jest.fn()
  },
  Schema: jest.fn().mockImplementation(() => ({
    pre: jest.fn(),
    methods: {},
    statics: {}
  }))
}));

// Global beforeAll and afterAll hooks
beforeAll(async () => {
  // Add any global setup here
});

afterAll(async () => {
  // Add any global cleanup here
}); 