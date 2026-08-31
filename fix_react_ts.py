import os

with open("packages/react/src/radio/Radio.tsx", "r") as f:
    content = f.read()
content = content.replace("RadioSize", "'sm' | 'md' | 'lg'")
with open("packages/react/src/radio/Radio.tsx", "w") as f:
    f.write(content)

with open("packages/react/src/switch/Switch.tsx", "r") as f:
    content = f.read()
content = content.replace("SwitchSize", "'sm' | 'md' | 'lg'")
with open("packages/react/src/switch/Switch.tsx", "w") as f:
    f.write(content)
