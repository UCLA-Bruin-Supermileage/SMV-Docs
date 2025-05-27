# SMV-API Development Guide

This document outlines the key development requirements and procedures for working with the SMV-API project.

---

## Python Version Requirement

- The project **requires Python 3.10 or higher**, as it uses the `match-case` statement introduced in Python 3.10.
- Ensure your local environment meets this version requirement by running:

```bash
python3 --version
```

---

## Development Environment Setup

Development should be done inside a **virtual environment (virtualenv)** to manage dependencies and maintain isolation.

### On macOS

1. Install Python 3.10+ (if not already installed via Homebrew):

```bash
brew install python@3.11
```

2. Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install required packages:

```bash
pip install -r requirements.txt
```

### On Windows

1. Install Python 3.10+ from the [official website](https://www.python.org/).

2. Create and activate a virtual environment (Command Prompt):

```cmd
python -m venv venv
venv\Scripts\activate
```

3. Install required packages:

```cmd
pip install -r requirements.txt
```

---

## Logs and Docker Deployment

When deployed via Docker and served using Apache:

- **Logs** are located at:
  ```
  /var/log/apache2/error.log
  ```

- **Restart Apache** inside the Docker container. This must be done if you access the container shell.
  1. Access the container shell:
     ```bash
     docker exec -it <container_name> /bin/bash
     ```
  2. Start Apache:
     ```bash
     service apache2 start
     ```

---

## Summary

- Python 3.10+ is required for development.
- Use `virtualenv` to manage dependencies.
- Log files and Apache restart instructions are essential for Docker-based deployment and debugging.

