// Этот скрипт предназначен для плавного увеличения чисел и написан эксклюзивно под платформу SMART Продажи

// Для использования нужно в HTML добавить аттрибут data-value="Число до которого будет идти отчет"
// а внутрь тега написать число с которого будет идти отчет, например 0

function increaseNumber(element, targetValue, duration) {
  let animationId;
  const initialValue = parseInt(element.textContent);
  const difference = targetValue - initialValue;
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = elapsedTime / duration;
    let newValue;

    if (progress >= 1) {
      newValue = targetValue;
    } else {
      newValue = initialValue + Math.floor(difference * progress);
    }

    element.textContent = newValue;

    if (progress < 1) {
      animationId = requestAnimationFrame(animate);
    }
  }

  animate(startTime);

  function stopAnimation() {
    cancelAnimationFrame(animationId);
  } 

  document.addEventListener("visibilitychange", stopAnimation);
  window.addEventListener("focus", () => {
    animationId = requestAnimationFrame(animate);
  });
}

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
}

function handleScroll() {
  const elements = document.querySelectorAll("[data-value]:not(.animated)");

  elements.forEach((element) => {
    if (isElementVisible(element)) { 
      const targetValue = parseInt(element.dataset.value);
      const duration = 1000;

      element.classList.add("animated");
      increaseNumber(element, targetValue, duration);
    } 
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll(); 