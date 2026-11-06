#!/usr/bin/env node
// postinstall of the pggate npm package: download splinter.sql (Supabase's linter, run by the structural layer) from a pinned
// commit and check its sha256. splinter has no license upstream, so pggate does not redistribute it. A failure only warns:
// pggate then reports UNSUPPORTED_STRUCTURAL (or pass --no-structural). Run this file again to retry.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const COMMIT = "cd6d16a741483f5fdb7d6d065ede3400e4565510";
const SHA256 = "d8d558baad3e03832e521c527907fa50a9a172fabd899dd0f5c2504a5a0e9349";
const URL_ = "https://raw.githubusercontent.com/supabase/splinter/cd6d16a741483f5fdb7d6d065ede3400e4565510/splinter.sql";
const target = join(dirname(fileURLToPath(import.meta.url)), '..', 'vendor', 'splinter', 'splinter.sql');
const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');

try {
  if (existsSync(target) && sha256(readFileSync(target)) === SHA256) {
    console.log(`[pggate] splinter.sql already present (${COMMIT.slice(0, 7)}, sha256 ok)`);
  } else {
    const res = await fetch(URL_);
    if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${URL_}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (sha256(buf) !== SHA256) throw new Error(`sha256 mismatch for ${URL_}`);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, buf);
    console.log(`[pggate] downloaded splinter.sql (${COMMIT.slice(0, 7)}, sha256 ok)`);
  }
} catch (err) {
  console.warn(`[pggate] could not download splinter.sql: ${err instanceof Error ? err.message : String(err)}`);
  console.warn('[pggate] the structural layer will report UNSUPPORTED_STRUCTURAL; run this script again, or pass --no-structural');
}
