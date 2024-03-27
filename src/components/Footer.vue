<template>
  <footer
    class="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full flex flex-col justify-center items-center"
    :style="{ backgroundColor: backgroundColor }"
  >
    <p class="text-gray-800 text-md font-semibold mr-2 mb-1">
      ＼ 友達にシェアしよう(ノ`ω´ヾ)／
    </p>
    <div class="flex items-center space-x-2 mb-1">
      <a
        :href="xURL"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center"
      >
        <img :src="xIcon" alt="X" class="w-13 h-13" />
      </a>
      <a
        :href="lineURL"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center"
      >
        <img :src="lineIcon" alt="LINE" class="w-14 h-14" />
      </a>
    </div>

    <p class="text-gray-800 text-md">&copy; 2024 TEAM ELEVATOR</p>
  </footer>
</template>

<script>
import XIcon from "@/assets/icons/x-icon.png";
import LineIcon from "@/assets/icons/line-icon.png";
import ogImage from "@/assets/images/0-start-min.png";

export default {
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

    xIcon() {
      return XIcon;
    },
    lineIcon() {
      return LineIcon;
    },
  },
};
</script>

<style scoped></style>
