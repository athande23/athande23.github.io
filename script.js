const projectSections = [...document.querySelectorAll("[data-project]")];
const projectLinks = [...document.querySelectorAll(".project-nav__links a")];
const projectCounter = document.querySelector("#current-project");

const setCurrentProject = (projectId) => {
  const activeIndex = projectSections.findIndex((section) => section.id === projectId);

  if (activeIndex === -1) return;

  projectLinks.forEach((link) => {
    if (link.hash === `#${projectId}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (projectCounter) {
    projectCounter.textContent = String(activeIndex + 1).padStart(2, "0");
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
    const currentProject = visibleEntries[0]?.target;

    if (currentProject) setCurrentProject(currentProject.id);
  },
  {
    rootMargin: "-30% 0px -50% 0px",
    threshold: [0, 0.2, 0.5, 0.8],
  },
);

projectSections.forEach((section) => observer.observe(section));
