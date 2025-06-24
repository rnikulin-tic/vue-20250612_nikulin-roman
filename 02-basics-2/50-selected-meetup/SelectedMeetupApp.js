import { defineComponent, ref, watch, onMounted } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const currentMeetupId = ref(1)
    const currentMeetupTtile = ref(null)

    const updateCurrentMeetup = () => {
      const meetup = getMeetup(currentMeetupId.value)
      meetup.then(data => {
        currentMeetupTtile.value = data.title;
      })
    }  

  const nextMeeting = () => {
      if (currentMeetupId.value >= 5) {
        return;
      }
      currentMeetupId.value += 1
  }

  const prevMeeting = () => {
      if (currentMeetupId.value <= 1) {
        return;
      }
      currentMeetupId.value -= 1
  }    

    onMounted(() => {
      updateCurrentMeetup()
    })

    watch(currentMeetupId, () => {
        updateCurrentMeetup()
     })

    return {
      currentMeetupId,
      currentMeetupTtile,
      nextMeeting,
      prevMeeting,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" :disabled="currentMeetupId <= 1" @click="prevMeeting">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
              <div class="radio-group__button" v-for="meetupId in 5" :key="meetupId">
              <input
                :id="'meetup-id-' + meetupId"
                class="radio-group__input"
                type="radio"
                name="meetupId"
                :value="meetupId"
                v-model="currentMeetupId"
              />
              <label :for="'meetup-id-' + meetupId" class="radio-group__label">{{ meetupId }}</label>
            </div>
        </div>

        <button class="button button--secondary" type="button" :disabled="currentMeetupId >= 5" @click="nextMeeting">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ currentMeetupTtile }}</h1>
        </div>
      </div>

    </div>
  `,
})
