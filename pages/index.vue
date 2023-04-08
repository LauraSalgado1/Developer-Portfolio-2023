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
            <nuxt-img src="/Laura-Salgado.webp" />
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio has-swiper">
      <div class="inner">
        <h2>Portfolio</h2>
      </div>

      <div class="swiper-outer">
        <Swiper
          :modules="[SwiperA11y, SwiperNavigation, SwiperPagination]"
          :slides-per-view="1.4"
          :navigation="true"
          :space-between="32"
          :grab-cursor="true"
        >
          <SwiperSlide v-for="(item, index) in portfolioCards" :key="index">
            <CardPortfolio :portfolioItem="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section class="skills">
      <div class="inner-narrow">
        <h2>Tech Skills & Tools</h2>

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

    <section class="education">
      <div class="inner-narrow">
        <h2>In-person Education</h2>

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
        <p class="eyebrow">On-the-job learning</p>
        <h2>7 Years of Figuring It Out</h2>

        <div class="text-row">
          <h3>UX Gains</h3>

          <p class="p1">
            To improve the UX of a multi-stage form I built, I learned about JS
            localStorage and sessionStorage. I included persistent data between
            page navigation, browser refreshing, and multiple site visits to
            complete stages of a form.
          </p>
          <p class="p1">
            Learning this piqued my curiousity about firebase or other options
            for backend infrastructure, instead of less secure browser storage.
          </p>
        </div>

        <div class="lists-row">
          <div>
            <h3>New(ish) Skills</h3>
            <ul class="no-format">
              <li>
                <Icon
                  name="ic:outline-mode-edit-outline"
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
              <li>
                <Icon
                  name="mdi:form-textbox"
                  width="30"
                  height="30"
                  color="#272727"
                />

                Practiced at handling form data in Nuxt, connecting submissions
                to a WordPress admin using the Gravity Forms API
              </li>
              <li>
                <Icon
                  name="material-symbols:calendar-month"
                  width="30"
                  height="30"
                  color="#272727"
                />
                Real comfortable working with ISO date formatting
              </li>
            </ul>
          </div>

          <div>
            <h3>Good At</h3>
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
                Fidelity to design specifics
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

                Talking about technical details directly with clients in ways
                that non-technical people can understand
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
    </section>

    <section class="media">
      <div class="inner">
        <h2>Media</h2>

        <div class="media-row">
          <CardMedia
            v-for="(article, index) in mediaCards"
            :key="index"
            :mediaItem="article"
          />
        </div>
      </div>
    </section>

    <section class="art">
      <div class="inner">
        <h2>CSS Art & Animation</h2>

        <ul class="art-list no-format">
          <li v-for="artItem in artCards" :key="artItem.title">
            <CardArt :artItem="artItem" />
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
const portfolioCards = [
  {
    title: "Céline Dion",
    image: "/celine-dion-home.jpg",
    tags: ["Agency project", "Custom WordPress theme", "PHP", "CSS Animation"],
    slug: "celine-dion",
  },
  {
    title: "Mark Knopfler (Dire Straits)",
    image: "/mark-knopfler-home.jpg",
    tags: [
      "Agency project",
      "Custom WordPress theme",
      "PHP",
      "Full website design (prior version)",
    ],
    slug: "mark-knopfler",
  },
  {
    title: "Animal Movie Generator",
    image: "/animal-movie-generator-home.jpg",
    tags: ["Personal project", "JS App", "API / Ajax", "UI Design"],
    slug: "animal-movie-generator",
  },
];

const skillCardsLeft = [
  {
    heading: "JavaScript Frameworks",
    paragraph: "",
    paragraph2: "",
    icon: "fluent-emoji-high-contrast:framed-picture",
    list: ["Vue", "Nuxt 2", "Nuxt 3"],
  },
  {
    heading: "Headless CMS",
    paragraph: "",
    paragraph2: "",
    icon: "game-icons:pumpkin-lantern",
    list: ["Strapi", "WordPress REST API", "WPGraphQL"],
  },
  {
    heading: "WordPress PHP",
    paragraph: "",
    paragraph2: "",
    icon: "ic:baseline-wordpress",
    list: [
      "Custom theming and child theming",
      "Customization of widely used plugins, e.g. WooCommerce",
    ],
  },
  {
    heading: "Code Basics",
    paragraph: "",
    paragraph2: "",
    icon: "ph:code-bold",
    list: [
      "HTML5",
      "CSS3 with Sass",
      "Vanilla JS including recent ES features",
    ],
  },
];

const skillCardsRight = [
  {
    heading: "Dev Environment & Server Management",
    paragraph:
      "Over 2021 and 2022, I moved out of my old comfort zone of fully managed local server environments and WordPress services (MAMP and WP Engine) into more of a command-line life.",
    paragraph2: "",
    icon: "ri:terminal-fill",
    list: [
      "I run my own local AMP stack dev environment with Apache, MySQL, PHP and phpMyAdmin",
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
    paragraph: ".",
    paragraph2:
      "I love getting to share with my teammates how easy it is to achieve big accessibility wins by making small changes.",
    icon: "ion:accessibility-outline",
    list: [
      "Advocate of correct semantic HTML and building with inclusivity in mind",
      "My work is built to WCAG 2.1 AA level accessibility requirements",
      "Completed many accessibility improvement projects on existing sites",
      "I love getting to share with my teammates how easy it is to achieve huge accessibility wins with small changes",
    ],
  },
  {
    heading: "Design Tools",
    paragraph: "",
    paragraph2: "",
    icon: "iconoir:design-nib",
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
        courseName:
          "-Upcoming- <br/>DDC Super Workshop: Graphic Design and Logo Design",
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
      'As part of Juno College\'s "Student Stories", I talked about my experience of making a career transition and shared support for tech newcomers.',
    image: "",
    link: "https://junocollege.com/blog/web-development-bootcamp-alumni-laura-salgado/",
    moreText: "Read",
    icon: "ph:book-fill",
  },
  {
    source: "Codepen Radio Podcast",
    author: "Chris Coyier & Marie Mosley",
    title: "Episode 134",
    paragraph:
      'In conversation about the Creative Coding Club, they discussed one of my first pure CSS art projects, and how we can go deeper into fun using our "normal" code skills.',
    image: "",
    link: "https://blog.codepen.io/2017/06/13/134-nat-cooper/",
    moreText: "Listen",
    icon: "material-symbols:podcasts",
  },
];

const artCards = [
  {
    title: "Calla Lillies",
    image: "",
    link: "",
    tags: [
      "Pure CSS illustration",
      "Painted from photo reference",
      "Layering",
      "Transparency",
      "CSS gradients",
    ],
  },
  {
    title: "Aggretsuko Morph Rage",
    image: "",
    link: "",
    tags: ["Created SVG assets in Sketch", "GSAP"],
  },
  {
    title: "Charlotte's Web animated book page",
    image: "",
    link: "",
    tags: ["Created SVG assets in Sketch", "Manual SVG animation"],
  },
  {
    title: "Chat Loader Morph",
    image: "",
    link: "",
    tags: ["SVG animation", "GSAP", "Timelines"],
  },
  {
    title: "MC Escher Woodblock Cat",
    image: "",
    link: "",
    tags: ["Pure CSS illustration"],
  },
  {
    title: "Rain Machine",
    image: "",
    link: "",
    tags: ["Manual SVG animation", "Interactive"],
  },
  {
    title: "Purring Cat",
    image: "",
    link: "",
    tags: ["Manual SVG animation"],
  },
  {
    title: "Self Portrait",
    image: "",
    link: "",
    tags: ["Manually animated", "Pure CSS illustration"],
  },
];
</script>

<style lang="scss" scoped>
section {
  padding: 96px 0 64px;
  @media (max-width: 750px) {
    padding: 64px 0 48px;
  }
}
.intro-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 30px;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
    img {
      width: 320px;
      margin: 0 auto;
    }
  }
}

section.skills,
section.education {
  background: $c-grey-mid;
  background: $c-yellow-light-extra;
  background: $c-grey-background;
  h2 {
    text-align: center;
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
    transform: none;
    grid-template-columns: 1fr;
    gap: 0;
    li:nth-child(even) {
      transform: translateX(-64px);
    }
  }
  @media (max-width: 370px) {
    max-width: calc(100% + 32px);
    li:nth-child(even) {
      transform: translateX(-32px);
    }
  }
}

.background {
  max-width: 100%;
  margin: 0 auto;
  border-radius: 32px;
  padding: 32px 0 0;
  position: relative;
  z-index: 1;
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
  h2 {
    width: 470px;
    max-width: 100%;
  }
  .text-row {
    width: 560px;
    max-width: 100%;
    margin-bottom: 64px;
  }
  .lists-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: $c-grey-light-extra;
    padding: 64px;
    border-radius: 32px;
    gap: 64px;
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
}

.media-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
}

.art-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

section.has-swiper {
  overflow: hidden;
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
  @media (max-width: 500px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (max-width: 370px) {
    padding-left: 16px;
    padding-right: 16px;
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
    right: 64px;
    color: $c-black;
    left: auto;
    top: -80px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: $c-grey-mid;
    padding-right: 3px;
    @media (max-width: 750px) {
      width: 32px;
      height: 32px;
      top: -72px;
    }
    &:hover {
      background: $c-black;
      color: $c-white;
    }
  }
  :deep(.swiper-button-next) {
    right: 0;
    color: $c-black;
    left: auto;
    top: -80px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: $c-grey-mid;
    padding-left: 3px;
    @media (max-width: 750px) {
      width: 32px;
      height: 32px;
      top: -72px;
    }
    &:hover {
      background: $c-black;
      color: $c-white;
    }
  }
}
</style>
