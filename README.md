# pggate action

Runs [pggate](https://pggate.dev) on every pull request of a Supabase project. Your migrations (or a schema snapshot) are rebuilt in a Postgres 18 sandbox (PGlite) with 100,000 synthetic rows per main table, every read query is run through `EXPLAIN (ANALYZE, BUFFERS)`, and one comment on the pull request lists the findings with their EXPLAIN numbers and the fixes that were proven in the same run. Nothing is sent to a pggate server: there is none.

## Usage

```yaml
# .github/workflows/pggate.yml
name: pggate
on: [pull_request]
permissions:
  contents: read
  pull-requests: write
jobs:
  pggate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: yilinguo121/pggate-action@v0   # or pin a full commit SHA
```

This fails the job on every fail finding in the report, old or new. To fail only on the problems a pull request adds, you need a Guard key: put it in a secret and set `base` too.

```yaml
      - uses: yilinguo121/pggate-action@v0
        with:
          base: ${{ github.base_ref }}
          license-key: ${{ secrets.PGGATE_LICENSE_KEY }}
```

With `base` set and no valid Guard key, the report gets a `LICENSE_REQUIRED` finding and the job exits 2.

## Inputs

| input | default | |
|---|---|---|
| `profile` | `scale` | `scale` loads 100,000 rows per main table; `small` loads 1,000 |
| `working-directory` | the workspace | where `supabase/migrations` is |
| `snapshot` | none | a schema snapshot or schema dump to build the schema from (see below) |
| `base` | none | the base branch for the diff gate; needs a Guard key in `license-key` |
| `license-key` | none | your pggate license key; pass it as a secret |
| `comment` | `true` | leave one comment on the pull request and update it on every push |
| `github-token` | `github.token` | the token used for the comment |
| `structural` | `true` | also run Supabase's linter (splinter) in the sandbox |
| `data-budget` | the CLI's | the most synthetic data to load, in MB, or `none` |
| `explain-timeout` | 30 s | the limit for one EXPLAIN, in seconds |

Outputs: `exit-code` and `report` (the path of the Markdown report).

## Exit code

`0` nothing found · `1` a fail finding (with `base`, only one the pull request adds) · `2` something could not be analysed (`UNSUPPORTED_*`) or needs a license key (`LICENSE_REQUIRED`). pggate never skips something and exits 0. To accept a finding you have read, list its `file:line` under `acknowledge` in `pggate.config.json`.

## Tables made in the dashboard

If some tables are not created by any migration, give the action a snapshot of your schema: `snapshot: supabase/pggate-snapshot.json` (from `npx pggate snapshot --db-url …`, or the SQL Editor export described on pggate.dev), or the output of `supabase db dump`. A `supabase db dump` file has to be passed this way: it has no pg_dump header, so inside `supabase/migrations/` it would run as one more migration. A snapshot holds definitions, never rows.

## The license key and pull requests from forks

The key goes to the CLI as `PGGATE_LICENSE_KEY` in the one step that runs it. The CLI checks it against Lemon Squeezy's License API once per run; in CI it does not store the key and does not use up an activation. GitHub does not give secrets to workflows run for pull requests from forks, so there the diff gate reports `LICENSE_REQUIRED`; leave `base` empty for those, or run the gate only on branches of your own repository. A fork's token is also read-only: the comment is skipped with a warning and the report stays in the job summary.

## What leaves the runner

- The license key, if you give one, to `api.lemonsqueezy.com` (a validation only). Never your schema, queries, connection string or report.
- `splinter.sql` is downloaded from GitHub at a pinned commit and checked against its sha256 (skip it with `structural: false`).
- The comment goes to your own pull request through the GitHub API.

## Versions

Releases are tagged `vX.Y.Z`, and `vX` moves to the latest release of each major version. `dist/` is built only in CI, from the `vX.Y.Z` tag of pggate's source: twice, and the two builds must be byte-identical and identical to the npm package `pggate@X.Y.Z`. The files carry a build provenance attestation:

```sh
gh attestation verify dist/bin.js --repo yilinguo121/pggate-action
```

Pinning a full commit SHA is the safest choice; Dependabot keeps SHA pins up to date.

## License

Licensed file by file: see [LICENSING.md](LICENSING.md).
