const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const path = require('path');

describe('Registration Form Tests', () => {
  let driver;
  const baseUrl = 'http://localhost:4200';
  const geckodriverPath = 'C:\\Users\\user\\ActivityPoints-Tracker-\\geckodriver.exe';

  beforeAll(async () => {
    try {
      const options = new firefox.Options();
      // Temporarily disable headless mode for debugging
      // options.addArguments('-headless');
      
      driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .setFirefoxService(new firefox.ServiceBuilder(geckodriverPath))
        .build();
    } catch (error) {
      console.error('Error setting up Firefox driver:', error);
      throw error;
    }
  }, 30000);

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  beforeEach(async () => {
    await driver.get(`${baseUrl}/auth/signup`);
    // Wait for the form to be present and Angular to be ready
    await driver.wait(until.elementLocated(By.tagName('form')), 10000);
    await driver.wait(async () => {
      const readyState = await driver.executeScript('return document.readyState');
      return readyState === 'complete';
    }, 10000);
  });

  const scrollIntoView = async (element) => {
    await driver.executeScript('arguments[0].scrollIntoView({block: "center", behavior: "instant"});', element);
    await driver.sleep(1000); // Increased delay after scrolling
  };

  const waitForElement = async (locator, timeout = 10000) => {
    const element = await driver.wait(until.elementLocated(locator), timeout);
    await driver.wait(until.elementIsVisible(element), timeout);
    await scrollIntoView(element);
    return element;
  };

  const fillRegistrationForm = async (formData) => {
    // Fill basic fields
    const nameInput = await waitForElement(By.id('name'));
    await nameInput.sendKeys(formData.name);

    const emailInput = await waitForElement(By.id('email'));
    await emailInput.sendKeys(formData.email);

    const passwordInput = await waitForElement(By.id('password'));
    await passwordInput.sendKeys(formData.password);

    const confirmPasswordInput = await waitForElement(By.id('confirmPassword'));
    await confirmPasswordInput.sendKeys(formData.confirmPassword);

    // Select role
    const roleSelect = await waitForElement(By.id('role'));
    await roleSelect.click();
    await driver.findElement(By.css(`option[value="${formData.role}"]`)).click();
    await driver.sleep(1000); // Wait for role change to take effect

    // If student, fill additional fields
    if (formData.role === 'student') {
      const departmentSelect = await waitForElement(By.id('department'));
      await departmentSelect.click();
      await driver.sleep(500); // Wait for dropdown to open
      await driver.findElement(By.css(`option[value="${formData.department}"]`)).click();

      const semesterSelect = await waitForElement(By.id('semester'));
      await semesterSelect.click();
      await driver.sleep(500); // Wait for dropdown to open
      await driver.findElement(By.css(`option[value="${formData.semester}"]`)).click();

      const classInput = await waitForElement(By.id('class'));
      await classInput.sendKeys(formData.class);

      const rollNumberInput = await waitForElement(By.id('rollNumber'));
      await rollNumberInput.sendKeys(formData.rollNumber);
    }
  };

  const submitForm = async () => {
    const submitButton = await waitForElement(By.css('button[type="submit"]'));
    await driver.wait(until.elementIsEnabled(submitButton), 10000);
    await submitButton.click();
  };

  const waitForFormSubmission = async () => {
    try {
      // Wait for either success navigation or error message
      await Promise.race([
        driver.wait(until.urlIs(`${baseUrl}/auth/login`), 30000),
        driver.wait(until.elementLocated(By.css('.alert-danger')), 30000)
      ]);
    } catch (error) {
      console.error('Error waiting for form submission:', error);
      throw error;
    }
  };

  test('should successfully register a new user', async () => {
    const formData = {
      name: 'Test User',
      email: `test${Date.now()}@example.com`,
      password: 'Test123!',
      confirmPassword: 'Test123!',
      role: 'student',
      department: 'Computer Science',
      semester: '1',
      class: 'A',
      rollNumber: '12345'
    };

    await fillRegistrationForm(formData);
    await submitForm();
    await waitForFormSubmission();

    // Verify navigation to login page
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toBe(`${baseUrl}/auth/login`);
  }, 90000);

  it('should show error for duplicate email', async () => {
    const testEmail = `test${Date.now()}@example.com`;
    
    // First register a user
    const firstUserData = {
      name: 'Test User',
      email: testEmail,
      password: 'Test@123',
      confirmPassword: 'Test@123',
      role: 'student',
      department: 'Computer Science',
      semester: '1',
      class: 'A',
      rollNumber: '12345'
    };
    
    await fillRegistrationForm(firstUserData);
    await submitForm();
    await waitForFormSubmission();
    
    // Navigate back to registration page
    await driver.get(`${baseUrl}/auth/signup`);
    await driver.wait(until.elementLocated(By.css('form')), 10000);
    
    // Try to register with the same email
    const secondUserData = {
      name: 'Test User 2',
      email: testEmail,
      password: 'Test@123',
      confirmPassword: 'Test@123',
      role: 'student',
      department: 'Computer Science',
      semester: '1',
      class: 'A',
      rollNumber: '12346'
    };
    
    await fillRegistrationForm(secondUserData);
    await submitForm();
    
    // Wait for error message
    const errorMessage = await driver.wait(
      until.elementLocated(By.css('.alert-danger')),
      10000
    );
    
    const errorText = await errorMessage.getText();
    expect(errorText).toContain('This email is already registered');
    
    // Verify we're still on the registration page
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toBe(`${baseUrl}/auth/signup`);
  });

  test('should validate required fields', async () => {
    const submitButton = await waitForElement(By.css('button[type="submit"]'));
    
    // Check initial state
    const isInitiallyDisabled = await submitButton.getAttribute('disabled');
    expect(isInitiallyDisabled).toBe('true');

    // Fill only name
    const nameInput = await waitForElement(By.id('name'));
    await nameInput.sendKeys('Test User');
    await driver.sleep(500); // Wait for validation
    
    // Check if still disabled
    const isDisabledAfterName = await submitButton.getAttribute('disabled');
    expect(isDisabledAfterName).toBe('true');

    // Fill email
    const emailInput = await waitForElement(By.id('email'));
    await emailInput.sendKeys('test@example.com');
    await driver.sleep(500); // Wait for validation
    
    // Check if still disabled
    const isDisabledAfterEmail = await submitButton.getAttribute('disabled');
    expect(isDisabledAfterEmail).toBe('true');

    // Fill password
    const passwordInput = await waitForElement(By.id('password'));
    await passwordInput.sendKeys('Test123!');
    await driver.sleep(500); // Wait for validation
    
    // Check if still disabled
    const isDisabledAfterPassword = await submitButton.getAttribute('disabled');
    expect(isDisabledAfterPassword).toBe('true');

    // Fill confirm password
    const confirmPasswordInput = await waitForElement(By.id('confirmPassword'));
    await confirmPasswordInput.sendKeys('Test123!');
    await driver.sleep(500); // Wait for validation
    
    // Check if still disabled
    const isDisabledAfterConfirmPassword = await submitButton.getAttribute('disabled');
    expect(isDisabledAfterConfirmPassword).toBe('true');

    // Select role
    const roleSelect = await waitForElement(By.id('role'));
    await roleSelect.click();
    await driver.findElement(By.css('option[value="student"]')).click();
    await driver.sleep(1000); // Wait for role change to take effect

    // Fill student-specific fields
    const departmentSelect = await waitForElement(By.id('department'));
    await departmentSelect.click();
    await driver.sleep(500); // Wait for dropdown to open
    await driver.findElement(By.css('option[value="Computer Science"]')).click();

    const semesterSelect = await waitForElement(By.id('semester'));
    await semesterSelect.click();
    await driver.sleep(500); // Wait for dropdown to open
    await driver.findElement(By.css('option[value="1"]')).click();

    const classInput = await waitForElement(By.id('class'));
    await classInput.sendKeys('A');

    const rollNumberInput = await waitForElement(By.id('rollNumber'));
    await rollNumberInput.sendKeys('12345');

    // Wait for final validation
    await driver.sleep(1000);

    // Now the button should be enabled
    const isEnabled = await submitButton.getAttribute('disabled');
    expect(isEnabled).toBeNull();
  }, 90000);
}); 