document.addEventListener("DOMContentLoaded", () => {

```
// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Reveal elements as they enter the viewport
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

reveals.forEach(element => {
    element.style.animationPlayState = "paused";
    observer.observe(element);
});
```

});
