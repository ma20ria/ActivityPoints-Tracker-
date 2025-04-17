const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const userController = require('../controllers/userController');

// Create a mock express app
const app = express();
app.use(express.json());

// Mock authentication middleware
const mockAuth = (req, res, next) => {
  req.user = {
    _id: 'mock-user-id',
    role: 'teacher',
    department: 'Computer Science'
  };
  next();
};

// Mock the routes with authentication middleware
app.get('/api/users/:id', mockAuth, userController.getUserById);

// Mock the User model
jest.mock('../models/User', () => {
  return {
    findById: jest.fn().mockReturnThis(),
    select: jest.fn()
  };
});

describe('User Controller Tests', () => {
  let User;

  // Get fresh copy of User mock before each test
  beforeEach(() => {
    jest.clearAllMocks();
    User = require('../models/User');
  });

  describe('getUserById', () => {
    it('should return 404 if user is not found', async () => {
      // Mock User.findById().select() to return null
      User.select.mockResolvedValue(null);

      const response = await request(app)
        .get('/api/users/123')
        .set('Authorization', 'Bearer test-token');

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('User not found');
    });

    it('should return user data if found', async () => {
      // Mock a user object
      const mockUser = {
        _id: '123',
        name: 'Test User',
        email: 'test@example.com',
        role: 'student',
        department: 'Computer Science'
      };

      // Mock User.findById().select() to return the mock user
      User.select.mockResolvedValue(mockUser);

      const response = await request(app)
        .get('/api/users/123')
        .set('Authorization', 'Bearer test-token');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockUser);
    });

    it('should return 500 if there is a server error', async () => {
      // Mock User.findById().select() to throw an error
      User.select.mockRejectedValue(new Error('Database error'));

      const response = await request(app)
        .get('/api/users/123')
        .set('Authorization', 'Bearer test-token');

      expect(response.status).toBe(500);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Server Error');
    });
  });
}); 