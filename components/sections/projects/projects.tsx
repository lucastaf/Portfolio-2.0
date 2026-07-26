import ProjectsList from "./projects-list";

export default function Projects() {
  return (
    <div>
      <h1 className="mb-4 text-2xl">Projetos</h1>
      <h1 className="ml-16 text-xl mb-4">WEB</h1>
      <div className="mx-16 mb-4 grid grid-cols-2 gap-8">
        <ProjectsList type="web" />
      </div>
    </div>
  );
}
