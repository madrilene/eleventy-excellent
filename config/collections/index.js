/** Returns all blog posts as a collection. */
const getAllProjects = collection => {
	const projects = collection.getFilteredByGlob('./src/projects/*.md');
	return projects.reverse();
};

module.exports = {
	getAllProjects
};
