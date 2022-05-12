const items = { key: 1, key2: 2, key3: "three" };
console.log(items["key2"]);

items["key2"] = "two";
console.log(items["key2"]);

for(const [k, v] of Object.entries(items)) {
    console.log(`Key: ${k}; Value: ${v}`);
}