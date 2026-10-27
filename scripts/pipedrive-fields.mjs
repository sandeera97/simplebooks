#!/usr/bin/env node
/**
 * Print every custom Deal field in both Pipedrive accounts, with its id.
 *
 * The field ids in lib/pipedriveFields.ts are per-account hashes that cannot be
 * guessed, so this is how you find the id for a field the team has just added:
 *
 *   PIPEDRIVE_TOKEN_BUSINESS=... PIPEDRIVE_TOKEN_TAX=... node scripts/pipedrive-fields.mjs
 *
 * It also reports how close each account is to Pipedrive's custom-field limit,
 * which is why fbclid, gclid and the landing page have no field on the business
 * account.
 */

const API = process.env.PIPEDRIVE_API_BASE || "https://api.pipedrive.com/v1";

const ACCOUNTS = [
  ["business", process.env.PIPEDRIVE_TOKEN_BUSINESS],
  ["tax", process.env.PIPEDRIVE_TOKEN_TAX],
];

async function get(token, path) {
  const res = await fetch(`${API}${path}`, { headers: { "x-api-token": token } });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || `${path} failed (${res.status})`);
  return json.data ?? [];
}

let missing = false;

for (const [name, token] of ACCOUNTS) {
  if (!token) {
    console.error(`\n${name}: no token — set PIPEDRIVE_TOKEN_${name.toUpperCase()}`);
    missing = true;
    continue;
  }

  const [me, dealFields, personFields] = await Promise.all([
    get(token, "/users/me"),
    get(token, "/dealFields"),
    get(token, "/personFields"),
  ]);

  const custom = dealFields.filter((f) => f.edit_flag);
  const customPersonCount = personFields.filter((f) => f.edit_flag).length;

  console.log(`\n=== ${name} — ${me.company_name} ===`);
  console.log(`${custom.length} custom deal fields, ${customPersonCount} custom person fields`);

  for (const f of custom) {
    console.log(`  ${f.key}  ${f.field_type.padEnd(12)} ${f.name}`);
    for (const o of f.options ?? []) console.log(`      ${o.id} = ${o.label}`);
  }

  const stages = await get(token, "/stages");
  const pipelines = await get(token, "/pipelines");
  const workingPipeline = pipelines.find((p) => p.selected) ?? pipelines[0];
  const first = stages
    .filter((s) => s.pipeline_id === workingPipeline?.id)
    .sort((a, b) => a.order_nr - b.order_nr)[0];
  console.log(`  default pipeline: ${workingPipeline?.name} — first stage ${first?.id} (${first?.name})`);
}

if (missing) process.exitCode = 1;
