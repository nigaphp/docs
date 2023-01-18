---
sidebar_position: 1
slug: /
---

# Getting Started


Let's discover **NigaPHP Framework in 5 minutes**.


Get started by **creating a new Website**.



## Prerequisites

1. Install PHP
2. Install Composer 

```json showLineNumbers
"php": "^7.4|^8.0",
"ext-pdo_mysql": "*",
"ext-pdo_pgsql": "*",
"ext-pdo_sqlite": "*",
"composer": "^2.0"
```

## Installation

```bash
composer create-project nigaphp/niga site_name
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run NigaPHP.

## Development server

Change directory to your new website `my-website`

```bash
cd my-website
niga run:dev
```

Default values **[HOST=localhost, PORT=8000, PUBLIC_PATH=public]** you can change this in the config file `%APP_ROOT%/config/app.json`

Then open the this link in your web browser http://localhost:8000/.


## Create a controller

```bash
niga make:controller HomeController
```
In this situation, we are creating a controller for the **home** page.

This command will create two new files for us.
1. `src/Controler/HomeController.php`

Here is your new controller class.

```php showLineNumbers
<?php
namespace App\Controller;

use Niga\Framework\Controller\AbstractController;
use Niga\Framework\Attributes\Route;

class SiteController extends AbstractController
{
    #[Route('/home', name:'home', method:'get')]
    public function home() {
        return $this->render("home", [
            "name" => "home"
        ]);
    }

}
```

2. `views/home.php`

And this is the view to rendered.

```php showLineNumbers
<?php if ($cName && $cPath) : ?>
    <h3>Hello <span class='be-color-py be-code'><?= $cName ?></span></h3>
    <p>Your <span class='be-color-py be-code'><?= $cName ?></span> class is located at <span class='be-color-py be-code'><?= $cPath ?></span> !</p>
<?php endif ?>
```
