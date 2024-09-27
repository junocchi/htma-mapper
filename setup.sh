#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Check if Homebrew is installed
if command -v brew &> /dev/null; then
    echo "Homebrew is installed."

    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        echo "Node.js is not installed. Installing via Homebrew..."
        brew install node
    else
        echo "Node.js is already installed."
    fi

else
    echo "Homebrew is not installed. Please install Homebrew first from https://brew.sh/"
    exit 1
fi

# At this point, Node.js and npm should be installed via Homebrew
echo "Node.js and npm are installed."

# Install project dependencies
echo "Installing dependencies..."
npm install

echo "Setup completed successfully!"