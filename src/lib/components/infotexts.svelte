<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let greeting = writable('');
    let currentTime = '';

    onMount(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const twelveHourFormat = hours % 12 || 12; // Convert 24-hour to 12-hour format
            currentTime = `${twelveHourFormat.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;

            if (hours >= 0 && hours < 12) {
                greeting.set('Good Morning');
            } else if (hours >= 12 && hours < 17) {
                greeting.set('Good Afternoon');
            } else if (hours >= 17 && hours < 20) {
                greeting.set('Good Evening');
            } else {
                greeting.set('Good Night');
            }
        };

        // Update the clock immediately and then every minute
        updateClock();
        setInterval(updateClock, 60000);
    });
</script>

<div>
    {#if $page.data.session?.user}
    <p class="text-xl">{$greeting}, {$page.data.session.user.name}</p>
    <p class="md:text-2xl text-xl">It is currently {currentTime} <span class=" md:text-xs text-[9px] ">[Your device time]</span></p>
    {:else}
    <p class="text-xl">{$greeting}</p>
    <p class="md:text-2xl text-xl">It is currently {currentTime} <span class=" md:text-xs text-[9px] ">[Your device time]</span></p>
    {/if}
</div>
