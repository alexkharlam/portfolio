import { GitHub } from "react-feather";

function GitHubIcon({ size }) {
  return (
    <div className="rounded-full p-1.5 transition-all duration-300 group-hover:bg-gray-800 dark:group-hover:bg-gray-100">
      <GitHub
        fill="currentColor"
        size={size}
        className="translate-y-0.5 text-gray-400 group-hover:text-gray-100 dark:group-hover:text-gray-700"
      />
    </div>
  );
}

export default GitHubIcon;
