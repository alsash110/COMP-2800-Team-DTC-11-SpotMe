<template>
  <div class="about">
    <h1>What is SpotMe?</h1>
    <img class="company-logo" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/beanies.png?alt=media&token=65ef3c62-9532-4573-8168-a7047050608a" alt="Company Logo">
    <p> 
      Find the people who match your routine, experience, schedule and other preferences and train together.
      In <i>SpotMe</i>, we want people who train their physique to find friends to become better with. 
      Are you just about to begin your work out journey? Or you are a professional bodybuilder? No matter what 
      your level of experience is, the team at <i>SpotMe</i> has your back, <i><b>sheeeeesh</b> harmonized</i>. 
    </p>
    <div class="grid-container">
      <div class="person-1">
        <DevProfile name="Alberto" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/alberto-spotme1%20(2).PNG?alt=media&token=9eb460a7-6d9f-459d-9ca5-3a5a19896e4b"/>
      </div>
      <div class="person-2">
        <DevProfile name="Eric" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/ricky.png?alt=media&token=410c0936-29c9-4dbe-be1f-eb1f02c657eb"/>
      </div>
      <div class="person-3">
        <DevProfile name="Ivan" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/ivan_profile.jpg?alt=media&token=4a34c75f-0a01-41fc-bdb2-ceaa16b6d644"/>
      </div>
      <div class="person-4">
        <DevProfile name="Justin" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/1123123123123.png?alt=media&token=ffda3882-b6c2-4f8b-a9dc-05d2f608efdc"/>
      </div>
      <div class="person-5">
        <DevProfile name="Ross" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/ross_doria.jpg?alt=media&token=cdbe3d39-b12d-422b-aa37-501d8a2efce5"/>
      </div>
    </div>
  </div>
</template>

<script>
  import DevProfile from '../components/DevProfile'
  export default {
    name: "About",
    components: {
      DevProfile
    },
    data () {
      return {
        items: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2FGirls%20Running.png?alt=media&token=b9e7d7a5-a3db-401e-bff7-601abc6bcb14',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fworkout-group.jpg?alt=media&token=507e68d6-6d68-4182-bd6b-4d29675f0221',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Ffriendworkingout.jpg?alt=media&token=745af7f8-fefa-4924-93db-54465c9ceac1',
          },
        ],
        links: [
        'About Us',
        'Learn',
        'Support',
      ]
      }
    },
  }
</script>

<style>

  h1 {
    text-align: center;
  }

  p {
    margin: 10px;
    text-align: center;
  }

  .company-logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 45vw;
    height: 45vw;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "person-1 person-2"
      "person-3 person-4"
      "person-5 person-5";
  }

  .person-1 { grid-area: person-1; }

  .person-2 { grid-area: person-2; }

  .person-3 { grid-area: person-3; }

  .person-4 { grid-area: person-4; }

  .person-5 { grid-area: person-5; }
</style>
