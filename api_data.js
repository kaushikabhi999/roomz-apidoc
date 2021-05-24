define({ "api": [
  {
    "type": "post",
    "url": "/admin/change_password",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Login successfully\",\n    \"data\": {\n        \"admin\": {\n            \"id\": 3\n            \"email\": \"amit@ksk.com\",\n            \"country_code\": \"+91\",\n            \"mobile_number\": \"90******99\",\n            \"created_at\": \"2020-08-17 19:58:42\",\n            \"updated_at\": \"2020-08-17 19:58:42\",\n        },\n        \"accessToken\": {\n            \"type\": \"bearer\",\n            \"token\": \"eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA\",\n            \"refreshToken\": null\n        }\n    }\n}",
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
    "type": "post",
    "url": "/auth/check_account",
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
          "content": "[When account is NOT exists with phone number, An OTP will be sent]\nHTTP/1.1 200 OK \n{\n    \"otpSid\": \"VE44b2561601a6e9014bc7bd7b097eb5dd\",\n    \"message\": \"Otp sent on your phone number\"\n}\n\n[When account is NOT exists with Email, go to Sign up screen]\nHTTP/1.1 201 Created\n{\n  \"message\": \"Create Account\"\n}\n\n[When account is exists with Email, go to Login password screen]\nHTTP/1.1 202 ACCEPTED \n{\n  \"message\": \"Welcome back, Amit\",\n  \"email\": \"kaushikabhi999@gmail.com\",\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Login successfully\",\n  \"data\": {\n      \"user\": {\n          \"email\": \"kaushikabhi999@gmail.com\",\n          \"uid\": \"d47f292c-7b63-47bc-8485-3aef1b454551\",\n          \"first_name\": \"Amit\",\n          \"last_name\": \"Kaushik\",\n          \"dob\": \"12-21-1993\",\n          \"country_code\": \"+91\",\n          \"phone_number\": \"9034138099\",\n          \"username\": \"919034138099\",\n          \"created_at\": \"2021-05-15T10:50:08.257+00:00\",\n          \"updated_at\": \"2021-05-15T10:50:08.289+00:00\",\n          \"id\": 1\n      },\n      \"accessToken\": {\n          \"type\": \"bearer\",\n          \"token\": \"MQ.zSbTFVKw2PI1C14nj-dqR3i1_2z52k1ONKrXYWvoOkdE9WxTol4M-SEVmYwq\"\n      }\n  }\n}",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Registerted successfully\",\n  \"data\": {\n      \"user\": {\n          \"email\": \"kaushikabhi999@gmail.com\",\n          \"uid\": \"d47f292c-7b63-47bc-8485-3aef1b454551\",\n          \"first_name\": \"Amit\",\n          \"last_name\": \"Kaushik\",\n          \"dob\": \"12-21-1993\",\n          \"country_code\": \"+91\",\n          \"phone_number\": \"9034138099\",\n          \"username\": \"919034138099\",\n          \"created_at\": \"2021-05-15T10:50:08.257+00:00\",\n          \"updated_at\": \"2021-05-15T10:50:08.289+00:00\",\n          \"id\": 1\n      },\n      \"accessToken\": {\n          \"type\": \"bearer\",\n          \"token\": \"MQ.zSbTFVKw2PI1C14nj-dqR3i1_2z52k1ONKrXYWvoOkdE9WxTol4M-SEVmYwq\"\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Email already exists\"\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Phone number already exists\"\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Bad Request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/resend_otp",
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
    "url": "/auth/verify_otp",
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
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": \"approved\",\n   \"message\": \"Phone number verified\"\n}",
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
  }
] });
