/** @format */

import localFont from "next/font/local"

export const gothamFonts = localFont({
	src: [
		{
			path: "./Gotham/Gotham-Light.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./Gotham/Gotham-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./Gotham/Gotham-Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
})
