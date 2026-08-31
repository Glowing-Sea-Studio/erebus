import glob

for inp in ["packages/react/src/number-input/NumberInput.tsx", "packages/react/src/search-input/SearchInput.tsx"]:
    with open(inp, "r") as f:
        content = f.read()
    content = content.replace("useRef<HTMLInputElement>(null)", "useRef<HTMLInputElement | null>(null)")
    with open(inp, "w") as f:
        f.write(content)

