export function getProjectImages(projectFolder) {
    const allImages = import.meta.glob('/src/assets/images/Projects/**/*.{png, jpg, jpeg}', { eager: true });
    console.log(allImages);
    return Object.entries(allImages).filter(([path]) => path.includes(`/src/assets/images/Projects/${projectFolder}`)).map(([, module]) => module.default);
}