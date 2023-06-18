import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "blogposts");

export default function getPosts() {
	const fileNames = fs.readdirSync(postsDir);

	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");

		const fullPath = path.join(postsDir, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf-8");

		const matterResult = matter(fileContents);

		const blogPost: BlogPost = {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date,
		};

		return blogPost;
	});

	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
