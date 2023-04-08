<template>
  <footer id="siteFooter" class="site-footer">
    <div class="footer-wrapper">
      <div class="left">
        <div>
          <nuxt-img
            class="footer-logo"
            src="/Laura-Salgado-Developer-Since-2016-light.svg"
            alt="Home page of Laura Salgado Developer Since 2016"
            width="400"
            height="134"
          />

          <ul class="socials no-format">
            <li>
              <a
                href="mailto:culham.laura@gmail.com"
                target="_blank"
                title="Email"
              >
                <Icon name="mdi-email" width="40" height="40" color="#fff" />
                <span class="screen-reader-text"
                  >Email culham.laura@gmail.com</span
                >
              </a>
            </li>

            <li>
              <a
                href="https://github.com/LauraSalgado1"
                target="_blank"
                title="GitHub"
              >
                <Icon name="mdi-github" width="40" height="40" color="#fff" />
                <span class="screen-reader-text">Github</span>
              </a>
            </li>

            <li>
              <a
                href="https://codepen.io/Laura_Salgado"
                target="_blank"
                title="CodePen"
              >
                <Icon name="mdi-codepen" width="40" height="40" color="#fff" />
                <span class="screen-reader-text">CodePen</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/laura-salgado-developer/"
                target="_blank"
                title="LinkedIn"
              >
                <Icon name="mdi-linkedin" width="40" height="40" color="#fff" />
                <span class="screen-reader-text">Linked In</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.etsy.com/shop/laurasalgadoart"
                target="_blank"
                title="Etsy"
              >
                <Icon name="bxl:etsy" width="50" height="40" color="#fff" />
                <span class="screen-reader-text">Etsy</span>
              </a>
            </li>
          </ul>
        </div>
        <p class="footer-text-line">
          <span class="copyright">&copy; Laura Salgado {{ year }}</span>
          <span>&#8226;</span>
          <nuxt-link class="about-me" to="/about">About Me</nuxt-link>
          <span>&#8226;</span>
          <span class="built-nuxt">
            I built this site in
            <nuxt-img src="/LogosNuxt.svg" alt="Nuxt" width="55" height="13" />
            . &#8197;
            <a
              href="https://github.com/LauraSalgado1/Developer-Portfolio-2023"
              target="_blank"
              >Pop the hood</a
            >
            &#8197;on
            <Icon
              name="octicon:logo-github-16"
              alt="github"
              color="#fff"
              width="55"
            />
            .</span
          >
        </p>
      </div>

      <div class="right">
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/playlist/3woPqZeMzNK241HNAri7xV?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.site-footer {
  padding: 64px 64px 0;
  background: $c-black;
  color: $c-white;
  @media (max-width: 700px) {
    padding: 32px 32px 0;
  }
}

.footer-wrapper {
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 96px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 250px;
    grid-gap: 64px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
}

.footer-logo {
  display: block;
  margin-bottom: 48px;
  position: relative;
  left: -18px;
  @media (max-width: 450px) {
    left: -15px;
  }
}

.footer-text-line {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 16px;
  img {
    margin: 0 2px 2px 5px;
  }
  svg {
    margin-right: -4px;
  }
}

.built-nuxt {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.copyright,
.about-me {
  margin-right: 24px;
}

.built-nuxt,
.about-me {
  margin-left: 24px;
}

.copyright,
.about-me,
.built-nuxt {
  margin-bottom: 16px;
}

.socials {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 30px;
  li {
    margin: 0 8px;
  }
  li:first-child {
    margin-left: 0;
  }
  a {
    display: block;
  }
  a:not(:first-child) {
    padding: 5px;
  }
  a:first-child {
    padding: 5px 5px 5px 0;
  }
}

.socials svg,
.socials path {
  fill: $c-white;
}

a,
a:active,
a:focus,
a:hover,
a:visited {
  color: $c-white;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.right {
  margin-bottom: 32px;
}
</style>
