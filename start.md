---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **NigaPHP in 5 minutes**.

## Getting Started

Get started by **creating a new site**.


### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Create a new site


```bash
composer create-project niga/niga my-website
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to install NigaPHP.

## Start your new site

Run the development server:

```bash
cd my-website
niga run:dev 
```

The `cd` command changes the directory you're working with. In order to work with your newly created, you'll need to navigate the terminal there.

The `niga run:dev` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:8000/.
