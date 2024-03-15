<template>
  <div>
    <!-- イメージ画像を表示 -->
    <img :src="imageUrl" alt="イメージ画像の説明">

    <!-- ステージ1 -->
    <div v-if="currentStageIndex === 0">
      <p>4問中3問が正解です。3人降りてくれるような選択肢を選んでみよう！</p>
      <!-- ボタンで選択肢を表示 -->
      <button @click="checkAnswer(0)" :class="{ selected: selectedChoice === 0, unselected: selectedChoice !== 0 }">{{ choices[0] }}</button>
      <button @click="checkAnswer(1)" :class="{ selected: selectedChoice === 1, unselected: selectedChoice !== 1 }">{{ choices[1] }}</button>
      <button @click="checkAnswer(2)" :class="{ selected: selectedChoice === 2, unselected: selectedChoice !== 2 }">{{ choices[2] }}</button>
      <button @click="checkAnswer(3)" :class="{ selected: selectedChoice === 3, unselected: selectedChoice !== 3 }">{{ choices[3] }}</button>
    </div>

    <!-- ステージ2 -->
    <div v-else-if="currentStageIndex === 1">
      <p>4問中2問が正解です。3人降りてくれるような選択肢を選んでみよう！</p>
      <!-- ボタンで選択肢を表示 -->
      <button @click="checkAnswer(0)" :class="{ selected: selectedChoice === 0, unselected: selectedChoice !== 0 }">{{ choices[0] }}</button>
      <button @click="checkAnswer(1)" :class="{ selected: selectedChoice === 1, unselected: selectedChoice !== 1 }">{{ choices[1] }}</button>
      <button @click="checkAnswer(2)" :class="{ selected: selectedChoice === 2, unselected: selectedChoice !== 2 }">{{ choices[2] }}</button>
      <button @click="checkAnswer(3)" :class="{ selected: selectedChoice === 3, unselected: selectedChoice !== 3 }">{{ choices[3] }}</button>
    </div>

    <!-- ステージ3 -->
    <div v-else-if="currentStageIndex === 2">
      <p>4問中1問が正解です。3人降りてくれるような選択肢を選んでみよう！</p>
      <!-- ボタンで選択肢を表示 -->
      <button @click="checkAnswer(0)" :class="{ selected: selectedChoice === 0, unselected: selectedChoice !== 0 }">{{ choices[0] }}</button>
      <button @click="checkAnswer(1)" :class="{ selected: selectedChoice === 1, unselected: selectedChoice !== 1 }">{{ choices[1] }}</button>
      <button @click="checkAnswer(2)" :class="{ selected: selectedChoice === 2, unselected: selectedChoice !== 2 }">{{ choices[2] }}</button>
      <button @click="checkAnswer(3)" :class="{ selected: selectedChoice === 3, unselected: selectedChoice !== 3 }">{{ choices[3] }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      choices: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
      selectedChoice: null,
      currentStageIndex: 0
    };
  },
  methods: {
    checkAnswer(choiceIndex) {
      this.selectedChoice = choiceIndex;
      // 正解の場合、次のステージに進む
      if (this.currentStageIndex === 0 && (choiceIndex === 0 || choiceIndex === 1 || choiceIndex === 2)) {
        this.moveToNextStage();
      } else if (this.currentStageIndex === 1 && (choiceIndex === 0 || choiceIndex === 1)) {
        this.moveToNextStage();
      } else if (this.currentStageIndex === 2 && choiceIndex === 0) {
        this.moveToNextStage();
      }
    },
    moveToNextStage() {
      if (this.currentStageIndex < 2) {
        this.currentStageIndex++;
        // ステージに応じた画像パスを設定
        this.setImageUrl();
        this.selectedChoice = null; // ボタンの選択状態をリセット
      }
    },
    setImageUrl() {
      // ステージごとに画像を設定
      if (this.currentStageIndex === 0) {
        this.imageUrl = "/path/to/image1.jpg";
      } else if (this.currentStageIndex === 1) {
        this.imageUrl = "/path/to/image2.jpg";
      } else if (this.currentStageIndex === 2) {
        this.imageUrl = "/path/to/image3.jpg";
      }
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: yellow; /* ボタンが選択されたときの背景色を指定 */
}
.unselected {
  background-color: white; /* ボタンが選択されていないときの背景色を指定 */
  color: black


