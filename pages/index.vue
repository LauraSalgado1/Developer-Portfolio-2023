<template>
  <main>
    <section class="intro">
      <div class="inner">
        <div class="intro-wrapper">
          <div class="half">
            <p class="eyebrow">Howdy</p>
            <h1>I code websites and data-driven web apps</h1>
            <a class="button" href="mailto:culham.laura@gmail.com"
              >Get in touch</a
            >
          </div>
          <div class="half">
            <picture>
              <source srcset="/Laura-Salgado.webp" type="image/webp" />
              <source srcset="/Laura-Salgado.png" type="image/png" />
              <img
                src="/Laura-Salgado.png"
                alt="Photo of Laura Salgado with a light yellow circular shape in the background. She's wearing a white and black striped t shirt."
                width="504"
                height="567"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio has-swiper" id="portfolio">
      <div class="inner">
        <p class="eyebrow">Previous Work</p>
        <h2>Development Portfolio</h2>
      </div>

      <div class="swiper-outer">
        <Swiper
          class="portfolio-desktop"
          :modules="[SwiperA11y, SwiperNavigation, SwiperPagination]"
          :slides-per-view="1.4"
          :navigation="true"
          :space-between="32"
        >
          <SwiperSlide v-for="(item, index) in portfolioCards" :key="index">
            <CardPortfolio :portfolioItem="item" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          class="portfolio-mobile"
          :modules="[SwiperA11y, SwiperNavigation, SwiperPagination]"
          :slides-per-view="1.1"
          :navigation="true"
          :space-between="32"
        >
          <SwiperSlide v-for="(item, index) in portfolioCards" :key="index">
            <CardPortfolio :portfolioItem="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section class="skills">
      <div class="inner">
        <p class="eyebrow">I like stickers</p>
        <h2>Tech Skills & Tools</h2>
      </div>
      <div class="inner-narrow">
        <div class="background yellow">
          <div class="skills-lists">
            <ul class="no-format skills-list">
              <li v-for="(item, index) in skillCardsLeft" :key="index">
                <CardSkill :skillItem="item" />
              </li>
            </ul>

            <ul class="no-format skills-list right">
              <li v-for="(item, index) in skillCardsRight" :key="index">
                <CardSkill :skillItem="item" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="art has-swiper">
      <div class="inner">
        <p class="eyebrow">Getting weird</p>
        <h2>CSS Art & Animation</h2>
      </div>

      <div class="swiper-outer">
        <Swiper
          class="art-desktop"
          :modules="[SwiperA11y, SwiperNavigation, SwiperPagination]"
          :navigation="true"
          :space-between="32"
          :slides-per-view="3.2"
        >
          <SwiperSlide v-for="artItem in artCards" :key="artItem.title">
            <CardArt :artItem="artItem" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          class="art-tablet"
          :modules="[SwiperA11y, SwiperNavigation, SwiperPagination]"
          :navigation="true"
          :space-between="32"
          :slides-per-view="2.5"
        >
          <SwiperSlide v-for="artItem in artCards" :key="artItem.title">
            <CardArt :artItem="artItem" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          class="art-mobile"
          :modules="[SwiperA11y, SwiperNavigation, SwiperPagination]"
          :navigation="true"
          :space-between="32"
          :slides-per-view="1.1"
        >
          <SwiperSlide v-for="artItem in artCards" :key="artItem.title">
            <CardArt :artItem="artItem" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section class="education">
      <div class="inner">
        <p class="eyebrow">School is cool</p>
        <h2>In-person Education</h2>
      </div>

      <div class="inner-narrow">
        <div class="background grey">
          <Timeline
            v-for="group in educationCards"
            :key="group.year"
            :group="group"
          />
        </div>
      </div>
    </section>

    <section class="agency-skills">
      <div class="inner">
        <p class="eyebrow">{{ yearsExperience }} Years of picking things up</p>
        <h2>At-work Education</h2>

        <div class="lists-row">
          <div>
            <div>
              <h3>Agency Know-How</h3>
              <ul class="no-format">
                <li>
                  <Icon
                    name="material-symbols:edit-note"
                    width="30"
                    height="30"
                    color="#272727"
                  />

                  Content creation
                </li>
                <li>
                  <Icon
                    name="majesticons:ux-circle-line"
                    width="30"
                    height="30"
                    color="#272727"
                  />

                  UX/UI design and development
                </li>
                <li>
                  <Icon
                    name="material-symbols:grid-on-outline"
                    width="30"
                    height="30"
                    color="#272727"
                  />

                  Logo and identity fundamentals
                </li>
              </ul>
            </div>
            <div>
              <h3>Practiced at</h3>
              <ul class="no-format">
                <li>
                  <img
                    src="/acf-logo-1.png"
                    alt="ACF logo"
                    width="30"
                    height="14"
                  />

                  All things Advanced Custom Fields
                </li>
                <li>
                  <Icon
                    name="material-symbols:calendar-month"
                    width="30"
                    height="30"
                    color="#272727"
                  />
                  Programming with ISO date formatting
                </li>

                <li>
                  <Icon
                    name="mdi:form-textbox"
                    width="30"
                    height="30"
                    color="#272727"
                  />

                  Handling form data, hooking submissions to WordPress via
                  Gravity Forms API
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3>Team Skills</h3>
              <ul class="no-format">
                <li>
                  <Icon
                    name="material-symbols:change-circle-outline"
                    width="30"
                    height="30"
                    color="#272727"
                  />

                  Rolling with ongoing changes to the plan, agile methodologies,
                  iterative development
                </li>
                <li>
                  <Icon
                    name="tabler:ruler"
                    width="30"
                    height="30"
                    color="#272727"
                  />
                  Fidelity to design specifics, feature planning, asking design
                  questions
                </li>
                <li>
                  <Icon
                    name="ic:sharp-access-time"
                    width="30"
                    height="30"
                    color="#272727"
                  />

                  Tracking my time between projects and sharing daily updates on
                  my work
                </li>
                <li>
                  <Icon
                    name="bi:chat-right-heart"
                    width="30"
                    height="30"
                    color="#272727"
                  />

                  Talking about technical details with clients in ways that
                  non-technical people can understand
                </li>
                <li>
                  <Icon
                    name="icon-park-outline:duck"
                    width="30"
                    height="30"
                    color="#272727"
                  />
                  Both sides of rubber ducking with teammates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="media">
      <div class="inner">
        <p class="eyebrow">Posts and things</p>
        <h2>In The Media</h2>

        <div class="media-row">
          <CardMedia
            v-for="(article, index) in mediaCards"
            :key="index"
            :mediaItem="article"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const portfolioCards = [
  {
    title: "Céline Dion",
    image: "/celine-dion-home.webp",
    imageFallback: "/celine-dion-home.jpg",
    imageAlt:
      "Screenshot of Celine Dion's website. Photo of Celine Dion wearing a sparkling red ballgown and standing in front of a tall flame. Text reads Celine Dion Courage.",
    tags: ["Agency project", "Custom WordPress theme", "PHP", "CSS Animation"],
    slug: "celine-dion",
  },
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
      "Vue / Nuxt",
      "Interactive Map",
      "MapBox API",
    ],
    slug: "narratives-inc",
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
      "Website design (previous 2019 version)",
    ],
    slug: "mark-knopfler",
  },
  {
    title: "Animal Movie Generator",
    image: "/animal-movie-generator.webp",
    imageFallback: "/animal-movie-generator.jpg",
    imageAlt:
      "Screenshot of the Animal Movie Generator app. Photos of three movie posters: The Hobbit, Arachnophobia, and Charlotte's Web.",
    tags: ["Personal project", "React", "API", "Axios", "JavaScript App"],
    slug: "animal-movie-generator",
  },
];

const skillCardsLeft = [
  {
    heading: "JavaScript Frameworks",
    icon: "mdi:language-javascript",
    list: ["React", "Vue", "Nuxt 2", "Nuxt 3"],
  },
  {
    heading: "Headless CMS",
    icon: "mdi:head-remove-outline",
    list: ["Strapi", "Prismic", "WordPress REST API", "WPGraphQL"],
  },
  {
    heading: "Theming CMS",
    icon: "ion:logo-wordpress",
    list: [
      "Shopify Custom Themes",
      "WP Custom themes and child themes",
      "Customization of widely used WP plugins, e.g. WooCommerce",
    ],
  },
  {
    heading: "Code Basics",
    icon: "ic:baseline-code",
    list: [
      "HTML5",
      "CSS3 with Sass, Tailwind",
      "JavaScript, TypeScript",
      "PHP",
    ],
  },
];

const skillCardsRight = [
  {
    heading: "Dev Environment & Server Management",
    icon: "ri:terminal-fill",
    list: [
      "Run my own AMP stack dev environment with Apache, MySQL, PHP and phpMyAdmin",
      "SSH to deploy code from GitHub",
      "MYCLI for MySQL for copying databases",
      "SCP to move databases",
      "Configure and manage Node.js servers",
      "PM2 to control app processes",
      "NGINX error logs to troubleshoot WordPress",
    ],
  },
  {
    heading: "Accessibility",
    icon: "ic:baseline-accessibility-new",
    list: [
      "Advocate of correct semantic HTML and building with inclusivity",
      "Work is built to WCAG 2.1 AA level requirements",
      "Many improvement projects done on existing sites",
      "Love helping devs learn how to get big wins with small changes",
    ],
  },
  {
    heading: "Design Tools",
    icon: "ic:sharp-select-all",
    iconSmall: true,
    list: ["Figma", "Adobe", "Sketch"],
  },
];

const educationCards = [
  {
    year: "2023",
    courses: [
      {
        school: "FITC",
        frequency: "1 day workshop",
        courseName: "DDC Super Workshop: Graphic Design and Logo Design",
        instructors: ["Aaron Draplin"],
      },
    ],
  },
  {
    year: "2017",
    courses: [
      {
        school: "HackerYou (now Juno College) Accessibility Club",
        frequency: "Evening workshop",
        courseName: "Meet Your Screen Reader",
        instructors: ["Terry Brey"],
      },
      {
        school: "Web Animation Workshops",
        frequency: "2 day workshop",
        courseName:
          "Web Animation 0 to 60: CSS, JavaScript, and SVG Essentials",
        instructors: ["Sarah Drasner", "Val&nbsp;Head"],
      },
    ],
  },
  {
    year: "2016",
    courses: [
      {
        school: "HackerYou (now Juno College)",
        frequency: "Full-time",
        courseName: "Web Development Bootcamp",
        instructors: [
          "Drew Minns",
          "Kristen Mehendale Spencer",
          "Ryan&nbsp;Christiani",
        ],
      },
      {
        school: "HackerYou (now Juno College)",
        frequency: "Part-time",
        courseName: "JavaScript Intensive",
        instructors: ["Wes Bos"],
      },
    ],
  },
  {
    year: "2015",
    courses: [
      {
        school: "HackerYou (now Juno College)",
        frequency: "Part-time",
        courseName: "Intro to Web Development",
        instructors: ["Haris Mahmood"],
      },
    ],
  },
];

const mediaCards = [
  {
    source: "Juno College Blog",
    author: "Sennah Yee",
    title:
      "From Coding Newbie to Coding Celine Dion's Website: Laura Salgado's Journey into Tech",
    paragraph:
      'As part of Juno College\'s "Student Stories", I talk about my career transition and share support for tech newcomers.',
    image: "/juno-college-student-stories-laura-salgado.webp",
    imageFallback: "/juno-college-student-stories-laura-salgado.png",
    imageAlt:
      "Three photos: a screenshot of Celine Dion's website, a selfie of Laura and a cute white cat, and Laura's CSS art of orange lillies.",
    link: "https://junocollege.com/blog/web-development-bootcamp-alumni-laura-salgado/",
    moreText: "Read",
    icon: "ph:book-fill",
  },
  {
    source: "Codepen Radio Podcast",
    author: "Chris Coyier & Marie Mosley",
    title: "Episode 134",
    paragraph:
      "The group discusses the Creative Coding Club and dissects one of my first CSS art projects.",
    image: "",
    imageAlt: "CodePen text logo. The letter O is a line drawing of a cube.",
    link: "https://blog.codepen.io/2017/06/13/134-nat-cooper/",
    moreText: "Listen",
    icon: "material-symbols:podcasts",
  },
];

const artCards = [
  {
    title: "Calla Lillies",
    image: "/calla-lillies-462.webp",
    imageFallback: "/calla-lillies-462.png",
    imageAlt:
      "Illustration of 3 mango calla lily flowers in blended shades of red, orange and yellow on a dark background.",
    link: "https://codepen.io/Laura_Salgado/pen/bWKNLm",
    tags: [
      "Pure CSS illustration",
      "Painted from photo reference",
      "Layering and transparency",
      "CSS gradients",
    ],
  },
  {
    title: "Aggretsuko Morph Rage",
    image: "/aggretsuko.webp",
    imageFallback: "/aggretsuko.png",
    imageAlt:
      "Cartoon style illustration of a cute red panda with a large face wearing a blue business suit on a light blue background",
    link: "https://codepen.io/Laura_Salgado/pen/VxWvZG",
    tags: ["Created SVG assets in Sketch", "GSAP"],
  },
  {
    title: "Charlotte's Web animated book page",
    image: "/charlottes-web-dev.webp",
    imageFallback: "/charlottes-web-dev.png",
    imageAlt:
      "Illustration of a circular spider web. The word terrfic is formed by web lines in the center. A small black spider hangs from a web line in the top left of the web.",
    link: "https://codepen.io/Laura_Salgado/pen/GyNVWQ",
    tags: ["Created SVG assets in Sketch", "Manual SVG animation"],
  },
  {
    title: "MC Escher Woodblock Cat",
    image: "/mc-Escher-cat.webp",
    imageFallback: "/mc-Escher-cat.png",
    imageAlt:
      "Black and white illustratioon of a white cat sitting on a table. The table has a long tablecloth with thick black and white stripes. The initials M.C.E. are in the top left.",
    link: "https://codepen.io/Laura_Salgado/pen/aVXyrz",
    tags: ["Pure CSS illustration"],
  },
  {
    title: "Chat Loader Morph",
    image: "/morph-chat.webp",
    imageFallback: "/morph-chat.png",
    imageAlt:
      "Icon of two overlapping chat bubbles on a circular teal background. The chat bubble in front shows simplified lines of text. ",
    link: "https://codepen.io/Laura_Salgado/pen/KqMJBw",
    tags: ["SVG animation", "GSAP", "Timelines"],
  },

  {
    title: "Spinning Bowtie Cat",
    image: "/spinning-bowtie-cat.webp",
    imageFallback: "/spinning-bowtie-cat.png",
    imageAlt: "Line drawing of a striped cat wearing a bowtie.",
    link: "https://codepen.io/Laura_Salgado/pen/dRZQNw",
    tags: ["SVG Animation", "GSAP", "TweenMax"],
  },

  {
    title: "Self Portrait",
    image: "/self-portrait.webp",
    imageFallback: "/self-portrait.png",
    imageAlt:
      "Illustration of Laura Salgado's head and shoulders on a light blue background. She has brown hair and is wearing a black t shirt. Text reads hover on laura.",
    link: "https://codepen.io/Laura_Salgado/pen/RZKQGy",
    tags: ["Manually animated", "Pure CSS illustration"],
  },
  {
    title: "Purring Cat",
    image: "/purring-cat.webp",
    imageFallback: "/purring-cat.png",
    imageAlt: "Line drawing of a smiling cat's face.",
    link: "https://codepen.io/Laura_Salgado/pen/EWrZer",
    tags: ["Manual SVG animation"],
  },
  {
    title: "Rain Machine",
    image: "/rain-machine.webp",
    imageFallback: "/rain-machine.png",
    imageAlt:
      "Screenshot of group of UI buttons that read No Rain, Light Rain, Heavy Rain, Night Mode, Dusk Mode and Lightning. The background shows an image of rain and lightning in dusk colours.",
    link: "https://codepen.io/Laura_Salgado/pen/peZzOG",
    tags: ["Manual SVG animation", "Interactive"],
  },
];

const yearsExperience = computed(() => {
  return new Date().getFullYear() - 2016;
});

definePageMeta({
  image: "/Laura-Salgado-wide.jpg",
});
</script>

<style lang="scss" scoped>
section {
  padding: 128px 0;
  @media (max-width: 750px) {
    padding: 64px 0;
  }
  &.intro {
    padding: 128px 0 64px;
    @media (max-width: 1300px) {
      padding: 64px 0;
    }
    @media (max-width: 750px) {
      padding-top: 32px;
    }
  }
}
.intro-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 64px;
  @media (max-width: 992px) {
    grid-gap: 32px;
  }
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
    img {
      width: 320px;
      margin: 0 auto;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

section.portfolio {
  .portfolio-mobile {
    display: none;
    @media (max-width: 750px) {
      display: block;
    }
  }
  .portfolio-desktop {
    @media (max-width: 750px) {
      display: none;
    }
  }
  .swiper-outer {
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: 0.2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: 2s;
  }
}
section.skills,
section.education {
  background: $c-grey-light-extra;
  h2,
  .eyebrow {
    text-align: center;
    @media (max-width: 750px) {
      text-align: left;
    }
  }
  .eyebrow {
    margin-bottom: 4px;
    @media (max-width: 750px) {
      margin-bottom: 0;
    }
  }
}
.skills-lists {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 836px;
  max-width: calc(100% + 64px);
  transform: translateX(-32px);
  @media (max-width: 750px) {
    transform: translateX(-64px);
    max-width: calc(100% + 128px);
    grid-template-columns: 1fr;
    gap: 0;
  }
  @media (max-width: 370px) {
    transform: translateX(-32px);
    max-width: calc(100% + 64px);
  }
}

.background {
  max-width: 100%;
  margin: 0 auto;
  border-radius: 32px;
  padding: 32px 0 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 750px) {
    padding: 32px 32px 0;
    border-radius: 16px;
  }
  @media (max-width: 370px) {
    padding: 32px 16px 0;
  }

  &.yellow {
    background-color: $c-yellow-light-extra;
  }
  &.grey {
    background-color: $c-grey-mid;
    position: relative;
    z-index: 2;

    @media (max-width: 970px) {
      width: calc(100% - 49px);
      margin: 0 0 0 auto;
    }
    @media (max-width: 750px) {
      width: 100%;
    }
  }
}

section.agency-skills {
  .text-row {
    width: 640px;
    max-width: 100%;
    margin-bottom: 64px;
  }
  .lists-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: $c-grey-light-extra;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    padding: 64px;
    border-radius: 32px;
    gap: 64px;
    > div {
      display: grid;
      grid-template-columns: 1fr;
      gap: 64px;
    }
    @media (max-width: 992px) {
      padding: 64px 32px;
      gap: 48px;
    }
    @media (max-width: 750px) {
      grid-template-columns: 1fr;
      padding: 32px;
      border-radius: 16px;
    }
    li {
      margin-bottom: 32px;
      display: grid;
      grid-template-columns: 50px 1fr;
      align-items: center;
      @media (max-width: 992px) {
        align-items: start;
      }
    }
    li:last-child {
      margin-bottom: 0;
    }
    h3 {
      margin: 0 0 32px;
    }
  }
}

section.media {
  background: $c-yellow-light-extra;
  .eyebrow {
    color: $c-black;
  }
}

.media-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
}

section.art {
  .art-desktop {
    @media (max-width: 992px) {
      display: none;
    }
  }

  .art-tablet {
    display: none;
    @media (max-width: 992px) {
      display: block;
    }
    @media (max-width: 750px) {
      display: none;
    }
  }
  .art-mobile {
    display: none;
    @media (max-width: 750px) {
      display: block;
    }
  }
  .swiper-outer :deep(.swiper-slide) {
    padding-bottom: 64px;
  }
}

section.has-swiper {
  overflow: hidden;
  @media (max-width: 750px) {
    padding-bottom: 128px;
  }
}

.swiper-outer {
  width: calc(1072px + ((100vw - 1072px) / 2));
  margin: 0 0 0 auto;
  padding-right: calc((100vw - 1072px) / 2);
  @media (max-width: 1200px) {
    width: 100%;
    padding-left: 64px;
    padding-right: 64px;
  }
  @media (max-width: 750px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (max-width: 370px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  :deep(.swiper-slide) {
    padding-bottom: 48px;
  }

  :deep(.swiper, .swiper-container) {
    overflow: visible;
  }
  :deep(.swiper-button-prev:after) {
    font-size: 2rem;
  }
  :deep(.swiper-button-next:after) {
    font-size: 2rem;
  }
  :deep(.swiper-button-prev) {
    background: $c-black;
    color: $c-white;
    top: auto;
    left: 0;
    bottom: 0px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-right: 3px;
    &:hover {
      color: $c-white;
      text-decoration: none;
      background-color: $c-black;
    }
  }
  :deep(.swiper-button-next) {
    background: $c-black;
    color: $c-white;
    top: auto;
    right: 0;
    bottom: 0px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-left: 3px;
    &:hover {
      color: $c-white;
      text-decoration: none;
      background-color: $c-black;
    }
  }
}
</style>
