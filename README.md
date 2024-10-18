# MentalWellness

# Project Overview

This repository contains a comprehensive project setup including an API for classification, a Language Model API (LLM-API), and a frontend built with React and Vite. The project structure is as follows:

```
ClassificationAPI/
LLM-API/
frontend/
README.md
Training.ipynb
json_to_csv.py
requirements.txt
```

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
  - [ClassificationAPI](#classificationapi)
  - [LLM-API](#llm-api)
  - [Frontend](#frontend)
- [Demo Video](#demo-video)
- [Custom Finetuned LLM](#custom-finetuned-llm)

## Setup Instructions

### ClassificationAPI

1. Clone the repository:
   ```sh
   git clone https://github.com/Jjateen/MentalWellnessPrime
   cd ClassificationAPI
   ```

2. Install the required dependencies:
   ```sh
   pip install -r requirements.txt
   ```

3. Run the API:
   ```sh
   uvicorn main:app --reload
   ```

### LLM-API

1. Clone the repository:
   ```sh
   git clone https://github.com/Jjateen/MentalWellnessPrime
   cd LLM-API
   ```

2. Install the required dependencies:
   ```sh
   pip install -r requirements.txt
   ```

3. Run the API:
   ```sh
   uvicorn main:app --reload
   ```

### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Follow the instructions below to set up React with Vite.

#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Demo Video

Watch the demo video [here](https://drive.google.com/file/d/1maYKl6GAC15_8t4Beowe26rjllt0Vb-x/view?usp=sharing).

## Custom Finetuned LLM

Explore the custom finetuned LLM using the QLoRA technique on [Hugging Face](https://huggingface.co/Jjateen/llama-2-7b-mental-chat).
