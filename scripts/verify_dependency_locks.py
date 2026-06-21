#!/usr/bin/env python3
"""Verify Phase 25 dependency lock manifest.

This is an evidence-only CI determinism guard. It verifies that selected
dependency input files match recorded SHA-256 digests.
"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
MANIFEST_PATH = REPO_ROOT / "docs" / "evidence" / "phase25_dependency_lock_manifest.json"


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def main() -> int:
    manifest = json.loads(MANIFEST_PATH.read_text())
    failures: list[str] = []

    for item in manifest["locked_files"]:
        relative_path = item["path"]
        expected = item["sha256"]
        target = REPO_ROOT / relative_path

        if not target.exists():
            failures.append(f"{relative_path}: missing")
            continue

        actual = sha256_file(target)
        if actual != expected:
            failures.append(
                f"{relative_path}: sha256 mismatch expected={expected} actual={actual}"
            )

    if failures:
        print("Phase 25 dependency lock verification failed:")
        for failure in failures:
            print(f"- {failure}")
        return 1

    print("Phase 25 dependency lock verification passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
