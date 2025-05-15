const ProjectCard = ({ title, description, tech, githubUrl, liveUrl, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{description}</p>

        {tech && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex justify-between items-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live Site
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
