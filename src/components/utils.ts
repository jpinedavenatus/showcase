export const isHSorVideoSlider = (placementName: string) => {
    console.log('placementName', placementName)
    const validPlacements = ['vertical_sticky', 'horizontal_sticky', 'video_slider', 'pvp_video_slider', 'mobile_horizontal_sticky'];
    return validPlacements.includes(placementName);
};