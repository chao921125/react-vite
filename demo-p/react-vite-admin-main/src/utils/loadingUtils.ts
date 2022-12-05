export const hiddenSpinner = () => {
  const spinner = document.getElementById('spinner');
  spinner?.parentNode?.removeChild(spinner);
};
