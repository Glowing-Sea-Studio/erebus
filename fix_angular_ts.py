import os
import glob
import re

angular_dir = "packages/angular/src"
for root, _, files in os.walk(angular_dir):
    for file in files:
        if file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
            
            # Remove ChangeDetectionStrategy unused import
            content = re.sub(r'ChangeDetectionStrategy,\s*', '', content)
            content = re.sub(r',\s*ChangeDetectionStrategy', '', content)
            
            # Remove moduleMetadata unused import
            content = re.sub(r"import\s*{\s*moduleMetadata\s*}\s*from\s*'@storybook/angular';\n*", '', content)
            
            # Fix Meta<T> and StoryObj<T>
            content = re.sub(r'Meta<Erb[A-Za-z]+>', 'Meta', content)
            content = re.sub(r'StoryObj<Erb[A-Za-z]+>', 'StoryObj', content)
            
            with open(path, 'w') as f:
                f.write(content)

# Also fix the rootDir issue in tsconfig by setting include or removing rootDir
tsconfig_path = "packages/angular/.storybook/tsconfig.json"
if os.path.exists(tsconfig_path):
    with open(tsconfig_path, 'r') as f:
        content = f.read()
    content = content.replace('"src/**/*.ts"', '"../src/**/*.ts", "*.ts"')
    with open(tsconfig_path, 'w') as f:
        f.write(content)
