
# Escape Minecraft Colors

Adds a function to escape Minecraft colors.


## Installation

```bash
npm install escape-minecraft-colors
yarn install escape-minecraft-colors
pnpm install escape-minecraft-colors
bun install escape-minecraft-colors
```

## Usage

```js
import { escapeColor, Colors } from "escape-minecraft-colors";
const { escapeColor, Colors } = require("escape-minecraft-colors")

escapeColor("&aHello &bWorld"); // Output: "Hello World"
escapeColor("&aHello &bWorld", Colors.GREEN); // Output: "Hello &bWorld"
escapeColor("&aHello §bWorld", Colors.ALL, "§") // Output: "&aHello World"
````