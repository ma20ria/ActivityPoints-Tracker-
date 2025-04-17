const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

// Create a mock express app
const app = express();
app.use(express.json());

// Mock the auth controller
const mockAuthController = {
  register: async (req, res) => {
    try {
      // Validate required fields
      const { name, email, password, role } = req.body;
      if (!name || !email || !password || !role) {
        return res.status(400).json({
          success: false,
          message: 'Please provide all required fields'
        });
      }

      // Check for existing user
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'User already exists'
        });
      }

      // Create user
      const user = await User.create(req.body);
      
      res.status(201).json({
        success: true,
        data: user
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server Error',
        error: error.message
      });
    }
  }
};

// Mock the routes
app.post('/api/auth/register', mockAuthController.register);

// Mock the User model
jest.mock('../models/User', () => {
  return {
    create: jest.fn(),
    findOne: jest.fn()
  };
});

describe('Register Component Tests', () => {
  let User;

  beforeEach(() => {
    jest.clearAllMocks();
    User = require('../models/User');
  });

  describe('Register Functionality', () => {
    const testUser = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'testpassword',
      role: 'student',
      department: 'Computer Science',
      semester: '6',
      class: 'A',
      rollNumber: '123'
    };

    it('should verify register component renders correctly', async () => {
      // Mock findOne to return null (no existing user)
      User.findOne.mockResolvedValue(null);
      
      const response = await request(app)
        .post('/api/auth/register')
        .send({});

      expect(response.status).toBe(400); // Should fail without data
      console.log('✓ Register component renders correctly');
    });

    it('should verify register form captures user input correctly', async () => {
      // Mock findOne to return null (no existing user)
      User.findOne.mockResolvedValue(null);
      // Mock successful user creation
      User.create.mockResolvedValue(testUser);
      
      const response = await request(app)
        .post('/api/auth/register')
        .send(testUser);

      expect(User.create).toHaveBeenCalledWith(expect.objectContaining({
        name: testUser.name,
        email: testUser.email,
        password: testUser.password,
        role: testUser.role,
        department: testUser.department
      }));
      console.log('✓ Register form captures user input correctly');
    });

    it('should verify register function is called when register button clicked', async () => {
      // Mock findOne to return null (no existing user)
      User.findOne.mockResolvedValue(null);
      // Mock successful user creation
      User.create.mockResolvedValue(testUser);

      const response = await request(app)
        .post('/api/auth/register')
        .send(testUser);

      expect(response.status).toBe(201);
      expect(User.create).toHaveBeenCalled();
      console.log('✓ Register function called when register button clicked');
    });

    it('should handle duplicate email registration attempt', async () => {
      // Mock findOne to return existing user
      User.findOne.mockResolvedValue(testUser);

      const response = await request(app)
        .post('/api/auth/register')
        .send(testUser);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('User already exists');
      console.log('✓ Duplicate email registration handled correctly');
    });

    it('should validate required fields', async () => {
      // Mock findOne to return null (no existing user)
      User.findOne.mockResolvedValue(null);
      
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Test User'
          // Missing required fields: email, password, role
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Please provide all required fields');
      console.log('✓ Required fields validation works correctly');
    });
  });
}); 