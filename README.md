# agentex-morpho-test

Next.js Morpho earn/borrow demo app, deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## UTM Link Registry → Notion sync

The Link Registry tool fires a `repository_dispatch` event at this repo whenever a UTM link is added. The `.github/workflows/utm-to-notion.yml` workflow receives it and appends a row to the [UTM Link Registry](https://app.notion.com/p/morpho-labs/4d95eb4ebf164662b65b0bfb33af212b) Notion database.

### One-time setup

1. **Notion integration**
   - Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) and create an internal integration in the `morpho-labs` workspace (capabilities: *Insert content* is enough).
   - Copy the integration secret (`ntn_…`).
   - Open the **UTM Link Registry** database in Notion → `⋯` menu → **Connections** → add your integration.

2. **Repo secret**
   - Repo → Settings → Secrets and variables → Actions → **New repository secret**
   - Name: `NOTION_TOKEN`, value: the integration secret.

3. **Default branch**
   - `repository_dispatch` only triggers workflows on the repo's **default branch**. Make sure the default branch is `main` (Settings → General → Default branch) and that this workflow file exists there.

4. **GitHub token for the tool**
   - Create a [fine-grained PAT](https://github.com/settings/personal-access-tokens/new): resource owner `jj-morpho`, **only** this repository, Repository permissions → **Contents: Read and write**.
   - Paste it into the Link Registry tool's token field and hit *Save token*.

### Payload contract

The workflow accepts any `event_type`. It maps `client_payload` fields to Notion columns (snake_case or camelCase both work):

| Payload field | Notion column |
| --- | --- |
| `utm_content` / `content` | utm_content (title) |
| `tagged_url` / `url` | Tagged URL |
| `destination` / `base_url` | Destination |
| `source` / `utm_source` | Source |
| `medium` / `utm_medium` | Medium |
| `campaign` / `utm_campaign` | Campaign |
| `account` | Account |
| `posthog_project` / `project` | PostHog Project |
| `status` (defaults to `generated`) | Status |
| `publish_date` / `date` | Publish Date |
| `typefully_draft` / `draft` | Typefully Draft |
| `notes` | Notes |

Empty/missing fields are omitted. Test manually from the Actions tab (**UTM to Notion Registry → Run workflow**) with a JSON payload, e.g.:

```json
{"utm_content":"20260804-x-jj-test","tagged_url":"https://app.morpho.org/?utm_source=x&utm_medium=social&utm_campaign=brand&utm_content=20260804-x-jj-test","destination":"https://app.morpho.org","source":"x","medium":"social","campaign":"brand","account":"jj"}
```
