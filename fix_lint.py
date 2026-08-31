import json

for pkg in ["packages/react/package.json", "packages/angular/package.json", "packages/core/package.json"]:
    with open(pkg, "r") as f:
        data = json.load(f)
    if "lint" in data["scripts"]:
        # append --no-error-on-unmatched-pattern
        if "--no-error-on-unmatched-pattern" not in data["scripts"]["lint"]:
            data["scripts"]["lint"] += " --no-error-on-unmatched-pattern"
    with open(pkg, "w") as f:
        json.dump(data, f, indent=2)

