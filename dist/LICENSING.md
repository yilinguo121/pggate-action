# Licensing

pggate is licensed file by file under two licenses.

- **FSL-1.1-MIT** ([LICENSE](LICENSE)): everything in this repository except the files listed below. Use, modify and redistribute it for anything except a competing product; each version becomes available under the MIT license two years after its release.
- **pggate Commercial License** ([LICENSE-COMMERCIAL](LICENSE-COMMERCIAL)): the files that implement the paid features (Rescue and Guard). You can read them and run them without a key, but using a paid feature needs a license key. Each of these files starts with `SPDX-License-Identifier: LicenseRef-pggate-commercial`.

## Files under the pggate Commercial License

| path | what it does |
|---|---|
| `packages/core/src/diff/` | the diff gate (`--base`, Guard) |
| `packages/core/src/license/` | license keys, tiers and the limits of the free tier |
| `packages/core/src/report/migration.ts` | the migration file with every proven fix (Rescue) |
| `packages/cli/src/base.ts` | reads the base branch for `--base` (Guard) |
| `packages/cli/src/hook.ts` | `pggate hook` (Guard) |
| `packages/cli/src/license-store.ts` | where the CLI keeps your license key |
| `packages/cli/src/rescue.ts` | `pggate rescue` (Rescue; `--dsn` is Guard) |

Their tests are under the same license: `packages/core/src/diff/diff.test.ts`, `packages/core/src/license/license.test.ts` and `packages/cli/src/{base,hook,license,realstats,rescue}.test.ts`.

## Packages built from this repository

The npm package `pggate` and the pggate GitHub Action bundle code under both licenses into the same files. Both license texts and this file ship with them, and their `license` field is `SEE LICENSE IN LICENSING.md`. The open-source packages they bundle keep their own licenses, collected in `THIRD_PARTY_NOTICES`.

splinter (Supabase's linter) is not part of pggate and is not redistributed: it has no license upstream, so it is downloaded from a pinned commit and checked against its sha256 when you install.
