export function getArtImages(projectFolder) {
    const allImages = import.meta.glob('/src/assets/images/Drawings/**/*.{png, jpg, jpeg, PNG, JPG, JPEG}', { eager: true });
    // console.log(allImages);
    return Object.entries(allImages).filter(([path]) => path.includes(`/src/assets/images/Drawings/${projectFolder}`)).map(([, module]) => module.default);
}