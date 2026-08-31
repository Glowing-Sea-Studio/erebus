import os
import glob
import re

angular_dir = "packages/angular/src"
for root, _, files in os.walk(angular_dir):
    for file in files:
        if file.endswith('.stories.ts'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
            
            content = re.sub(r'render:\s*\(\s*args\s*\)\s*=>', 'render: (args: any) =>', content)
            
            with open(path, 'w') as f:
                f.write(content)
