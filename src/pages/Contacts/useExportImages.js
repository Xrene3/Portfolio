export function getIMages(projectFolder) {
    const allImages = import.meta.glob('/src/assets/images/**/*.{png, jpg, jpeg, PNG, JPG, JPEG}', { eager: true });
    // console.log(allImages);
    return Object.entries(allImages).filter(([path]) => path.includes(`/src/assets/images/${projectFolder}`)).map(([, module]) => module.default);
}