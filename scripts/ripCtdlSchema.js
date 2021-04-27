//Generates code from RDFa

var fs = require('fs');

const https = require('https');
https.get("https://credreg.net/ctdl/schema/encoding/json", (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    })
        ;
    resp.on('end', () => {
        while (data != data.replace("http://www.w3.org/2000/01/rdf-schema#", "rdfs:")
        )
            data = data.replace("http://www.w3.org/2000/01/rdf-schema#", "rdfs:");
        while (data != data.replace("http://schema.org/", "schema:"))
            data = data.replace("http://schema.org/", "schema:");
        while (data != data.replace("http://www.w3.org/1999/02/22-rdf-syntax-ns#", "rdf:"))
            data = data.replace("http://www.w3.org/1999/02/22-rdf-syntax-ns#", "rdf:");
        var graph = JSON.parse(data)["@graph"];
        console.log(graph.length);
        for (var i = 0; i < graph.length; i++) {
            var node = graph[i];
            var type = node["@type"];
            if (type == "rdfs:Class") {
                if (node["@id"] == "schema:DataType") continue;
                if (node["@id"] == "schema:Number") continue;
                if (node["@id"] == "schema:Integer") continue;
                if (node["@id"] == "schema:Float") continue;
                if (node["@id"] == "schema:URL") continue;
                fs.writeFileSync("src/org/credentialengine/" + node["@id"].split(":")[1] + ".js", codeGenerate(graph, node, "http://schema.eduworks.com/simpleCtdl"));
            }
        }
        https.get("https://credreg.net/ctdlasn/schema/encoding/json", (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                while (data != data.replace("http://www.w3.org/2000/01/rdf-schema#", "rdfs:"))
                    data = data.replace("http://www.w3.org/2000/01/rdf-schema#", "rdfs:");
                while (data != data.replace("http://schema.org/", "schema:"))
                    data = data.replace("http://schema.org/", "schema:");
                while (data != data.replace("http://www.w3.org/1999/02/22-rdf-syntax-ns#", "rdf:"))
                    data = data.replace("http://www.w3.org/1999/02/22-rdf-syntax-ns#", "rdf:");
                var graph = JSON.parse(data)["@graph"];
                for (var i = 0; i < graph.length; i++) {
                    var node = graph[i];
                    var type = node["@type"];
                    if (type == "rdfs:Class") {
                        if (node["@id"] == "schema:DataType") continue;
                        if (node["@id"] == "schema:Number") continue;
                        if (node["@id"] == "schema:Integer") continue;
                        if (node["@id"] == "schema:Float") continue;
                        if (node["@id"] == "schema:URL") continue;
                        fs.writeFileSync("src/org/credentialengine/" + node["@id"].split(":")[1] + ".js", codeGenerate(graph, node, "http://schema.eduworks.com/simpleCtdl"));
                    }
                }
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    })
        ;
}).on("error", (err) => {
    console.log("Error: " + err.message);
})
    ;

function codeGenerate(graph, node, context) {
    var classId = node["@id"];
    var className = classId.split(":")[1];
    //console.log(node);
    var text = "";
    text += "";
    text += "/**\n";
    text += " * " + classId.replace("ceterms:", "credentialengine.org/").replace("ceasn:", "credentialengine.org/") + "\n";
    text += " * " + node["rdfs:comment"]["en-US"] + "\n";
    if (node["dct:description"] != null)
        text += " * " + node["dct:description"]["en-US"] + "\n";
    text += " * @author credentialengine.org\n";
    text += " * @class " + className + "\n";
    text += " * @module org.credentialengine\n";

    if (node["rdfs:subClassOf"] != null)
        if (node["rdfs:subClassOf"].toString().indexOf("]") != -1)
            node["rdfs:subClassOf"] = node["rdfs:subClassOf"][0];
    if (node["rdfs:subClassOf"] != null)
        text += " * @extends " + node["rdfs:subClassOf"][0].split(":")[1] + "\n";
    text += " */\n";
    text += "module.exports = class " + className;
    if (node["rdfs:subClassOf"] != null)
        text += " extends ce." + (node["rdfs:subClassOf"][0].split(":")[0] == "schema" ? "org.schema." : "") + node["rdfs:subClassOf"][0].split(":")[1] + "\n";
    else
        text += " extends EcRemoteLinkedData\n";
    text += "{\n";
    text += "\t/**\n";
    text += "\t * Constructor, automatically sets @context and @type.\n";
    text += "\t * @constructor\n";
    text += "\t */\n";
    text += "\tconstructor()\n";
    text += "\t{\n";
    if (node["rdfs:subClassOf"] != null) {
        text += "\t\tsuper();\n";
        text += "\t\tthis.setContextAndType(\"" + context + "\",\"" + className + "\");\n";
    }
    else {
        text += "\t\tsuper(\"" + context + "\"";
        text += ",\"" + className + "\");\n";
    }
    text += "\t}\n\n";

    for (var i = 0; i < graph.length; i++) {
        var gn = graph[i];
        var gi = gn["@id"];
        var gt = gn["@type"];
        var gd = gn["schema:domainIncludes"];
        if (gt != "rdf:Property")
            continue;
        //    console.log(gn);
        if (gd == null)
            continue;
        //    console.log(gd);
        var ok = false;
        for (var j = 0; j < gd.length; j++) {
            if (gd[j] == classId)
                ok = true;
        }
        if (!ok) continue;
        text += "\t/**\n";
        text += "\t * " + gi.replace("ceterms:", "http://purl.org/ctdl/terms/").replace("ceasn:", "http://purl.org/ctdlasn/terms/") + "\n";
        if (gn["rdfs:comment"] != null)
            text += "\t * " + gn["rdfs:comment"]["en-US"] + "\n";
        if (gn["dct:description"] != null)
            text += "\t * " + gn["dct:description"]["en-US"] + "\n";
        text += "\t * @property " + gn["@id"].split(":")[1] + "\n";
        text += "\t * @type ";
        var gr = gn["schema:rangeIncludes"];
        if (gr != null) {
            console.log(JSON.stringify(gr));
            if (gr.length === undefined) {
                text += gr.split(":")[1] + "\n";
            } else {
                for (var j = 0; j < gr.length; j++) {
                    if (j > 0)
                        text += " | ";
                    text += gr[j].split(":")[1];
                }
                text += "\n";
            }
            text += "\t */\n";
            if (gr.length == 1) {
                text += "\t";
                text += gn["@id"].split(":")[1] + ";\n\n";
            } else {
                text += "\t" + gn["@id"].split(":")[1] + ";\n\n";
            }
        }
    }
    text += "}";
    return text;
}

function sub(s) {
    if (s == "Text")
        return "String";
    if (s == "Number")
        return "Double";
    if (s == "string")
        return "String";
    if (s == "langString")
        return "String";
    if (s == "Image")
        return "ImageObject";
    if (s == "URL")
        return "String";
    if (s == "anyURI")
        return "String";
    if (s == "dateTime")
        return "String";
    if (s == "Literal")
        return "String";
    if (s == "Date")
        return "String";
    if (s == "date")
        return "String";
    if (s == "language")
        return "String";
    if (s == "float")
        return "Float";
    if (s == "Time")
        return "String";
    if (s == "duration")
        return "String";
    if (s == "integer")
        return "Integer";
    return s;
}
