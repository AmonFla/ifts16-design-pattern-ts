import { ConfigManager } from "./ConfigManager";

const conf1: ConfigManager = ConfigManager.getConfigurador(
  "www.google.com",
  "postgres"
);

console.log("configurador 1");
console.log(conf1);

const conf2: ConfigManager = ConfigManager.getConfigurador(
  "www.yahoo.com",
  "mysql"
);

console.log("configurador 2");
console.log(conf2);

conf2.setDb("mysql");
conf2.setUrl("www.yahoo.com");

console.log("configurador 1");
console.log(conf1);
console.log("configurador 2");
console.log(conf2);
