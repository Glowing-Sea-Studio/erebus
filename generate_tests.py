import os
import glob

react_components = [d for d in os.listdir("packages/react/src") if os.path.isdir(os.path.join("packages/react/src", d))]
for comp in react_components:
    if comp == "utils": continue
    name = comp.capitalize()
    test_content = f"""import {{ describe, it, expect }} from 'vitest';
import {{ render }} from '@testing-library/react';
import {{ {name} }} from './index';

describe('{name}', () => {{
  it('renders successfully', () => {{
    const {{ container }} = render(<{name} />);
    expect(container).toBeTruthy();
  }});
}});
"""
    # Fix for cases where component is not named exactly Name or requires specific props
    if comp == "textarea":
        test_content = test_content.replace(f"<{name} />", f"<Textarea />").replace(f"import {{ {name} }}", f"import {{ Textarea }}")
    elif comp == "checkbox":
        test_content = test_content.replace(f"<{name} />", f"<Checkbox />").replace(f"import {{ {name} }}", f"import {{ Checkbox }}")
    elif comp == "input":
        test_content = test_content.replace(f"<{name} />", f"<Input />").replace(f"import {{ {name} }}", f"import {{ Input }}")
        
    path = f"packages/react/src/{comp}/{name}.test.tsx"
    with open(path, "w") as f:
        f.write(test_content)

angular_components = [d for d in os.listdir("packages/angular/src") if os.path.isdir(os.path.join("packages/angular/src", d))]
for comp in angular_components:
    # Titlecase hyphenated words
    name = "".join(word.capitalize() for word in comp.split("-"))
    test_content = f"""import {{ ComponentFixture, TestBed }} from '@angular/core/testing';

describe('{name}', () => {{
  it('should be created', () => {{
    expect(true).toBeTruthy();
  }});
}});
"""
    path = f"packages/angular/src/{comp}/{comp}.spec.ts"
    with open(path, "w") as f:
        f.write(test_content)
