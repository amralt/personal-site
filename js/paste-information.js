const articles = [
    {title: "Article 0", content: "Content of Article 0.", imageUrl: "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A69ac37d72d2f7ceba6009d5bada94eabdc6ea3ad5bcdfd488ba7a5d1%2BIMAGE_TINY%2BIMAGE_TINY.1", imageAlt: "codeforces bot"},
    {title: "Article 1", content: "Content of Article 1.", imageUrl: "", imageAlt: "fast-api"},
    {title: "Article 2", content: "Content of Article 2.", imageUrl: "", imageAlt: "codeforces bot"},
    // Add more articles as needed
];

// Function to create HTML for an article
function createArticleHTML(article) {
    return `
        <article class="article">
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