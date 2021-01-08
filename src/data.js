export const projectData = [
    {
        id: 0,
        name: "Dijkstra's Algorithm Visualization",
        language: "Android",
        image: require("./images/dijkstra0.png").default,
        carouselImages: [require("./images/d1.png").default, require("./images/d2.png").default, require("./images/d3.png").default, require("./images/d4.png").default],
        description: "An Android App designed to help computer science students understand Dijkstra's algorithm through a visualization. Through the development of this app, I learned the fundamentals of Android app development and improved my knowledge of Java. I also learned about pathfinding algorithms.",
        github: "https://github.com/StoneFranklin/Pathfinding-Algorithm-Visualization",
        googlePlay: "https://play.google.com/store/apps/details?id=com.stonefranklin.pathfindingalgorithmvisualization",
        url: "/dijkstra",
    },
    {
        id: 1,
        name: "Gains",
        language: "Web",
        image: require("./images/gains0.png").default,
        carouselImages: [require("./images/g1.png").default, require("./images/g2.png").default, require("./images/g3.png").default, require("./images/g4.png").default],
        description: "A website with similar function to the Lifts app that I made. It allows users to track their progress on certain lifts and see their progress over time. This was developed using HTML/CSS and Javascript for the front-end, and PHP and MySQL for the back-end.",
        github: "https://github.com/StoneFranklin/Gains",
        link: "https://gains.stonefranklin.com/index.php",
        url: "/gains",
    },
    {
        id: 2,
        name: "Lifts",
        language: "iOS",
        image: require("./images/lifts0.png").default,
        carouselImages: [require("./images/lifts1.png").default, require("./images/lifts2.png").default, require("./images/lifts3.png").default, require("./images/lifts4.png").default],
        description: "An iOS app developed with Swift and SwiftUI. " + 
            "It allows the user to track their progress on any lift of their choosing. " +
            "Through the development of this app, I learned fundamental skills needed for iOS development, including Swift syntax, SwiftUI, and Core Data.",
        github: "https://github.com/StoneFranklin/Lifts",
        url: "/lifts",
    }
]