const articles = [
    {title: "Old static site", content: "Web site created with vanilia htmk, js, css about 'Twenty Thousand Leagues Under The Sea.' </BR> <a link='https://amralt.github.io/FAN-20K-LEAGUES-UNDER-WATER/'>link</a>", imageUrl: "/nautilius-preview.png", imageAlt: "fast-mark"},
    {title: "Codeforces bot", content: "A telegram chatbot that knows how to make a training plan for algorithms and give out a list of tasks for the day.", imageUrl: "/codeforces-bot-preview.png", imageAlt: "codeforces bot"},
    {title: "FastMark", content: "A web application that helps to automatically fill in images based on data from the table. </BR> <a link='https://fast-mark.github.io/main-app//'>link</a>", imageUrl: "/fast-mark-preview.png", imageAlt: "fast-mark"},
    
    // Add more articles
];

// Function to create HTML for an article
function createArticleHTML(article) {
    return `
        <article class="article main__project-article">
            <img class="" src="${article.imageUrl}" alt="${article.imageAlt}"/>
            <hgroup>
                <h2>${article.title}</h2>
                <p>${article.content}</p>
            <hgroup>
        </article>
    `;
}

// Get the container element
const container = document.getElementById('my-projects');

// Append each article to the container

articles.forEach(article => {
    const articleHTML = createArticleHTML(article);
    console.log(articleHTML)
    document.getElementById('my-projects').insertAdjacentHTML('afterbegin',articleHTML);
});
