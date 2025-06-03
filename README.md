<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# LIGHTNESS

<em>Unleash vibrant colors, ignite your creativity effortlessly.</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/d-vale/lightness?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/d-vale/lightness?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/d-vale/lightness?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">

</div>
<br>


## 📄 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
    - [Prerequisites](#-prerequisites)
    - [Installation](#-installation)
    - [Usage](#-usage)
    - [Testing](#-testing)


## ✨ Overview

**Why Lightness?**

Color palette to explore the use of Vite, npm, and Netlify with JS modules. This project was developed using several external libraries, including color-convert and notyf.

- 🎨 **Dynamic Color Generation:** Transform hexadecimal inputs into HSL variations for a vibrant color palette.
- 🛠️ **Efficient Project Setup:** Simplified project management with a well-defined `package.json` and Vite integration.
- 📋 **Clipboard Functionality:** Easily copy color values to streamline your workflow and enhance productivity.
- 🌈 **Interactive User Interface:** A responsive UI that allows users to input color codes and visualize results instantly.
- ✨ **Utility Functions:** Built-in functions for color manipulation, making customization a breeze.

### 📑 Project Index

<details open>
	<summary><b><code>LIGHTNESS/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/d-vale/lightness/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the project configuration and dependencies for the challenge17_lightness application, facilitating the development and build processes<br>- It integrates essential tools like Vite for efficient asset bundling and includes dependencies for color conversion and notifications<br>- This setup streamlines project management, ensuring a smooth workflow for developers while providing a foundation for building and previewing the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/d-vale/lightness/blob/master/LICENSE'>LICENSE</a></b></td>
					<td style='padding: 8px;'>- MIT License grants users the freedom to use, copy, modify, and distribute the software, ensuring that the project remains open and accessible<br>- It establishes the legal framework that protects both the author and users, promoting collaboration and innovation within the codebase<br>- This license underpins the projects commitment to transparency and community engagement, allowing for broad adoption and contribution.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/d-vale/lightness/blob/master/vite.config.js'>vite.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures the Vite build tool for the project, establishing the source directory and defining the output settings<br>- By setting the root to src and specifying the output directory as dist, it ensures a streamlined build process that targets modern JavaScript standards<br>- Additionally, it maintains a clean output environment by emptying the directory before each build, enhancing overall project organization and efficiency.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/d-vale/lightness/blob/master/src/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Serves as the foundational HTML structure for the Challenge 17-Color Generator project, establishing a user interface that allows users to input color codes<br>- It integrates essential metadata for responsiveness and compatibility, links to a stylesheet for visual styling, and defers the loading of a JavaScript module to enhance functionality<br>- This setup facilitates an interactive experience centered around color generation.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/d-vale/lightness/blob/master/src/app.js'>app.js</a></b></td>
					<td style='padding: 8px;'>- Transforms hexadecimal color inputs into HSL variations, enabling users to generate and visualize a color palette<br>- It validates user input, displays the corresponding colors dynamically, and updates the background with a gradient based on the generated palette<br>- Additionally, it facilitates copying color values to the clipboard while providing user feedback through notifications, enhancing the overall user experience within the application.</td>
				</tr>
			</table>
			<!-- modules Submodule -->
			<details>
				<summary><b>modules</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.modules</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/d-vale/lightness/blob/master/src/modules/utils.js'>utils.js</a></b></td>
							<td style='padding: 8px;'>- Provides utility functions for color manipulation within the project<br>- It transforms hexadecimal color values into HSL arrays with varying luminosity, enabling dynamic color adjustments<br>- Additionally, it facilitates the customization of shadow colors in the application by applying HSL values directly to CSS variables, enhancing the visual design and user experience across the codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/d-vale/lightness/blob/master/src/modules/color.js'>color.js</a></b></td>
							<td style='padding: 8px;'>- Color module facilitates the creation and display of color elements based on HSL values<br>- It converts HSL to hexadecimal format, generates a visual representation with appropriate text color for readability, and appends the color element to a specified parent element<br>- This enhances the user interface by dynamically showcasing colors while minimizing the header for a cleaner layout.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## 🚀 Getting Started

### 📋 Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### ⚙️ Installation

Build lightness from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/d-vale/lightness
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd lightness
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### 💻 Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm run dev
```

<div align="left"><a href="#top">⬆ Return</a></div>
