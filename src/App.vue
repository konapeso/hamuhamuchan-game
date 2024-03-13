<script setup>
import {ref, computed}from 'vue'

const questions = ref([

  {
    question: 'what is Vue JS?',
    answer: 0,
    options: [
          'A front end framework',
          'A library',
          'An ice cream maker'
    ],
    selected: null
  },
  {
    question: 'what is Vuex?',
    answer: 2,
    options: [
          'Vue with an x',
          'A cheese selection',
          'State managemnet library'
    ]
  }
  {
    question: 'what is Vue Router used for?',
    answer: 1,
    options: [
          'walking in space',
          'A routing library for vue JS',
          'Burger sauce',
          'Quizzes'
    ]
  }
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
    let value = 0
    questions.value.map(q =>{
        if(q.selected ==q.answer){
          value++
        }
    })
    return value
})

const getCurrentQuestion = computed(() => {
  let question = question.value[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})

const SetAnswer = evt =>{
  question.value[currentQuestion.value].selected = evt.target.value
  evt.target.value = null
}

const NextQuestion = ()=>{
  if(currentQuestion.value < questions.value.length - 1){
     currentQuestion.value++
  }else{
       quizCompleted.value = true
  }
}

</script>

<template>
    <main class=" app">
         <h1>The Quiz</h1>

         <section class="quiz">
               <div class="quiz-info">
                <span class="question">{{getCurrentQuestion.question}}</span>
                <span class="score">Score{{ score }}/ {{ questions.length }}</span>
               </div>
               <div class="options">
                    <label v-for="(option, index) in getCurrentQuestion.options" 
                    :key="index"
                    :class = "option${
                      getCurrentQuestion.selected ==index 
                      
                    }">
                      <input type="radio" 
                      :name ="getCurrentQuestion.index"
                      :value="index">
                    </label>
               </div>
         </section>

    </main>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background-color: #271c36;
    color: #fff;
}
</style>