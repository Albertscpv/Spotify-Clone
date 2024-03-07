<script lang="ts">
const currentTime = new Date()
const currentHour= currentTime.getHours()

let Greeting =""

if (currentHour < 12){
    Greeting = "Buenos dias"
} else if ( currentHour < 18){
    Greeting = "Buenas tardes "
} else {
    Greeting = "Buenas noches"
}
</script>

<h1 class="text-4xl font-bold ">{Greeting}</h1>