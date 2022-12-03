## npm Commands
1. `npm --v or npm --version`
    - Check npm version

2. `npm i <packageName>`
    - Local dependency that use it only in this particular project.

3. `npm i -g <packageName>`
    - Global dependency that use it in any project.

4. `npm i -D <packageName>` or `npm i --save-dev <packageName>`
    - Dev dependencies. Package that we use while developing the application.

5. `npm uninstall <packageName>`
    - Uninstall package
## Overview

1. Jokester
- Install npm package, [give-me-a-joke](https://www.npmjs.com/package/give-me-a-joke) and [colors](https://www.npmjs.com/package/colors) in Jokester directory.

- Contains index.js that uses both installed package to print colored random joke.


![image](https://user-images.githubusercontent.com/92832451/192471368-1c9e0e2a-7d54-48ef-bac4-af7a9cefc18e.png)


2. Artster
   - Make a new project using command

   ```
   npm init
   ```

   - Add package `figlet` and `colors` as dependencies (refer package.json)
   - Will print colored figlet text
