<template>
  <header class="mb-auto">
    <nav
      class="fixed top-0 left-0 w-full z-10 bg-green-200 p-4 flex justify-center md:justify-between items-center align-middle"
      :style="{ backgroundColor: backgroundColor }"
    >
      <a
        href="/"
        class="flex items-center flex-shrink-0 md:mr-6"
        @click="handleHeaderClick"
      >
        <img :src="logoJingi" alt="仁義なき" class="w-auto h-7" />
        <img :src="logoHamu" alt="ハムハムちゃん" class="w-auto h-8 pl-1" />
      </a>

      <div class="hidden md:flex items-center space-x-3">
        <p class="text-orange-950 text-xs md:text-sm">友達にシェアしよう！</p>
        <a :href="xURL" target="_blank" rel="noopener noreferrer">
          <img :src="xIcon" alt="X" class="w-10 h-10" />
        </a>
        <a :href="lineURL" target="_blank" rel="noopener noreferrer">
          <img :src="lineIcon" alt="LINE" class="w-11 h-11" />
        </a>
        <a :href="kifuURL" target="_blank" rel="noopener noreferrer">
          <img :src="kifuIcon" alt="車いすの団体に寄付" class="w-11 h-11" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import XIcon from "@/assets/icons/x-icon.png";
import LineIcon from "@/assets/icons/line-icon.png";
import KifuIcon from "@/assets/icons/kifu-icon.png";
import ogImage from "@/assets/images/0-start-min.png";
import LogoImage from "@/assets/images/logo-hamu.png";
import LogoJingi from "@/assets/images/logo-jingi.png";

export default {
  name: "Header",
  data() {
    return {
      title: "〜仁義なきハムハムちゃん〜",
      backgroundColor: "#D6E5CB",
      discription:
        "車椅子ユーザーのハムハムちゃん🐹満員エレベーターにどうやって入るのか🛗⁉️「コミュニケーション」でサポートを引き出し、ギャップを乗り越える知的戦略ゲーム🎮",
      hashtags: "#DotstoCode",
    };
  },
  computed: {
    url() {
      return window.location.href;
    },
    xURL() {
      const text = `${this.discription}\n${this.title} ${this.hashtags}`;
      const encodedText = encodeURIComponent(text);
      return `https://twitter.com/intent/tweet?url=${this.url}&text=${encodedText}&image=${ogImage}`;
    },

    lineURL() {
      return `https://line.me/R/msg/text/?${this.title}%0D%0A${this.url}`;
    },
    kifuURL() {
      return "https://syncable.biz/associate/1760012#associate-tabs";
    },

    xIcon() {
      return XIcon;
    },
    lineIcon() {
      return LineIcon;
    },
    kifuIcon() {
      return KifuIcon;
    },
    logoHamu() {
      return LogoImage;
    },
    logoJingi() {
      return LogoJingi;
    },
  },
  methods: {
    handleHeaderClick(event) {
      if (
        !confirm(
          "最初の画面に戻ります。ゲームは中断されますが、よろしいですか？"
        )
      ) {
        event.preventDefault();
      }
    },
  },
};
</script>
