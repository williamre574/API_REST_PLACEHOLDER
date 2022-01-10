export function Posts () {
	const $posts = document.createElement("main");
	$posts.id = "posts";
	$posts.classList.add("grid-fluid");
	return $posts;
}