export const portfolio = [
  {
    title: "Narratives Inc.",
    image: "/Narratives.webp",
    imageFallback: "/Narratives.png",
    imageAlt:
      "Screenshot of Narratives Inc Website. Interactive map showing serveral clustered locations and pins showing individual locations.",
    tags: [
      "Agency project",
      "Prismic CMS",
      "Headless",
      "MapBox API",
      "Vue / Nuxt",
      "Filtering",
    ],
    slug: "narratives-inc",
    content:
      '<p>I built the Prismic CMS website in Vue for Narratives Inc, an organization engaged on the path to reconcialiation "from the place where the Red meets the Assiniboine, within the traditional territories of the Anishinaabe, the Cree, the Anisininew, the Dakota, and the Dene peoples, in Treaty 1 territory, and the homeland of the Métis".</p><p>Some interesting challenges included filtering by multiple topics on the <a href="https://narrativesinc.com/journal" target="_blank">Journal</a> (I really like this UI design of multiple queries with removable sticky notes!), and creating a style-transforming category navigation on the <a href="https://narrativesinc.com/services/planning" target="_blank">Services Section</a>.<p><p>The <strong>BIGGEST</strong> dev challenge was the <a href="https://narrativesinc.com/projects" target="_blank">interactive map</a> to visually demonstrate the scope of their Projects. Using the MapBox API, I coded a completely custom, multi-filterable map view. On the CMS side, each project is assigned x and y coordinates using Prismic\'s Geopoint field type, which I used as geojson in Mapbox to assign positions.</p><p>With the exception of the GSAP scrolling text animations found on the home, about, and career pages, I coded all aspects of this website.</p><p>I\'m proud of the work I\'ve done on this project, and the fact that my tech know-how can be used for important social movements.</p>',
    link: "https://narrativesinc.com/",
    buttonText: "NarrativesInc.com",
  },
  {
    title: "Céline Dion",
    image: "/celine-dion-home.webp",
    imageFallback: "/celine-dion-home.jpg",
    imageAlt:
      "Screenshot of Celine Dion's website. Photo of Celine Dion wearing a sparkling red ballgown and standing in front of a tall flame. Text reads Celine Dion Courage.",
    tags: [
      "Agency project",
      "Custom WordPress theme",
      "PHP",
      "GSAP",
      "Flexible Content",
    ],
    slug: "celine-dion",
    content:
      "<p>This site is multilingual (obvs), and the custom PHP WordPress theme was built using Advanced Custom Fields and custom post types. I built it in 2018, so it uses a page template style of theme, rather than the more modern \"full site editing\" themes and blocks we use today.</p><p>Using GSAP, I coded parallax-movement images that also animate from blur to sharp focus on scroll. It uses an SVG filter and tweens to define the start and end states of \"top\" and \"opacity\" CSS properties. Check out the <a href='https://codepen.io/Laura_Salgado/pen/wOYWEV/5584324389d4380d4e4ef3a0274eed85' target='_blank'>CodePen</a> I used to workshop my scrolling animations!</p><p>I used ACF's flexible content field type to allow for multiple layout options per page all over the site. I guess I was thinking in blocks already.</p><p>On the home page, each callout's data includes a group of radio buttons to assign one of four heading positions (using a mix of top, bottom, left, and right CSS properties) from the WordPress admin dashboard. In the bottom row, you can see how the heading for Team Celine is aligned to the bottom right, and the heading for Music is aligned to the bottom left. I like to make the content and style editing experience easy and intuitive for the WordPress user.</p>",
    link: "https://www.celinedion.com/",
    buttonText: "CelineDion.com",
  },
  {
    title: "Mark Knopfler - Dire Straits",
    image: "/mark-knopfler-home.webp",
    imageFallback: "/mark-knopfler-home.jpg",
    imageAlt:
      "Screenshot of Mark Knopfler's 2019 website with a light blue colour theme. Photo of an empty road leading to the far-off horizon. Text reads Down the Road Wherever the new album from Mark Knopfler out now.",
    tags: [
      "Agency project",
      "Custom WordPress theme",
      "PHP",
      "Website Design (2019 version)",
    ],
    slug: "mark-knopfler",
    content:
      "I designed all aspects of this website (2019 version, no longer online) to complement the album art of Mark Knopfler's solo album, \"Down The Road Wherever\".</p><p>I coded the custom WordPress PHP theme to showcase his various content types.</p><p>One touch I thought was really special was a library of all past concerts, featuring a linked retail offering of <strong>each concert's</strong> individual authorized audio recording. I think granting a devoted fan the opportunity to be able to collect the audio they actually heard live is pretty unique.</p><p>I also applied functionality customizations in PHP to his WordPress WooCommerce Store.</p>",
  },
  {
    title: "Animal Movie Generator",
    image: "/animal-movie-generator.webp",
    imageFallback: "/AMG-757-426.jpg",
    imageAlt:
      "Screenshot of the Animal Movie Generator app. Photos of three movie posters: Star Trek IV The Voyage Home, Orca, and Moby Dick.",
    tags: ["Personal project", "React", "API", "Axios", "JavaScript App"],
    slug: "animal-movie-generator",
    content:
      "<p>I built this React app to offer animal lovers a new way of finding their next must-watch movie.</p><p>It uses Axios to retrieve data from the TMDB API.</p><p>I had a lot of fun creating the dynamic film perforations using SVG&nbsp;shapes.</p>",
    link: "https://animal-movie-generator.netlify.app/",
    buttonText: "Animal Movie Generator",
  },
];
