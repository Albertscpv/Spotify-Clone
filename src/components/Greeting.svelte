<script lang="ts">
const currentTime = new Date()
const currentHour= currentTime.getHours()

let Greeting =""

if (currentHour < 12){
    Greeting = "Buenos dias, trabajo en proceso"
} else if ( currentHour < 18){
    Greeting = "Buenas tardes, trabajo en proceso"
} else {
    Greeting = "Buenas noches, trabajo en proceso"
}
</script>

<h1 class="text-4xl font-bold ">{Greeting}</h1>
