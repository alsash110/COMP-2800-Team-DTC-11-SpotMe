<template>
    <div>
        <FindMatchesHeader/>
        <FindMatchesProfileCard/>
        <FindMatchesFooter/>
        
    </div>
</template>

<script>
    import FindMatchesHeader from '../components/FindMatchesHeader'
    import FindMatchesProfileCard from '../components/FindMatchesProfileCard'
    import FindMatchesFooter from '../components/FindMatchesFooter'
    export default {
        name: "DisplayMatches",
        components: {
            FindMatchesHeader,
            FindMatchesProfileCard,
            FindMatchesFooter
        }
    }
</script>