export interface UpcomingEvent {
	name: string;
	dateDisplay: string;
	dateFrom: Date;
	url: string;
	talkTitle: string;
}

export const UPCOMING_EVENTS: UpcomingEvent[] = [
	{
		name: "4Developers",
		dateDisplay: "22.04.2026",
		dateFrom: new Date("2026-04-22"),
		url: "https://4developers.org.pl/",
		talkTitle: "Your AI Agent is just a while loop with an API call. Let me prove it.",
	},
	{
		name: "Meet.js Gdańsk",
		dateDisplay: "23.04.2026",
		dateFrom: new Date("2026-04-23"),
		url: "https://www.meetup.com/gdansk-typescript/events/314214663",
		talkTitle: "Your AI Agent is just a while loop with an API call. Let me prove it.",
	},
	{
		name: "infoShare",
		dateDisplay: "20–21.05.2026",
		dateFrom: new Date("2026-05-20"),
		url: "https://infoshare.pl/conference/speakers/#speaker1994",
		talkTitle: "Your AI Agent is just a while loop with an API call. Let me prove it.",
	},
];

export interface Video {
	id: string;
	title: string;
	event: string;
	year: number;
	language: "EN" | "PL";
	url: string;
	description?: string;
	thumbnailUrl?: string;
	duration?: string;
	type: "conference" | "meetup" | "podcast" | "other";
}

export const VIDEOS: Video[] = [
	{
		id: "infoshare-2025-senior-manager",
		title: "Senior → Manager → Senior, jak odejść i wrócić do programowania",
		event: "InfoShare 2025",
		year: 2025,
		language: "PL",
		url: "https://youtu.be/EJHZVdvz72c?is=qXp5EG47P_krGN4s",
		type: "conference",
	},
	{
		id: "infoshare-dev-2024-4day-week",
		title: "Less is more? Insights from 4 day work week",
		event: "infoShare Dev 2024",
		year: 2024,
		language: "PL",
		url: "https://youtu.be/DAVLNpsGKLI?is=3OSRQpLJXKtOk1ML",
		type: "conference",
	},
	{
		id: "c3-dev-festival-2024",
		title: "From Senior Developer to Manager and Back: The Journey of Returning to Coding",
		event: "C3 Dev Festival 2024",
		year: 2024,
		language: "EN",
		url: "https://portal.gitnation.org/contents/from-senior-developer-to-manager-and-back-the-journey-of-returning-to-coding-2248",
		type: "conference",
	},
	{
		id: "warsawjs-116-2024-template-literal-types",
		title: "TypeScript Template literal types - who need it anyway?",
		event: "WarsawJS #116",
		year: 2024,
		language: "EN",
		url: "https://www.youtube.com/watch?v=QNCA_nBWQsY&t=1s",
		type: "meetup",
	},
	{
		id: "kongres-nextjs-2024",
		title: "Next.js is my main web server for all APIs. And I like it!",
		event: "Kongres Next.js 2024",
		year: 2024,
		language: "EN",
		url: "https://www.youtube.com/watch?v=ouIQKo1KPtQ",
		type: "conference",
	},
	{
		id: "infoshare-2024-nextjs-apis",
		title: "Next.js is my main web server for all APIs. And I like it!",
		event: "InfoShare 2024",
		year: 2024,
		language: "EN",
		url: "https://infoshare.pl/recordings/next-js-is-my-main-web-server-for-all-apis-and-i-like-it-o2580gc201-one.html",
		type: "conference",
	},
	{
		id: "infoshare-2023-template-literals",
		title: "Template Literal Types - who needs them anyway?",
		event: "InfoShare 2023",
		year: 2023,
		language: "PL",
		url: "https://infoshare.pl/recordings/template-literal-types-po-co-to-komu-na-co-to-komu-o2222gc191-one.html",
		type: "conference",
	},
	{
		id: "devjs-summit-2022-iframe",
		title: "Gdy iframe iframem iframea pogania",
		event: "dev.js Summit 2022",
		year: 2022,
		language: "PL",
		url: "https://www.youtube.com/watch?v=uy7rC_AZMSs",
		type: "conference",
	},
	{
		id: "4dev-2021-faas",
		title: "FaaS od środka",
		event: "4Dev 2021",
		year: 2021,
		language: "PL",
		url: "https://youtu.be/xTSFxLiLIVo",
		type: "conference",
	},
	{
		id: "atlassian-dev-day-2021",
		title: "What's new in Forge?",
		event: "Atlassian Developer Day 2021",
		year: 2021,
		language: "EN",
		url: "https://youtu.be/fgdJ9zid1VU",
		type: "conference",
	},
	{
		id: "atlassian-dev-day-2020",
		title: "Adding UI to your Forge app",
		event: "Atlassian Developer Day 2020",
		year: 2020,
		language: "EN",
		url: "https://youtu.be/7u57rbDV4rc",
		type: "conference",
	},
	{
		id: "js-sphere-2019",
		title: "How to model your crazy data in TypeScript",
		event: "JS Sphere 2019",
		year: 2019,
		language: "EN",
		url: "https://youtu.be/HQ-7ldlWXmY",
		type: "conference",
	},
	{
		id: "infoshare-2019-typescript",
		title: "TypeScript na styku warstw aplikacji",
		event: "InfoShare 2019",
		year: 2019,
		language: "PL",
		url: "https://youtu.be/99ZtVKG5PzI",
		type: "conference",
	},
	{
		id: "warsawjs-2019-bootcamps",
		title: "Bootcampy okiem trenera i developera",
		event: "WarsawJS #58 2019",
		year: 2019,
		language: "PL",
		url: "https://www.youtube.com/watch?v=xE_0qfKolXk&t=142s",
		type: "meetup",
	},
];
