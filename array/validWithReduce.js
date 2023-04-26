// Frontend form validation is not done for security, it's for user experience.

// Frontend form validation is a mixture of good user experience with security in mind.

// Validation rules
const rules = [
  {
    test: (user) => user.name.length > 2,
    message: "User's name is too short",
  },
  {
    test: (user) => user.password.length >= 8,
    message: "User's password is too short",
  },
  {
    test: (user) => user.password === user.confirmPassword,
    message: "Password and confirmation do not match",
  },
  {
    test: (user) => user.age >= 18,
    message: "User must be at least 18 years old",
  },
];

const validate = (obj, rules) => {
  const errors = rules.reduce((errs, rule) => {
    const result = rule.test(obj);
    if (result === false) {
      errs.push(rule.message);
    }
    return errs;
  }, []);

  return {
    errors,
    isValid: errors.length === 0,
  };
};
const user = {
  name: "Bob",
  password: "kaBob123",
  confirmPassword: "kaBob13",
  age: 19,
};

validate(user, rules);
