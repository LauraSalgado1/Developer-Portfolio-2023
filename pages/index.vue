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

    <section>
      <div class="inner">
        <h2>Portfolio</h2>
      </div>

      <div class="swiper-outer">
        <Swiper
          :modules="[SwiperA11y, SwiperNavigation, SwiperPagination]"
          :slides-per-view="1.5"
          :navigation="true"
        >
          <SwiperSlide v-for="(item, index) in portfolioCards" :key="index">
            <CardPortfolio :portfolioItem="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section class="skills">
      <div class="inner">
        <h2>Skills and Tools</h2>

        <h3>JS frameworks</h3>
        <ul>
          <li>Vue</li>
          <li>Nuxt 2</li>
          <li>Nuxt 3</li>
        </ul>

        <h3>Headless CMS</h3>
        <ul>
          <li>Strapi</li>
          <li>WordPress REST API</li>
          <li>WPGraphQL</li>
        </ul>

        <h3>WordPress PHP</h3>
        <ul>
          <li>Custom theming and child theming</li>
          <li>Customization of widely used plugins, e.g. WooCommerce</li>
        </ul>

        <h3>Code Basics</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3 with Sass</li>
          <li>JS including recent ES features</li>
        </ul>

        <h3>Design Tools</h3>
        <ul>
          <li>Figma</li>
          <li>Adobe</li>
          <li>Sketch</li>
        </ul>

        <h3>Dev Environment and Server Management</h3>
        <p>
          Over 2021 and 2022, I moved out of my old comfort zone of fully
          managed local server environments and WordPress services (MAMP and WP
          Engine) into more of a 😎 command-line life:
        </p>
        <ul>
          <li>
            Run my own local AMP stack dev environment with Apache, MySQL, PHP
            and phpMyAdmin
          </li>
          <li>SSH to deploy code from GitHub</li>
          <li>MYCLI for MySQL for copying databases</li>
          <li>SCP to move databases</li>
          <li>Managing and configuring Node.js servers</li>
          <li>PM2 to control app processes</li>
          <li>NGINX error logs to troubleshoot WordPress</li>
        </ul>

        <h3>Accessibility</h3>
        <p>
          I'm an advocate of correct semantic HTML and building with inclusivity
          in mind. I love getting to share with my teammates how easy it is to
          achieve big accessibility wins by making small changes.
        </p>
        <ul>
          <li>
            My work is built to meet WCAG 2.1 AA level accessibility
            requirements.
          </li>
          <li>
            I’ve completed many accessibility improvement projects on existing
            sites, mostly using WAVE by WebAIM and Google Lighthouse as
            guidance.
          </li>
        </ul>
      </div>
    </section>

    <section>
      <div class="inner">
        <h2>In-person Education</h2>

        <h3>2015 HackerYou (now Juno College)</h3>
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
        </ul>
      </div>
    </section>

    <section>
      <div class="inner">
        <h2>Picked up over 7 years working in agency settings</h2>

        <h3>UX Gains</h3>

        <p>
          To improve the UX of a multi-stage form I built, I learned about JS
          localStorage and sessionStorage. I included persistent data between
          page navigation, browser refreshing, and multiple site visits to
          complete stages of a form.
        </p>
        <p>
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

    <section></section>

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
        <h2>CSS Art</h2>
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
</script>

<style lang="scss" scoped>
section.intro {
  padding: 96px 0 64px;
}
.intro-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 30px;
}

.swiper-outer {
  width: calc(1100px + ((100vw - 1100px) / 2));
  margin: 0 0 0 auto;
}
</style>
