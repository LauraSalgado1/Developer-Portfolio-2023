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
          :slides-per-view="1.3"
          :navigation="true"
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

        <div class="background">
          <div class="skills-lists">
            <ul class="no-format skills-list">
              <li v-for="(item, index) in skillCardsLeft" :key="index">
                <CardSkill :skillItem="item" />
              </li>
            </ul>

            <ul class="no-format skills-list">
              <li v-for="(item, index) in skillCardsRight" :key="index">
                <CardSkill :skillItem="item" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="education">
      <div class="inner">
        <h2>In-person Education</h2>

        <Timeline
          v-for="group in educationCards"
          :key="group.year"
          :group="group"
        />

        <!-- <h3>2015 HackerYou (now Juno College)</h3>
        <ul>
          <li>Part-time intro to web development course</li>
          <li>Instructed by Haris Mahmood</li>
        </ul>

        <h3>2016 HackerYou (now Juno College)</h3>
        <ul>
          <li>Full-time web development boot camp</li>
          <li>
            Instructed by Drew Minns, Ryan Christiani and Kristen Mehendale
            Spencer
          </li>
        </ul>

        <h3>2016 HackerYou (now Juno College)</h3>
        <ul>
          <li>Part-time JavaScript intensive course</li>
          <li>Instructed by Wes Bos</li>
        </ul>

        <h3>2017 Accessibility Workshop</h3>
        <ul>
          <li>
            Demonstrated his internet use via a screen reader and shared his
            experiences of attempting to use inaccessible websites
          </li>
          <li>Instructed by Terry Brey</li>
        </ul>

        <h3>2017 Web Animation Workshops</h3>
        <ul>
          <li>
            2 day Web Animation 0 to 60: CSS, JavaScript, and SVG Essentials
          </li>
          <li>Instructed by Sarah Drasner and Val Head</li>
        </ul> -->
      </div>
    </section>

    <section>
      <div class="inner">
        <h2>Picked up over 7 years working in agency settings</h2>

        <h3>UX Gains</h3>

        <p class="p1">
          To improve the UX of a multi-stage form I built, I learned about JS
          localStorage and sessionStorage. I included persistent data between
          page navigation, browser refreshing, and multiple site visits to
          complete stages of a form.
        </p>
        <p class="p1">
          Learning this piqued my curiousity about firebase or other options for
          backend infrastructure, instead of less secure browser storage.
        </p>

        <h3>New(ish) Skills</h3>
        <ul>
          <li>Content creation</li>
          <li>UX/UI design and development</li>
          <li>Logo and identity fundamentals</li>
          <li>
            Regular practice at building forms, handling form data in Nuxt, and
            connecting submissions to a WordPress admin using the Gravity Forms
            API
          </li>
          <li>Real comfortable working with ISO date formatting</li>
        </ul>

        <h3>Good At</h3>
        <ul>
          <li>
            Rolling with ongoing changes to The Plan, agile methodologies,
            iterative development
          </li>
          <li>Fidelity to design specifics</li>
          <li>
            Tracking my time between projects and sharing daily updates on my
            work
          </li>
          <li>
            Talking about technical details directly with clients in ways that
            non-technical people can understand
          </li>
          <li>
            Using the devs around me to talk out my problems, asking questions
            when I get stuck
          </li>
          <li>
            Encouraging other devs to talk to me when they get stuck, and
            figuring out what I would do in their shoes (especially good for me
            if the thing they're stuck on is ACF in WordPress or PHP
            customization of themes and plugins)
          </li>
        </ul>
      </div>
    </section>

    <section>
      <div class="inner">
        <h2>Media</h2>

        <div>
          <p class="eyebrow">Juno College Blog: Sennah Yee</p>
          <h3>
            From Coding Newbie to Coding Celine Dion's Website: Laura Salgado's
            Journey into Tech
          </h3>
          <p>
            As part of Juno College's "Student Stories", I talked about my
            experience of making a career transition and shared support for tech
            newcomers.
          </p>
        </div>

        <div>
          <p class="eyebrow">
            Codepen Radio Podcast: Chris Coyier & Marie Mosley
          </p>
          <h3>Episode 134: Nat Cooper</h3>
          <p>
            In conversation about the Creative Coding Club, they discussed one
            of my first pure CSS art projects, and how we can go deeper into fun
            using our "normal" code skills.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="inner">
        <h2>CSS Art & Animation</h2>
        <ul>
          <li>
            <a href="" target="_blank">
              <!-- <nuxt-img /> -->
              <h3>Calla Lillies</h3>
              <ul>
                <li>Pure CSS illustration</li>
                <li>Painted from photo reference</li>
                <li>Layering</li>
                <li>Transparency</li>
                <li>CSS gradients</li>
              </ul>
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <!-- <nuxt-img /> -->
              <h3>Aggretsuko Morph Rage</h3>
              <ul>
                <li>Created SVG assets in Sketch</li>
                <li>GSAP</li>
              </ul>
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <!-- <nuxt-img /> -->
              <h3>Charlotte's Web animated book page</h3>
              <ul>
                <li>Created SVG assets in Sketch</li>
                <li>Manual SVG animation</li>
              </ul>
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <!-- <nuxt-img /> -->
              <h3>Chat Loader Morph</h3>
              <ul>
                <li>SVG animation</li>
                <li>GSAP</li>
                <li>Timelines</li>
              </ul>
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <!-- <nuxt-img /> -->
              <h3>Spinning Bowtie Cat</h3>
              <ul>
                <li>SVG animation</li>
                <li>GSAP</li>
                <li>TweenMax</li>
              </ul>
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <!-- <nuxt-img /> -->
              <h3>MC Escher Woodblock Cat</h3>
              <ul>
                <li>Pure CSS illustration</li>
              </ul>
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <!-- <nuxt-img /> -->
              <h3>Rain Machine</h3>
              <ul>
                <li>Manual SVG animation</li>
                <li>Interactive</li>
              </ul>
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <!-- <nuxt-img /> -->
              <h3>Purring Cat</h3>
              <ul>
                <li>Manual SVG animation</li>
              </ul>
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <!-- <nuxt-img /> -->
              <h3>Self Portrait</h3>
              <ul>
                <li>Manually animated</li>
                <li>Pure CSS illustration</li>
              </ul>
            </a>
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
    image: "",
    tags: ["Agency project", "Custom WordPress theme", "PHP", "CSS Animation"],
    slug: "celine-dion",
  },
  {
    title: "Mark Knopfler (Dire Straits)",
    image: "",
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
    image: "",
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
    icon: "game-icons:guillotine",
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
    list: ["HTML5", "CSS3 with Sass", "JS including recent ES features"],
  },
  {
    heading: "Design Tools",
    paragraph: "",
    paragraph2: "",
    icon: "iconoir:design-nib",
    list: ["Figma", "Adobe", "Sketch"],
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
      "Managing and configuring Node.js servers",
      "PM2 to control app processes",
      "NGINX error logs to troubleshoot WordPress",
    ],
  },
  {
    heading: "Accessibility",
    paragraph:
      "I'm an advocate of correct semantic HTML and building with inclusivity in mind.",
    paragraph2:
      "I love getting to share with my teammates how easy it is to achieve big accessibility wins by making small changes.",
    icon: "ion:accessibility",
    list: [
      "My work is built to meet WCAG 2.1 AA level accessibility requirements.",
      "I’ve completed many accessibility improvement projects on existing sites, mostly using WAVE by WebAIM and Google Lighthouse as guidance.",
    ],
  },
];

const educationCards = [
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
    year: "2023<br/>Upcoming",
    courses: [
      {
        school: "FITC",
        frequency: "1 day workshop",
        courseName: "DDC Super Workshop: Graphic Design and Logo Design",
        instructors: ["Aaron Draplin"],
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
section {
  padding: 96px 0 64px;
}
.intro-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 30px;
}

section.skills,
section.education {
  background: $c-grey-light-extra;
  h2 {
    text-align: center;
  }
}
.skills-lists {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 868px;
  transform: translateX(-32px);
}

.background {
  background-color: $c-yellow-light-extra;
  width: 800px;
  margin: 0 auto;
  border-radius: 32px;
  padding: 32px 0 0;
}

section.has-swiper {
  overflow: hidden;
}

.swiper-outer {
  width: calc(1100px + ((100vw - 1100px) / 2));
  margin: 0 0 0 auto;
  :deep(.swiper, .swiper-container) {
    overflow: visible;
  }
  :deep(.swiper-button-prev:after) {
    font-size: 2.4rem;
  }
  :deep(.swiper-button-next:after) {
    font-size: 2.4rem;
  }
  :deep(.swiper-button-prev) {
    right: calc((100vw - 950px) / 2);
    color: $c-black;
    left: auto;
    top: -69px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: $c-grey-mid;
    padding-right: 4px;
  }
  :deep(.swiper-button-next) {
    right: calc((100vw - 1100px) / 2);
    color: $c-black;
    left: auto;
    top: -69px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: $c-grey-mid;
    padding-left: 4px;
  }
}
</style>
