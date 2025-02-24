# k6 Sample Project

This project demonstrates how to use k6 for load testing a simple scenario targeting the URL https://test.k6.io/.

## Project Structure

```
k6-sample-project
├── src
│   └── test.js        # k6 test script
├── package.json       # npm configuration file
└── README.md          # project documentation
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

3. **Run the k6 test**:
   You can execute the test script using the following command:
   ```
   k6 run src/test.js
   ```

## Requirements

- [k6](https://k6.io/docs/getting-started/installation/) must be installed on your machine.

## License

This project is licensed under the MIT License.