var fs = require("fs")
var descs = fs.readFileSync("descs.txt").toString().split("\n\n");
descs = descs.slice(0, descs.length - 1);
for (desc of descs)
{
    var className = desc.substring(1, desc.indexOf("]"))
    var classFile = fs.readFileSync("source/" + className + ".md").toString().split("\n")
    desc = desc.substring(desc.indexOf("]\n"))
    var things = desc.split("\n")
    for (let i = 0; i < classFile.length; i++)
    {
        for (thing of things)
            if (classFile[i] == "## " + thing.substring(0, thing.indexOf(" -=- ")))
                classFile[i + 1] = "* **Description =** " + thing.substring(thing.indexOf(" -=- ") + 5, thing.length)
    }
    fs.writeFileSync("source/" + className + ".md", classFile.join("\n"))
}