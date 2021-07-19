define({ "api": [
  {
    "type": "post",
    "url": "/admin/change-password",
    "title": "Change Password",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "ChangePassword",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Old Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Confirm Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Password changed successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Incorrect current password\",\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Passwords not matched\",\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Password must have 7-15 characters\",\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AdminController.ts",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/login",
    "title": "Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Login",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Login successfully\",\n    \"data\": {\n        \"admin\": {\n            \"id\": 3\n            \"email\": \"admin@roomz.com\",\n            \"country_code\": \"+91\",\n            \"mobile_number\": \"90******99\",\n            \"created_at\": \"2020-08-17 19:58:42\",\n            \"updated_at\": \"2020-08-17 19:58:42\",\n        },\n        \"accessToken\": {\n            \"type\": \"bearer\",\n            \"token\": \"eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA\",\n            \"refreshToken\": null\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Invalid credentials\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AdminController.ts",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/users-list?page=1&search=xyz",
    "title": "Users List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "UsersList",
    "group": "Admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"users\":[\n    {\n      \"id\":1,\n      \"uid\":\"94440eb7-05e4-47b2-b8df-f6a605995b7b\",\n      \"first_name\":\"Amit\",\n      \"last_name\":\"kaushik\",\n      \"dob\":\"12-21-1993\",\n      \"avatar\":null,\n      \"email\":\"john.doe@gmail.com\",\n      \"country_code\":\"+91\",\n      \"phone_number\":\"9034138099\",\n      \"username\":\"919034138099\",\n      \"login_type\":\"EMAIL\"\n      \"device_type\":null,\n      \"created_at\":\"2021-05-14T11:31:35.000Z\",\n      \"updated_at\":\"2021-05-14T11:31:35.000Z\",\n    }\n  ],\n  \"totalNumber\":2,\n  \"perPage\":10,\n  \"currentPage\":1,\n  \"firstPage\":1,\n  \"isEmpty\":false,\n  \"totalPages\":1,\n  \"lastPage\":1,\n  \"hasMorePages\":false,\n  \"hasPages\":false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AdminController.ts",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/auth/check-account",
    "title": "Check Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "CheckAccount",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login_type",
            "description": "<p>Login type can be only <code>PHONE</code> | <code>EMAIL</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone_number",
            "description": "<p>Phone number with <code>country_code</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country_code",
            "description": "<p>Country code with <code>phone_number</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[When account is NOT exists with phone number, An OTP will be sent]\nHTTP/1.1 200 OK\n{\n    \"otpSid\": \"VE44b2561601a6e9014bc7bd7b097eb5dd\",\n    \"message\": \"Otp sent on your phone number\"\n}\n\n[When account is exists, go to Login password screen with login_type]\nHTTP/1.1 202 ACCEPTED\n{\n  \"message\": \"Welcome back, John\",\n  \"email\": \"john.doe@gmail.com\",\n  \"login_type\": \"GOOGLE\",\n}\n\n[When account is NOT exists with Email, go to Sign up screen]\nHTTP/1.1 209 Created\n{\n  \"message\": \"Create Account\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Email or Phone number required\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "phone_number",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country_code",
            "description": "<p>Country code with <code>phone_number</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Login successfully\",\n  \"data\": {\n      \"user\": {\n          \"email\": \"john.doe@gmail.com\",\n          \"uid\": \"d47f292c-7b63-47bc-8485-3aef1b454551\",\n          \"first_name\": \"Amit\",\n          \"last_name\": \"Kaushik\",\n          \"dob\": \"12-21-1993\",\n          \"country_code\": \"+91\",\n          \"phone_number\": \"9034138099\",\n          \"username\": \"919034138099\",\n          \"created_at\": \"2021-05-15T10:50:08.257+00:00\",\n          \"updated_at\": \"2021-05-15T10:50:08.289+00:00\",\n          \"id\": 1\n      },\n      \"accessToken\": {\n          \"type\": \"bearer\",\n          \"token\": \"MQ.zSbTFVKw2PI1C14nj-dqR3i1_2z52k1ONKrXYWvoOkdE9WxTol4M-SEVmYwq\"\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Register",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "phone_number",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country_code",
            "description": "<p>Country code with <code>phone_number</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth in DD-MM-YYYY format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>Avatar from Social Platform.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "social_id",
            "description": "<p>Social Unique Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "social_token",
            "description": "<p>Social Platform Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login_type",
            "description": "<p>Login type can be only <code>FACEBOOK</code> | <code>GOOGLE</code> | <code>APPLE</code> | <code>PHONE</code> | <code>EMAIL</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Registerted successfully\",\n  \"data\": {\n      \"user\": {\n          \"email\": \"john.doe@gmail.com\",\n          \"uid\": \"d47f292c-7b63-47bc-8485-3aef1b454551\",\n          \"first_name\": \"Amit\",\n          \"last_name\": \"Kaushik\",\n          \"dob\": \"12-21-1993\",\n          \"country_code\": \"+91\",\n          \"phone_number\": \"9034138099\",\n          \"username\": \"919034138099\",\n          \"created_at\": \"2021-05-15T10:50:08.257+00:00\",\n          \"updated_at\": \"2021-05-15T10:50:08.289+00:00\",\n          \"id\": 1\n      },\n      \"accessToken\": {\n          \"type\": \"bearer\",\n          \"token\": \"MQ.zSbTFVKw2PI1C14nj-dqR3i1_2z52k1ONKrXYWvoOkdE9WxTol4M-SEVmYwq\"\n      }\n  }\n}\n\n[When account is exists, go to Login password screen with login_type]\nHTTP/1.1 202 ACCEPTED\n{\n  \"message\": \"Welcome back, John\",\n  \"email\": \"john.doe@gmail.com\",\n  \"login_type\": \"GOOGLE\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/resend-otp",
    "title": "Resend OTP",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "ResendOtp",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>Country code with <code>phone_number</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"otpSid\": \"VE44b2561601a6e9014bc7bd7b097eb5dd\",\n    \"message\": \"Otp sent on your phone number\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Otp not sent\"\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid phone number or counrty code\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/social-login",
    "title": "Social Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "SocialLogin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_id",
            "description": "<p>Social Unique Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_token",
            "description": "<p>Social Platform Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login_type",
            "description": "<p>Login type can be only <code>FACEBOOK</code> | <code>GOOGLE</code> | <code>APPLE</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Login successfully\",\n  \"data\": {\n      \"user\": {\n          \"email\": \"john.doe@gmail.com\",\n          \"uid\": \"d47f292c-7b63-47bc-8485-3aef1b454551\",\n          \"first_name\": \"Amit\",\n          \"last_name\": \"Kaushik\",\n          \"dob\": \"12-21-1993\",\n          \"country_code\": \"+91\",\n          \"phone_number\": \"9034138099\",\n          \"username\": \"919034138099\",\n          \"created_at\": \"2021-05-15T10:50:08.257+00:00\",\n          \"updated_at\": \"2021-05-15T10:50:08.289+00:00\",\n          \"id\": 1\n      },\n      \"accessToken\": {\n          \"type\": \"bearer\",\n          \"token\": \"MQ.zSbTFVKw2PI1C14nj-dqR3i1_2z52k1ONKrXYWvoOkdE9WxTol4M-SEVmYwq\"\n      }\n  }\n}\n\n[When account is exists, go to Login password screen with login_type]\nHTTP/1.1 202 ACCEPTED\n{\n  \"message\": \"Welcome back, John\",\n  \"email\": \"john.doe@gmail.com\",\n  \"login_type\": \"APPLE\",\n}\n\n[When account is NOT exists with Email, go to Sign up screen]\nHTTP/1.1 209 Created\n{\n  \"message\": \"Create Account\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/verify-otp",
    "title": "Verify OTP",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "VerifyOtp",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>Country code with <code>phone_number</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp",
            "description": "<p>One Time Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Login successfully\",\n  \"data\": {\n      \"user\": {\n          \"email\": \"john.doe@gmail.com\",\n          \"uid\": \"d47f292c-7b63-47bc-8485-3aef1b454551\",\n          \"first_name\": \"Amit\",\n          \"last_name\": \"Kaushik\",\n          \"dob\": \"12-21-1993\",\n          \"country_code\": \"+91\",\n          \"phone_number\": \"9034138099\",\n          \"username\": \"919034138099\",\n          \"created_at\": \"2021-05-15T10:50:08.257+00:00\",\n          \"updated_at\": \"2021-05-15T10:50:08.289+00:00\",\n          \"id\": 1\n      },\n      \"accessToken\": {\n          \"type\": \"bearer\",\n          \"token\": \"MQ.zSbTFVKw2PI1C14nj-dqR3i1_2z52k1ONKrXYWvoOkdE9WxTol4M-SEVmYwq\"\n      }\n  }\n}\n\n[When account is NOT exists with Phone number, go to Add Info screen]\nHTTP/1.1 209 Created\n{\n   \"status\": \"approved\",\n   \"message\": \"Phone number verified\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Incorrect OTP\"\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"OTP expired\"\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid phone number or counrty code\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/user/hosting/amenities",
    "title": "Amenity List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Amenities",
    "group": "Hosting",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n   \"data\": [\n    {\n      \"id\": 1,\n       \"uid\": \"f18580fe-28b0-4954-8d07-7d2f0c40d57f\",\n       \"name\": \"Wifi\",\n       \"type\": \"normal\",\n       \"description\": null\n   },\n   {\n       \"id\": 17,\n       \"uid\": \"696032f1-b749-4629-a8fe-cde62bde6b4f\",\n       \"name\": \"Smoke Alarm\",\n       \"type\": \"safety\",\n       \"description\": \"Check your local lows which may require a working smoke *detector in every room\"\n   },\n   {\n       \"id\": 18,\n       \"uid\": \"8582c261-a945-444e-bf35-38877ec72d11\",\n       \"name\": \"Carbon monoxide Alarm\",\n       \"type\": \"safety\",\n       \"description\": \"Check your local lows which may require a working carbon *monoxide detector in every room\"\n  },\n   {\n       \"id\": 19,\n       \"uid\": \"af617c01-8a12-48f5-8e86-1038a630f58a\",\n       \"name\": \"Lock on Bedroom door\",\n       \"type\": \"safety\",\n       \"description\": \"Private room can be locked for safety and privacy\"\n   },\n   {\n       \"id\": 20,\n       \"uid\": \"20963d0b-8701-44bf-98c5-349544a76034\",\n       \"name\": \"Kitchen\",\n       \"type\": \"space\",\n        \"description\": \"Space where guests can cook their own meal\"\n   },\n...\n...\n...\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 500 Internal Serve Error\n{\n   \"message\": \"Something went wrong\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/HostingController.ts",
    "groupTitle": "Hosting"
  },
  {
    "type": "get",
    "url": "/user/hosting/bed-types",
    "title": "Bed Types",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "BedTypes",
    "group": "Hosting",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n {\n      \"id\": 1,\n     \"uid\": \"be4805d2-5782-4a8c-af27-9fc70da0dd65\",\n     \"bed_type\": \"double\"\n },\n {\n      \"id\": 2,\n     \"uid\": \"c1cfaaef-db8e-4928-8d86-1f25999fb5d6\",\n     \"bed_type\": \"queen\"\n },\n {\n     \"id\": 3,\n     \"uid\": \"c82267e0-5a11-49b2-9592-e48c5f8f4fbc\",\n     \"bed_type\": \"single\"\n },\n {\n     \"id\": 4,\n     \"uid\": \"878bd05f-194f-4e84-b8f0-e2953f9f8517\",\n     \"bed_type\": \"sofa bed\"\n }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 500 Internal Serve Error\n{\n   \"message\": \"Something went wrong\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/HostingController.ts",
    "groupTitle": "Hosting"
  },
  {
    "type": "get",
    "url": "/user/hosting/property-types",
    "title": "Property Types",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "PropertyTypes",
    "group": "Hosting",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n  \"data\": [\n    {\n      \"id\": 1,\n      \"uid\": \"af1ebb9a-80a1-4573-8ba5-98d6a81f3210\",\n      \"property_type\": \"Villa\"\n    },\n    {\n       \"id\":2\n      \"uid\": \"43d21645-e458-4eed-8db5-d08cde2bdfcd\",\n      \"property_type\": \"Apartment\"\n    },\n    {\n     \"id\":3,\n      \"uid\": \"c12c0a8f-c07f-46fc-804f-ab198b4e7304\",\n      \"property_type\": \"Farm House\"\n    },\n    {\n       \"id\":4,\n      \"uid\": \"bb178ee0-d880-4fda-881d-802c0aaa0f22\",\n      \"property_type\": \"Istiraha\"\n    },\n    {\n       \"id\": 5,\n      \"uid\": \"55133720-6407-4e1a-9fa7-c278e1da85c1\",\n      \"property_type\": \"Camp\"\n    },\n    {\n       \"id\":6\n      \"uid\": \"2a2391b9-a595-4853-a538-2f6cc5c46263\",\n      \"property_type\": \"Heritage House\"\n    }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 500 Internal Serve Error\n{\n   \"message\": \"Something went wrong\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/HostingController.ts",
    "groupTitle": "Hosting"
  },
  {
    "type": "get",
    "url": "/user/hosting/home-details",
    "title": "Home Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "home-details",
    "group": "Hosting",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"data\": [\n  {\n       \"id\": 1,\n       \"uid\": \"954e2ffe-ab0a-4b19-bc87-99eb058228a8\",\n       \"name\": \"Must Climb Stairs\",\n       \"description\": \"Describe the stairs(for example, how many flights)\"\n   },\n   {\n       \"id\": 2,\n       \"uid\": \"019af93c-e1d6-420d-9c4d-b4246ee4b7ff\",\n       \"name\": \"Potential for noise\",\n       \"description\": null\n   },\n   {\n       \"id\": 3,\n       \"uid\": \"37e68fe7-3fc7-472c-99c9-5428f66159d5\",\n       \"name\": \"Pet(s) live on property\",\n       \"description\": null\n   },\n   {\n       \"id\": 4,\n       \"uid\": \"bcbaf4ce-6839-4b66-b44b-d35293106e8f\",\n       \"name\": \"No parking on property\",\n       \"description\": null\n   },\n.\n.\n.\n    ]\n  }\n    \n   \n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 500 Internal Serve Error\n{\n   \"message\": \"Something went wrong\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/HostingController.ts",
    "groupTitle": "Hosting"
  }
] });
