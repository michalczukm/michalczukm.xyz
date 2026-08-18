import type { APIRoute, GetStaticPaths } from "astro";
import { listPublicAssets, readPublicAsset } from "@/data/publicAssets";

export const getStaticPaths: GetStaticPaths = async () => {
	const assets = await listPublicAssets();
	return assets.map((asset) => ({
		params: { file: asset.name },
		props: { contentType: asset.contentType },
	}));
};

export const GET: APIRoute = async ({ params, props }) => {
	const body = await readPublicAsset(params.file!);
	return new Response(body, {
		headers: {
			"Content-Type": props.contentType as string,
			"Cache-Control": "public, max-age=3600",
		},
	});
};
