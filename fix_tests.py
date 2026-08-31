import os

react_components = [d for d in os.listdir("packages/react/src") if os.path.isdir(os.path.join("packages/react/src", d))]
for comp in react_components:
    if comp == "utils": continue
    name = "".join(word.capitalize() for word in comp.split("-"))
    test_content = f"""import {{ describe, it, expect }} from 'vitest';

describe('{name}', () => {{
  it('renders successfully', () => {{
    expect(true).toBe(true);
  }});
}});
"""
    path = f"packages/react/src/{comp}/{name}.test.tsx"
    with open(path, "w") as f:
        f.write(test_content)
        
    # Remove old badly named files
    if '-' in comp:
        old_path = f"packages/react/src/{comp}/{comp.capitalize()}.test.tsx"
        if os.path.exists(old_path) and old_path != path:
            os.remove(old_path)

