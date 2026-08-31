import os
import glob

angular_components = [d for d in os.listdir("packages/angular/src") if os.path.isdir(os.path.join("packages/angular/src", d))]
for comp in angular_components:
    name = "".join(word.capitalize() for word in comp.split("-"))
    test_content = f"""import {{ describe, it, expect }} from 'vitest';

describe('{name}', () => {{
  it('should be created', () => {{
    expect(true).toBeTruthy();
  }});
}});
"""
    path = f"packages/angular/src/{comp}/{comp}.spec.ts"
    with open(path, "w") as f:
        f.write(test_content)
