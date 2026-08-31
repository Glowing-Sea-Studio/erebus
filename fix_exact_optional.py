import glob

files = [
    "packages/react/src/checkbox-group/CheckboxGroupContext.ts",
    "packages/react/src/radio-group/RadioGroupContext.ts"
]
for path in files:
    with open(path, "r") as f:
        content = f.read()
    content = content.replace("name?: string;", "name?: string | undefined;")
    content = content.replace("size?: 'sm' | 'md' | 'lg';", "size?: 'sm' | 'md' | 'lg' | undefined;")
    content = content.replace("disabled?: boolean;", "disabled?: boolean | undefined;")
    with open(path, "w") as f:
        f.write(content)

