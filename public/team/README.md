# Team Profile Images Directory (`public/team/`)

This directory is the dedicated storage location for official team member and lead profile pictures across the GFG ITER website.

### Image Guidelines:
- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: Portrait (~4:5 or 3:4)
- **Naming Convention**: `firstname-lastname.jpg` (lowercase, hyphen-separated, e.g., `debdatta-panda.jpg`)
- **Resolution**: Min 400x500px, recommended 800x1000px, compressed for web.

### Usage in Code:
Reference images directly as `/team/<filename>` in `src/lib/site-data.ts`:
```ts
photo: "/team/debdatta-panda.jpg"
```
