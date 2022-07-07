import chalk from "chalk";
import chalkTable from "chalk-table";

console.log(
  " ██╗    ██╗ ███████╗ ██╗       ██████╗  ██████╗  ███╗   ███╗ ███████╗\n" +
    " ██║    ██║ ██╔════╝ ██║      ██╔════╝ ██╔═══██╗ ████╗ ████║ ██╔════╝\n" +
    " ██║ █╗ ██║ █████╗   ██║      ██║      ██║   ██║ ██╔████╔██║ █████╗\n" +
    " ██║███╗██║ ██╔══╝   ██║      ██║      ██║   ██║ ██║╚██╔╝██║ ██╔══╝\n" +
    " ╚███╔███╔╝ ███████╗ ███████╗ ╚██████╗ ╚██████╔╝ ██║ ╚═╝ ██║ ███████╗\n" +
    "  ╚══╝╚══╝  ╚══════╝ ╚══════╝  ╚═════╝  ╚═════╝  ╚═╝     ╚═╝ ╚══════╝\n" +
    `                             ${chalk.green.bgGray("@react-webpack-typescript-gourmet v1.0.1")}   `
);

const options = {
  leftPad: 2,
  columns: [
    { field: "id", name: chalk.cyan("🍻") },
    { field: "feature", name: chalk.magenta("Repository Core Features ✨") },
  ],
};

const table = chalkTable(options, [
  { id: "🔰", feature: "React (JavaScript UI framework)" },
  { id: "🔰", feature: "Webpack (Asset bundling)" },
  { id: "🔰", feature: "TypeScript (JavaScript with Types)" },
  { id: "🔰", feature: "Babel (Transpiling JavaScript for older browsers)" },
  { id: "🔰", feature: "Jest RTL (Integration Testing) 🧪" },
]);

console.log(table);
