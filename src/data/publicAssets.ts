import { readdir, readFile, stat } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

/**
 * Files in `src/assets` are the single source of truth. Images there are also
 * republished verbatim under `/assets/<file>` so they have a stable, unhashed
 * public URL — unlike the hashed variants `astro:assets` emits for imports.
 * Fonts stay private.
 *
 * Resolved from the project root, not `import.meta.url` — this module gets
 * bundled into `dist/chunks/` during build, so a relative URL would break.
 */
const ASSETS_DIR = new URL("src/assets/", pathToFileURL(`${process.cwd()}/`));

const CONTENT_TYPES: Record<string, string> = {
	".avif": "image/avif",
	".gif": "image/gif",
	".jpeg": "image/jpeg",
	".jpg": "image/jpeg",
	".png": "image/png",
	".svg": "image/svg+xml",
	".webp": "image/webp",
};

export type PublicAsset = {
	name: string;
	extension: string;
	contentType: string;
	size: number;
};

const extensionOf = (name: string) => {
	const dot = name.lastIndexOf(".");
	return dot === -1 ? "" : name.slice(dot).toLowerCase();
};

export const listPublicAssets = async (): Promise<PublicAsset[]> => {
	const entries = await readdir(ASSETS_DIR, { withFileTypes: true });

	const assets = await Promise.all(
		entries
			.filter((entry) => entry.isFile())
			.map((entry) => ({ name: entry.name, extension: extensionOf(entry.name) }))
			.filter(({ extension }) => extension in CONTENT_TYPES)
			.map(async ({ name, extension }) => ({
				name,
				extension,
				contentType: CONTENT_TYPES[extension],
				size: (await stat(new URL(name, ASSETS_DIR))).size,
			}))
	);

	return assets.sort((a, b) => a.name.localeCompare(b.name));
};

export const readPublicAsset = (name: string) => readFile(fileURLToPath(new URL(name, ASSETS_DIR)));

export const formatBytes = (bytes: number) => {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`;
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};
