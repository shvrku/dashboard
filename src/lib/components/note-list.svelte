<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  // List of approved emails
  const approvedEmails = ["shvrku@gmail.com", "example@example.com", "another@example.com"];

  let data = [];

  onMount(async () => {
    try {
      const response = await fetch('api/Notes'); // Replace with your API endpoint
      const result = await response.json();
      data = result; // Assign the fetched data to the 'data' variable
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error if necessary
    }
  });

  // Function to check if the user is signed in
  function isUserSignedIn() {
    return $page.data.session?.user !== undefined;
  }

  // Function to check if the user is approved
  function isUserApproved() {
    const userEmail = $page.data.session?.user?.email;
    return approvedEmails.includes(userEmail);
  }
</script>

<div class="w-full md:flex flex-wrap p-1 bg-List rounded-xl md:p-6">
  {#each data as item (item.id)}
    <div class="mt-7 m-5 Gcard font-AHSM ListCard md:w-[22%]">
      <p class="text-xs text-FrostyGrey">ID: {item.id}</p>
      {#if (item.signedin && !isUserSignedIn())}
        <p class="text-stone-400">Signed In Users Only</p>
      {:else if (item.approvedonly && !isUserApproved())}
        <p class="text-stone-400">Approved Users Only</p>
      {:else}
        <div>
          <p class="text-2xl mb-2">{item.topic}</p>
          <p class="font-mono">{item.content}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>
