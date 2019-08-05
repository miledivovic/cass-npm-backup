require(".")

var repo = new EcRepository();
repo.selectedServer = "https://dev.cassproject.org/api/";
repo.search("@type:Framework", console.log, console.error);

console.log(EcPpk.generateKey());