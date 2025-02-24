# k6 Sample Project

This project demonstrates how to use k6 for load testing a simple scenario targeting the URL https://test.k6.io/.

## Project Structure

```
k6-sample-project
├── config
│   ├── .env.config       # Environment configuration file
│   └── example.env.config # Example environment configuration file
├── data
│   └── prompts.js        # Prompts for AI analysis
├── reports
│   ├── .gitkeep          # Placeholder to keep the directory in git
│   └── k6_report.json    # k6 test report
├── src
│   ├── aiModels          # AI model related files
│   │   ├── aiModelAdapter.js
│   │   ├── aiModelClient.js
│   │   └── vertexAIAdapter.js
│   └── k6Tests           # k6 test scripts
│       ├── loadTest.js
│       ├── test1.js
│       └── test2.js
├── .gitignore            # Git ignore file
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd k6-sample-project
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```
   npm install
   ```

3. **Set up environment variables**:
   Copy the example environment configuration file and update it with your values:
   ```
   cp config/example.env.config config/.env.config
   ```

4. **Run the k6 test**:
   You can execute the test script using the following command:
   ```
   npm test
   ```

## Requirements

- [k6](https://k6.io/docs/getting-started/installation/) must be installed on your machine.
