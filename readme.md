<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/nodejs.svg" align="center" width="20%">
</p>
<p align="center"><h1 align="center">Boilerplate NodeJS API</h1></p>
<p align="center">
	<em>API with fastify, documented with Swagger and Zod!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/maycon8609/boilerplate-api-fastify-zod-swagger?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/maycon8609/boilerplate-api-fastify-zod-swagger?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/maycon8609/boilerplate-api-fastify-zod-swagger?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## Table of Contents

- [ Overview](#overview)
- [ Features](#features)
- [ Project Structure](#project-structure)
  - [ Project Index](#project-index)
- [ Getting Started](#getting-started)
  - [ Prerequisites](#prerequisites)
  - [ Installation](#installation)
  - [ Usage](#usage)
  - [ Testing](#testing)
- [ Contributing](#contributing)

---

## Overview

API combining Fastify, Zod, and Swagger. It ensures robust API documentation, validation, and TypeScript support.

---

## Features

|     |      Feature      | Summary                                                                                                                                                                                                                                                                                                                                                                                            |
| :-- | :---------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Utilizes **Fastify** as the web framework for efficient and low overhead API development.</li><li>Employs **Zod** for robust data validation and schema definition, ensuring data integrity and consistency.</li><li>Integrates **Swagger** for API documentation generation and visualization, enhancing API development experience.</li></ul>                                            |
| 🔩  | **Code Quality**  | <ul><li>Follows **TypeScript** for type-safe development, reducing runtime errors and enhancing code maintainability.</li><li>Utilizes **Fastify** plugins for CORS support and Swagger UI integration, enhancing code readability and developer experience.</li><li>Leverages **Zod** for data validation, ensuring data consistency and reducing potential bugs.</li></ul>                       |
| 📄  | **Documentation** | <ul><li>Primary language is **TypeScript**, providing strong typing and enhancing code readability.</li><li>Includes detailed documentation in **JSON** and **TypeScript** files, aiding developers in understanding the project structure and functionality.</li><li>Utilizes **Swagger** for API documentation, enabling easy visualization of endpoints and request/response schemas.</li></ul> |
| 🔌  | **Integrations**  | <ul><li>Integrates **Fastify CORS** for enabling cross-origin resource sharing, enhancing API accessibility.</li><li>Utilizes **Fastify Swagger** for API documentation generation and visualization, improving API development workflow.</li><li>Includes **Zod** for data validation and schema definition, ensuring data integrity throughout the project.</li></ul>                            |
| 🧩  |  **Modularity**   | <ul><li>Organizes code into separate modules for users, plugins, and server, enhancing code maintainability and scalability.</li><li>Defines user schemas and routes in separate files, promoting code reusability and separation of concerns.</li><li>Utilizes plugins for CORS, Swagger, and Zod, encapsulating functionality and promoting modular design.</li></ul>                            |

---

## Project Structure

```sh
└── boilerplate-api-fastify-zod-swagger/
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app.ts
    │   ├── modules
    │   ├── plugins
    │   ├── server.ts
    │   └── types.ts
    └── tsconfig.json
```

### Project Index

<details open>
	<summary><b><code>boilerplate-api-fastify-zod-swagger/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>Define the Node 22 project configuration in tsconfig.json to specify compiler options for Node 16, targeting ES2022 with strict mode enabled.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/package.json'>package.json</a></b></td>
				<td>- Facilitates API documentation generation and validation using Fastify, Zod, and Swagger<br>- Integrates CORS support and Swagger UI for enhanced API development experience<br>- Supports TypeScript for type-safe development<br>- Key dependencies include Fastify, Zod, and related Swagger packages.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file in the project structure manages dependencies for the Swagger API documentation tool<br>- It ensures that the project uses specific versions of packages like Fastify, Fastify CORS, and Fastify Swagger to maintain consistency and stability in the codebase architecture.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/src/server.ts'>server.ts</a></b></td>
				<td>Initiates HTTP server on port 3333 by creating and listening to an app.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/src/types.ts'>types.ts</a></b></td>
				<td>- Defines a typed Fastify instance for the project, ensuring strong typing and validation using Zod<br>- This file establishes the structure and capabilities of the Fastify server, enabling robust request handling and response processing throughout the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/src/app.ts'>app.ts</a></b></td>
				<td>Creates a Fastify app with CORS, Swagger, and user routes, enhancing it with Zod type validation.</td>
			</tr>
			</table>
			<details>
				<summary><b>modules</b></summary>
				<blockquote>
					<details>
						<summary><b>users</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/src/modules/users/users.schema.ts'>users.schema.ts</a></b></td>
								<td>- Defines user schemas and validation rules for user data, ensuring consistency and accuracy across the project<br>- Facilitates listing and creating users with structured data formats and error handling<br>- Enhances maintainability and scalability by centralizing user-related logic and data structures.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/src/modules/users/users.routes.ts'>users.routes.ts</a></b></td>
								<td>- Define user routes for creating and listing users in the project<br>- The code in users.routes.ts sets up endpoints for handling user creation and retrieval<br>- It connects the specified routes to corresponding controller functions and defines schemas for input validation<br>- This file plays a crucial role in structuring user-related functionalities within the project architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/src/modules/users/users.controller.ts'>users.controller.ts</a></b></td>
								<td>- Handles user data management by providing functions to retrieve and create users<br>- The code file defines methods to fetch existing users and add new ones with unique identifiers<br>- This module plays a crucial role in managing user-related operations within the project architecture.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>plugins</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/src/plugins/cors.ts'>cors.ts</a></b></td>
						<td>Enables cross-origin resource sharing (CORS) for the Fastify server by setting up CORS headers to allow all origins.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/src/plugins/swagger.ts'>swagger.ts</a></b></td>
						<td>- Enables Swagger documentation setup for the Fastify API, including UI integration<br>- The code registers Fastify Swagger and Swagger UI plugins, defining API metadata and transforming JSON schemas<br>- This facilitates API documentation generation and visualization at the designated route.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/master/src/plugins/type-provider.ts'>type-provider.ts</a></b></td>
						<td>Enables Fastify instance to utilize Zod for request validation and response serialization.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with boilerplate-api-fastify-zod-swagger, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Install boilerplate-api-fastify-zod-swagger using one of the following methods:

**Build from source:**

1. Clone the boilerplate-api-fastify-zod-swagger repository:

```sh
❯ git clone git@github.com:maycon8609/boilerplate-api-fastify-zod-swagger.git
```

2. Navigate to the project directory:

```sh
❯ cd boilerplate-api-fastify-zod-swagger
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### Usage

Run boilerplate-api-fastify-zod-swagger using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```

---

## Contributing

- **💬 [Join the Discussions](https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/issues)**: Submit bugs found or log feature requests for the `boilerplate-api-fastify-zod-swagger` project.
- **💡 [Submit Pull Requests](https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/maycon8609/boilerplate-api-fastify-zod-swagger
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/maycon8609/boilerplate-api-fastify-zod-swagger/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=maycon8609/boilerplate-api-fastify-zod-swagger">
   </a>
</p>
</details>

---
