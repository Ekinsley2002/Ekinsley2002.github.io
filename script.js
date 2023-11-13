
document.addEventListener("DOMContentLoaded", function () {
    const ideasContainer = document.getElementById("ideas-container");
    const generateIdeaButton = document.getElementById("generate-idea-button");

    // Array of friendly ideas
    const ideas = [
        "Go for a walk in the park.",
        "Try a new recipe for dinner.",
        "Read a book you've been wanting to read.",
        "Learn a new hobby or skill.",
        "Call or video chat with a friend or family member.",
        "Organize and declutter a room in your house.",
    ];

    let currentIndex = -1; // Initialize with -1 to start with the first idea on the first click

    generateIdeaButton.addEventListener("click", function () {
        currentIndex++;
        if (currentIndex >= ideas.length) {
            currentIndex = 0; // Start over when reaching the end of the ideas
        }

        const idea = ideas[currentIndex];
        ideasContainer.textContent = idea;
    });
});
