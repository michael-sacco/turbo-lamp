const observer = new IntersectionObserver(entries => {
    entries.every(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
            document.querySelectorAll(".active").forEach((z) => {
                z.classList.remove("active")
            });
            const activeElement = document.querySelector(`a[href="#${id}"]`);
            activeElement.classList.add("active")
            activeElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
            return false;
        }
        return true;
    });
}, { rootMargin: '0% 0px -90% 0px', threshold: 0.01 });