for path in ["packages/react/src/index.ts", "packages/angular/src/index.ts"]:
    with open(path, "r") as f:
        content = f.read()
    content = content.replace("';export * from './layer';", "';\nexport * from './layer';")
    with open(path, "w") as f:
        f.write(content)
