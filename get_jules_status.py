import os
import json
import urllib.request

api_key = os.environ.get("JULES_API_KEY")
session_id = "355918524138734194"
url = f"https://jules.googleapis.com/v1alpha/sessions/{session_id}"

req = urllib.request.Request(
    url,
    headers={"x-goog-api-key": api_key, "Content-Type": "application/json"},
    method="GET"
)

try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode("utf-8"))
        print(f"State: {data.get('state')}")
        outputs = data.get("outputs", [])
        for out in outputs:
            if "pullRequest" in out:
                print(f"PR: {out['pullRequest'].get('url')}")
except Exception as e:
    print(f"Error: {e}")
