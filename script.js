document.addEventListener("DOMContentLoaded", () => {
    const reviewContainer = document.getElementById("review-container");
    const generateButton = document.getElementById("generate-review");
    const reviewOutput = document.getElementById("review-output");
    const copyButton = document.getElementById("copy-review");

    // Sample data for categories
    const categories = [
        { title: "Graphics", options: ["You forget what reality is", "Beautiful", "Good", "Decent", "Bad", "Don’t look too long at it", "MS-DOS"] },
        { title: "Gameplay", options: ["Very good", "Good", "It's just gameplay", "Mehh", "Watch paint dry instead", "Just don't"] },
        { title: "Audio", options: ["Eargasm", "Very good", "Good", "Not too bad", "Bad", "I'm now deaf"] },
        { title: "Audience", options: ["Kids", "Teens", "Adults", "Grandma"] },
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
