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
  },
  {
    "type": "get",
    "url": "/user/hosting/home-rules",
    "title": "Home Rules",
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
    "name": "home-rules",
    "group": "Hosting",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"data\": [\n {\n      \"id\": 1,\n      \"uid\": \"b2607d2a-2b10-4504-8872-f9b0ab1a986e\",\n      \"rule\": \"Suitable for children (2-12)\"\n  },\n  {\n      \"id\": 2,\n      \"uid\": \"f7e7a7c0-dac8-4c18-a908-e0677d1d8756\",\n      \"rule\": \"Suitable for infants (under 2)\"\n  },\n  {\n      \"id\": 3,\n      \"uid\": \"52e7952a-afea-4789-924b-43c883016dff\",\n      \"rule\": \"Suitable for pets\"\n  },\n  {\n      \"id\": 4,\n      \"uid\": \"26e24756-e13d-47eb-a6bb-f6f0470c428d\",\n      \"rule\": \"Smoking allowed\"\n  },\n  {\n      \"id\": 5,\n      \"uid\": \"a14a9afc-140b-4ea0-971f-5dc8d3fd54db\",\n      \"rule\": \"Events allowed\"\n  }\n   ]\n }\n   \n  \n}",
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
    "type": "put",
    "url": "/user/hosting/list-property/address/:id",
    "title": "Add Address",
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
    "name": "address",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>property located in country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>house name/number street/road</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_optional",
            "description": "<p>Flat, Suite etc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Name of City.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip_code",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"country\": \"India\",\n   \"city\": \"Noida\",\n   \"street\": \"Noida Sector 63\",\n   \"state\": \"UP\",\n   \"zip_code\": \"300221\",\n   \"address_optional\": \"H Block\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property address updated\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  HTTP/1.1 400 Bad Request\n  {\n \"message\": \"validation Failed\",\n \"error\": {\n     \"state\": [\n         \"minLength validation failed\"\n     ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/amenities/:id",
    "title": "Add Amenities",
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
    "name": "amenities",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "amenities",
            "description": "<p>Array of Ids of amenities</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"amenities\": [1,2,3,5]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property amenities added\",\n   \"data\": [\n       {\n           \"property_id\": 1,\n           \"amenity_id\": 2\n       },\n       {\n           \"property_id\": 1,\n           \"amenity_id\": 3\n       },\n       {\n           \"property_id\": 1,\n           \"amenity_id\": 5\n       },\n       {\n           \"property_id\": 1,\n           \"amenity_id\": 6\n       },\n       {\n           \"property_id\": 1,\n           \"amenity_id\": 9\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  HTTP/1.1 400 Bad Request\n  {\n \"message\": \"validation Failed\",\n \"error\": {\n     \"amenities\": [\n         \"number validation failed\"\n     ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/availability/:id",
    "title": "Set Availability",
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
    "name": "availability",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "advance_notice",
            "description": "<p>sameDay = 0, 1day: 1, 2day: 2, 3day: 3</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cut_off_time",
            "description": "<p>Same Day cut-off time</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "guests_book_time",
            "description": "<p>How far the future guests can book</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci_arrive_after",
            "description": "<p>Check In arrive after</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci_arrive_before",
            "description": "<p>Check In arrive before</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci_leave_before",
            "description": "<p>Check In leave before</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "min_stay",
            "description": "<p>NUmber of nights</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_stay",
            "description": "<p>NUmber of nights</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"advance_notice\": 2,\n    \"cut_off_time\": 10,\n    \"guests_book_time\": 4,\n    \"ci_arrive_after\": 10,\n    \"ci_arrive_before\": \"13\",\n    \"ci_leave_before\": \"16\",\n    \"min_stay\": 2,\n    \"max_stay\": 2\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property name added\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n           \"is_email_confirmed\": 1,\n           \"is_phone_confirmed\": 1,\n           \"is_agree_hr\": 1,\n           \"is_payment_information\": 1,\n           \"is_trip_purpose\": 1,\n           \"is_id_submitted\": 1,\n           \"is_recommended_from_oh\": 1,\n           \"description\": \"This house is newly constructed and loaded with all facilites.\",\n           \"desc_your_space\": \"There is a common area 20x20 ft, and a loan wiht 100x100 ft.\",\n           \"desc_interaction_guests\": null,\n           \"desc_neighbourhood\": null,\n           \"desc_getting_around\": null,\n           \"name\": \"Smart House 3 Star\",\n           \"country_code\": \"+91\",\n           \"sec_phone_number\": \"9882554563\",\n           \"advance_notice\": 2,\n           \"cut_off_time\": \"10 AM\",\n           \"guests_book_time\": \"4 PM\",\n           \"ci_arrive_after\": \"11 AM\",\n           \"ci_arrive_before\": \"12 PM\",\n           \"ci_leave_before\": \"12 PM\",\n           \"min_stay\": 2,\n           \"max_stay\": 2\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/beds/:id",
    "title": "Add Beds",
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
    "name": "beds",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "no_of_guests",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "no_of_bathrooms",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "no_of_bedrooms",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "beds",
            "description": "<p><code>Array of Beds</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"no_of_guests\": 2,\n \"no_of_bedrooms\": 1,\n \"no_of_bathrooms\": 2,\n \"beds\": [\n     {\n         \"bed_id\": 1,\n         \"bedroom_name\": \"Common Space\",\n         \"count\": 2,\n         \"serial_number\": 0 \n     },\n      {\n         \"bed_id\": 2,\n         \"bedroom_name\": \"BedRoom 1\",\n         \"count\": 2,\n         \"serial_number\": 1\n     },\n     {\n         \"bed_id\": 2,\n         \"bedroom_name\": \"BedRoom 1\",\n         \"count\": 3,\n         \"serial_number\": 1\n     }\n     .\n     .\n     .\n ]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property type added\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"type\": {\n               \"id\": 1,\n               \"uid\": \"27ce8bdf-1b6c-495b-aca0-a057c0848580\",\n               \"property_type\": \"Villa\",\n           },\n           \"beds\": [\n               {\n                   \"bed_id\": 1,\n                   \"property_id\": 2,\n                   \"bedroom_name\": \"Common Space\",\n                   \"serial_number\": 0,\n                   \"count\": 2,\n               },\n               {\n                   \"bed_id\": 2,\n                   \"property_id\": 2,\n                   \"bedroom_name\": \"BedRoom 1\",\n                   \"serial_number\": 1,\n                   \"count\": 2,\n               },\n               {\n                   \"bed_id\": 2,\n                   \"property_id\": 2,\n                   \"bedroom_name\": \"BedRoom 1\",\n                   \"serial_number\": 1,\n                   \"count\": 2\n               }\n           ]\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n   HTTP/1.1 400 Bad Request\n   {\n  \"message\": \"validation Failed\",\n  \"error\": {\n      \"no_of_bedrooms\": [\n          \"number validation failed\"\n      ],\n      \"beds.0.bedroom_name\": [\n          \"required validation failed\"\n      ],\n      \"beds.2.is_common_space\": [\n          \"boolean validation failed\"\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/description/:id",
    "title": "Property Description",
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
    "name": "description",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Describe your place to guests</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc_your_space",
            "description": "<p>about your spaces</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc_interaction_guests",
            "description": "<p>Share how available you during a guest stay</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc_neighbourhood",
            "description": "<p>Share what makes your neighbourhood special</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc_getting_around",
            "description": "<p>Add info about getting around your city</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"description\": \"This house is newly constructed and loaded with all facilites.\",\n   \"desc_your_space\": \"There is a common area 20x20 ft, and a loan wiht 100x100 ft.\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property description added\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n           \"is_email_confirmed\": 1,\n           \"is_phone_confirmed\": 1,\n           \"is_agree_hr\": 1,\n           \"is_payment_information\": 1,\n           \"is_trip_purpose\": 1,\n           \"is_id_submitted\": 1,\n           \"is_recommended_from_oh\": 1,\n           \"description\": \"This house is newly constructed and loaded with all facilites.\",\n           \"desc_your_space\": \"There is a common area 20x20 ft, and a loan wiht 100x100 ft.\",\n           \"desc_interaction_guests\": null,\n           \"desc_neighbourhood\": null,\n           \"desc_getting_around\": null \n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/discounts/:id",
    "title": "Long Term Discounts",
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
    "name": "discounts",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weekly_discount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "monthly_discount",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example :",
          "content": "{\n     \"weekly_discount\": 5,\n     \"monthly_discount\": 17,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property updated\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n           \"is_email_confirmed\": 1,\n           \"is_phone_confirmed\": 1,\n           \"is_agree_hr\": 1,\n           \"is_payment_information\": 1,\n           \"is_trip_purpose\": 1,\n           \"is_id_submitted\": 1,\n           \"is_recommended_from_oh\": 1,\n           \"description\": \"This house is newly constructed and loaded with all facilites.\",\n           \"desc_your_space\": \"There is a common area 20x20 ft, and a loan wiht 100x100 ft.\",\n           \"desc_interaction_guests\": null,\n           \"desc_neighbourhood\": null,\n           \"desc_getting_around\": null,\n           \"name\": \"Smart House 3 Star\",\n           \"country_code\": \"+91\",\n           \"sec_phone_number\": \"9882554563\",\n           \"advance_notice\": 2,\n           \"cut_off_time\": 10,\n           \"guests_book_time\": 16,\n           \"ci_arrive_after\": 11,\n           \"ci_arrive_before\": 14,\n           \"ci_leave_before\": 16,\n           \"min_stay\": 2,\n           \"max_stay\": 2,\n           \"base_price\": 20,\n           \"is_discount_20\": false,\n           \"is_local_laws\": true,\n           \"is_updated_calender\": true,\n           \"have_guests\": 2,\n           \"rented_before\": 1,\n           \"notice_guest_ba\": 2,\n           \"guest_ci_from\": 10,\n           \"guest_ci_to\": 16,\n           \"weekly_discount\": 5,\n           \"monthly_discount\": 17,\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/guest-requirements/:id",
    "title": "Guest Requirements",
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
    "name": "guest-requirements",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_email_confirmed",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_phone_confirmed",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_payment_information",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_trip_purpose",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_recommended_from_oh",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_id_submitted",
            "description": "<p>guest submitted their id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_agree_hr",
            "description": "<p>guests agree for home rules (hr)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"is_email_confirmed\": true,\n  \"is_phone_confirmed\": true,\n  \"is_payment_information\": true,\n  \"is_agree_hr\": true,\n  \"is_trip_purpose\": true,\n  \"is_id_submitted\": true,\n  \"is_recommended_from_oh\": true\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property address updated\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n           \"is_email_confirmed\": 1,\n           \"is_phone_confirmed\": 1,\n           \"is_agree_hr\": 1,\n           \"is_payment_information\": 1,\n           \"is_trip_purpose\": 1,\n           \"is_id_submitted\": 1,\n           \"is_recommended_from_oh\": 1,\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  HTTP/1.1 400 Bad Request\n  {\n \"message\": \"validation Failed\",\n \"error\": {\n     \"location\": [\n         \"minLength validation failed\"\n     ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/house-rules/:id",
    "title": "Set House Rule",
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
    "name": "house-rules",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property  ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "property_rules",
            "description": "<p>Array of house rules</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n    \"property_rules\": [\n      {\n          \"rule_id\": 1,\n          \"is_cancelled\": true,\n          \"cancel_reason\": \"test\"\n      },\n      {\n          \"rule_id\": 2\n      },\n      {\n          \"rule_id\": 3\n      },\n      {\n          \"rule_id\": 4\n      },\n      {\n          \"rule_id\": 5\n      },\n      {\n          \"is_additional\": true,\n          \"description\": \"test\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    {\n \"message\": \"Property rules added\",\n \"data\": [\n   {\n       \"rule_id\": 1,\n       \"property_id\": 2,\n       \"is_cancelled\": 1,\n       \"cancel_reason\": \"test\",\n       \"is_additional\": 0,\n       \"description\": null\n   },\n   {\n       \"rule_id\": 2,\n       \"property_id\": 2,\n       \"is_cancelled\": 0,\n       \"cancel_reason\": null,\n       \"is_additional\": 0,\n       \"description\": null\n   },\n   {\n       \"rule_id\": 3,\n       \"property_id\": 2,\n       \"is_cancelled\": 0,\n       \"cancel_reason\": null,\n       \"is_additional\": 0,\n       \"description\": null\n   },\n   {\n       \"rule_id\": 4,\n       \"property_id\": 2,\n       \"is_cancelled\": 0,\n       \"cancel_reason\": null,\n       \"is_additional\": 0,\n       \"description\": null\n   },\n   {\n       \"rule_id\": 5,\n       \"property_id\": 2,\n       \"is_cancelled\": 0,\n       \"cancel_reason\": null,\n       \"is_additional\": 0,\n       \"description\": null\n   },\n   {\n       \"rule_id\": null,\n       \"property_id\": 2,\n       \"is_cancelled\": 0,\n       \"cancel_reason\": null,\n       \"is_additional\": 1,\n       \"description\": \"test\"\n   }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/laws-and-calender/:id",
    "title": "Laws and Calender",
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
    "name": "laws-and-calender",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_local_laws",
            "description": "<p>Guests Agree your country laws</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_updated_calender",
            "description": "<p>Keep calender updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"is_local_laws\": true,\n    \"is_updated_calender\": true,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property updated\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n           \"is_email_confirmed\": 1,\n           \"is_phone_confirmed\": 1,\n           \"is_agree_hr\": 1,\n           \"is_payment_information\": 1,\n           \"is_trip_purpose\": 1,\n           \"is_id_submitted\": 1,\n           \"is_recommended_from_oh\": 1,\n           \"description\": \"This house is newly constructed and loaded with all facilites.\",\n           \"desc_your_space\": \"There is a common area 20x20 ft, and a loan wiht 100x100 ft.\",\n           \"desc_interaction_guests\": null,\n           \"desc_neighbourhood\": null,\n           \"desc_getting_around\": null,\n           \"name\": \"Smart House 3 Star\",\n           \"country_code\": \"+91\",\n           \"sec_phone_number\": \"9882554563\",\n           \"advance_notice\": 2,\n           \"cut_off_time\": \"10 AM\",\n           \"guests_book_time\": \"4 PM\",\n           \"ci_arrive_after\": \"11 AM\",\n           \"ci_arrive_before\": \"12 PM\",\n           \"ci_leave_before\": \"12 PM\",\n           \"min_stay\": 2,\n           \"max_stay\": 2,\n           \"base_price\": 20,\n           \"is_discount_20\": false,\n           \"is_local_laws\": true,\n           \"is_updated_calender\": true,\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/location/:id",
    "title": "Add Location",
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
    "name": "location",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Ex 10.24</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Ex 20.135</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>A-121, Sec-63 Noida, Utter Pradesh 201301.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"longitude\": 10.24,\n   \"latitude\": 20.134,\n   \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property address updated\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  HTTP/1.1 400 Bad Request\n  {\n \"message\": \"validation Failed\",\n \"error\": {\n     \"location\": [\n         \"minLength validation failed\"\n     ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/name/:id",
    "title": "Name of Listing",
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
    "name": "name",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property  ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Listing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"name\": \"Smart House 3 Star\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property name added\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n           \"is_email_confirmed\": 1,\n           \"is_phone_confirmed\": 1,\n           \"is_agree_hr\": 1,\n           \"is_payment_information\": 1,\n           \"is_trip_purpose\": 1,\n           \"is_id_submitted\": 1,\n           \"is_recommended_from_oh\": 1,\n           \"description\": \"This house is newly constructed and loaded with all facilites.\",\n           \"desc_your_space\": \"There is a common area 20x20 ft, and a loan wiht 100x100 ft.\",\n           \"desc_interaction_guests\": null,\n           \"desc_neighbourhood\": null,\n           \"desc_getting_around\": null,\n           \"name\": \"Smart House 3 Star\" \n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/phone-number/:id",
    "title": "Add Sec Phone Number",
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
    "name": "phone_number",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property  ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country_code",
            "description": "<p>Country Code</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sec_phone_number",
            "description": "<p>Phone Number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"country_code\": \"+91\",\n   \"sec_phone_number\": \"9882553654\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property secondary phone number added\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n           \"is_email_confirmed\": 1,\n           \"is_phone_confirmed\": 1,\n           \"is_agree_hr\": 1,\n           \"is_payment_information\": 1,\n           \"is_trip_purpose\": 1,\n           \"is_id_submitted\": 1,\n           \"is_recommended_from_oh\": 1,\n           \"description\": \"This house is newly constructed and loaded with all facilites.\",\n           \"desc_your_space\": \"There is a common area 20x20 ft, and a loan wiht 100x100 ft.\",\n           \"desc_interaction_guests\": null,\n           \"desc_neighbourhood\": null,\n           \"desc_getting_around\": null,\n           \"name\": \"Smart House 3 Star\",\n           \"country_code\": \"+91\",\n           \"sec_phone_number\": \"9882553654\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/pricing/:id",
    "title": "Set Price",
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
    "name": "pricing",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "base_price",
            "description": "<p>price of your Property per night</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_discount_20",
            "description": "<p>20% discount on your property (default = true)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"base_price\": 20,\n    \"is_discount_20\": false,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property price added\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n           \"is_email_confirmed\": 1,\n           \"is_phone_confirmed\": 1,\n           \"is_agree_hr\": 1,\n           \"is_payment_information\": 1,\n           \"is_trip_purpose\": 1,\n           \"is_id_submitted\": 1,\n           \"is_recommended_from_oh\": 1,\n           \"description\": \"This house is newly constructed and loaded with all facilites.\",\n           \"desc_your_space\": \"There is a common area 20x20 ft, and a loan wiht 100x100 ft.\",\n           \"desc_interaction_guests\": null,\n           \"desc_neighbourhood\": null,\n           \"desc_getting_around\": null,\n           \"name\": \"Smart House 3 Star\",\n           \"country_code\": \"+91\",\n           \"sec_phone_number\": \"9882554563\",\n           \"advance_notice\": 2,\n           \"cut_off_time\": \"10 AM\",\n           \"guests_book_time\": \"4 PM\",\n           \"ci_arrive_after\": \"11 AM\",\n           \"ci_arrive_before\": \"12 PM\",\n           \"ci_leave_before\": \"12 PM\",\n           \"min_stay\": 2,\n           \"max_stay\": 2,\n           \"base_price\": 20,\n           \"is_discount_20\": false\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/property-details/:id",
    "title": "Property Details",
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
    "name": "property-details",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "property_details",
            "description": "<p>Array of details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"property_details\": [\n         {\n             \"detail_id\": 1,\n             \"explanation\": \"tell something\"\n         },\n         {\n             \"detail_id\": 2\n         },\n         {\n             \"detail_id\": 3\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Property details added\",\n  \"data\": [\n      {\n          \"detail_id\": 1,\n          \"property_id\": 1,\n          \"explanation\": \"tell something\"\n      },\n      {\n          \"detail_id\": 2,\n          \"property_id\": 1,\n          \"explanation\": null\n      },\n      {\n          \"detail_id\": 3,\n          \"property_id\": 1,\n          \"explanation\": null\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "post",
    "url": "/user/hosting/list-property/type",
    "title": "Property Type",
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
    "name": "property-type",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "property_type",
            "description": "<p>property_type Property Type Id `</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_beach_house",
            "description": "<p>required if property_type 'villa' or 'apartment'.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_dedicated_guest_space",
            "description": "<p>true or false.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_business_hosting",
            "description": "<p>true of false`.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 Created\n   \n   {\n    \"message\": \"Property type added\",\n     \"data\": {\n     \"uid\": \"20586a21-af79-447a-8df4-8b2cce091c72\",\n     \"property_type\": 1,\n     \"is_beach_house\": false,\n     \"is_dedicated_guest_space\": true,\n     \"is_business_hosting\": true,\n     \"created_at\": \"2021-07-26T12:58:55.169+05:30\",\n     \"updated_at\": \"2021-07-26T12:58:55.169+05:30\",\n     \"id\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  HTTP/1.1 400 Bad Request\n  {\n    \"message\": \"validation Failed\",\n    \"error\": {\n    \"is_beach_house\": [\n       \"required validation failed\"\n   ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "get",
    "url": "/user/hosting/list-property/publish/:id",
    "title": "Publish Property",
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
    "name": "publish",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 Success\n{\n     \"message\": \"Property published\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  },
  {
    "type": "put",
    "url": "/user/hosting/list-property/questions/:id",
    "title": "Questions",
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
    "name": "questions",
    "group": "List_Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Property ID (pass as params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rented_before",
            "description": "<p>I am new = 2, or I have = 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "have_guests",
            "description": "<p>Not Sure Yet = 1, part-time = 2, as often as possible = 3.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "notice_guest_ba",
            "description": "<p>SameDay = 0, 1day = 1, 2day =2, ba=&gt;before arrive.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "guest_ci_from",
            "description": "<p>Guest Check In Start Time ex: 10.30</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "guest_ci_to",
            "description": "<p>Guest Check In End Time ex: 16</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example 1:",
          "content": "{\n     \"notice_guest_ba\": 2,\n     \"guest_ci_from\": 10,\n     \"guest_ci_to\": 16\n }",
          "type": "json"
        },
        {
          "title": "Request-Example 2:",
          "content": "{\n     \"rented_before\": 1,\n     \"have_guests\": 1,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    \n{\n   \"message\": \"Property updated\",\n   \"data\": [\n       {\n           \"id\": 2,\n           \"uid\": \"31195908-2d43-4905-a28e-faa17de2588b\",\n           \"property_type\": 1,\n           \"is_beach_house\": 0,\n           \"is_dedicated_guest_space\": 1,\n           \"is_business_hosting\": 1,\n           \"no_of_guests\": 2,\n           \"no_of_bedrooms\": 1,\n           \"no_of_bathrooms\": 2,\n           \"country\": \"India\",\n           \"street\": \"Noida Sector 63\",\n           \"address_optional\": \"H Block\",\n           \"state\": \"UP\",\n           \"city\": \"Noida\",\n           \"zip_code\": \"300221\",\n           \"longitude\": 10.24,\n           \"latitude\": 20.134,\n           \"location\": \"A-121, Sec-63 Noida, Utter Pradesh 201301\",\n           \"is_email_confirmed\": 1,\n           \"is_phone_confirmed\": 1,\n           \"is_agree_hr\": 1,\n           \"is_payment_information\": 1,\n           \"is_trip_purpose\": 1,\n           \"is_id_submitted\": 1,\n           \"is_recommended_from_oh\": 1,\n           \"description\": \"This house is newly constructed and loaded with all facilites.\",\n           \"desc_your_space\": \"There is a common area 20x20 ft, and a loan wiht 100x100 ft.\",\n           \"desc_interaction_guests\": null,\n           \"desc_neighbourhood\": null,\n           \"desc_getting_around\": null,\n           \"name\": \"Smart House 3 Star\",\n           \"country_code\": \"+91\",\n           \"sec_phone_number\": \"9882554563\",\n           \"advance_notice\": 2,\n           \"cut_off_time\": 10,\n           \"guests_book_time\": 16,\n           \"ci_arrive_after\": 11,\n           \"ci_arrive_before\": 14,\n           \"ci_leave_before\": 16,\n           \"min_stay\": 2,\n           \"max_stay\": 2,\n           \"base_price\": 20,\n           \"is_discount_20\": false,\n           \"is_local_laws\": true,\n           \"is_updated_calender\": true,\n           \"have_guests\": 2,\n           \"rented_before\": 1,\n           \"notice_guest_ba\": 2,\n           \"guest_ci_from\": 10,\n           \"guest_ci_to\": 16\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/User/PropertyController.ts",
    "groupTitle": "List_Property"
  }
] });
