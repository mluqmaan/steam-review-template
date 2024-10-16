document.addEventListener("DOMContentLoaded", () => {
    const reviewContainer = document.getElementById("review-container");
    const generateButton = document.getElementById("generate-review");
    const reviewOutput = document.getElementById("review-output");
    const copyButton = document.getElementById("copy-review");

    // Sample data for categories with new options
    const categories = [
        { title: "Graphics", options: ["Pixel perfect", "Looks great on a potato", "Average at best", "Visual overload", "Is this Minecraft?", "Impressive lighting effects"] },
        { title: "Gameplay", options: ["Addictive like coffee", "One more level!", "Meh, it's okay", "Sleep-inducing", "Button mashing galore", "Confusing but fun"] },
        { title: "Audio", options: ["Ear candy", "Good background noise", "Forgettable", "Volume stuck at 11", "Who needs sound anyway?", "Annoying jingles"] },
        { title: "Story", options: ["Oscar-worthy", "Intriguing plot twists", "Pretty generic", "Did they even try?", "I have no idea what's going on", "Emotional rollercoaster"] },
        { title: "Bugs", options: ["Bug-free utopia", "Minor annoyances", "Funny glitches", "Game-breaking madness", "More bugs than a rainforest", "I thought it was part of the game"] },
        { title: "Difficulty", options: ["Hold-my-hand easy", "Just challenging enough", "Git Gud", "Unfair as Dark Souls", "Pure rage fuel", "Do I even have thumbs?"] },
        { title: "Multiplayer", options: ["Best with friends", "Toxic community", "Great co-op", "Endless waiting for lobbies", "Full of hackers", "Smooth matchmaking"] },
        { title: "PC Requirements", options: ["Runs on a toaster", "Low-end friendly", "Mid-tier required", "High specs recommended", "RTX or go home", "NASA's computer required"] }
    ];

    // Generate form elements for each category
    categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";

        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = `---{ ${category.title} }---`;
        categoryDiv.appendChild(categoryTitle);

        category.options.forEach(option => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = category.title;
            input.value = option;

            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${option}`));
            categoryDiv.appendChild(label);
            categoryDiv.appendChild(document.createElement("br"));
        });

        reviewContainer.appendChild(categoryDiv);
    });

    // Generate the review based on selected options
    generateButton.addEventListener("click", () => {
        let reviewText = "";

        categories.forEach(category => {
            reviewText += `---{ ${category.title} }---\n`;

            category.options.forEach(option => {
                const selectedOption = document.querySelector(`input[name="${category.title}"]:checked`);
                if (selectedOption && selectedOption.value === option) {
                    reviewText += `☑ ${option}\n`;
                } else {
                    reviewText += `☐ ${option}\n`;
                }
            });

            reviewText += `\n`;
        });

        reviewOutput.value = reviewText;
    });

    // Copy the generated review to the clipboard
    copyButton.addEventListener("click", () => {
        reviewOutput.select();
        document.execCommand("copy");
        alert("Review copied to clipboard!");
    });
});
