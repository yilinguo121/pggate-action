# Licensing

- `action.yml`, `README.md` and `.github/` are licensed under FSL-1.1-MIT ([LICENSE](LICENSE)).
- `dist/`, `scripts/` and `package.json` are pggate itself, built from the source at the matching tag. pggate is licensed file by file: most of it is FSL-1.1-MIT ([LICENSE](LICENSE)), and the files that implement the paid features (Rescue and Guard) are under the pggate Commercial License ([LICENSE-COMMERCIAL](LICENSE-COMMERCIAL)): you can read them and run them without a key, but using a paid feature needs a license key. The bundle in `dist/` contains code under both licenses; `dist/LICENSING.md`, copied from pggate at each release, lists which source files are which.
- The open-source packages bundled into `dist/` keep their own licenses, collected in `THIRD_PARTY_NOTICES`.
- splinter (Supabase's linter) is not in this repository: it has no license upstream, so the action downloads it from a pinned commit and checks its sha256.
