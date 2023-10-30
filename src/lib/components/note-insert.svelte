<script>
  let topic = "";
  let content = "";
  
  function handleSubmit(event) {
    event.preventDefault();

    // Check if the user is authorized before performing form submission
    if ($page.data.session.user.email === "shvrku@gmail.com" ) {
      topic = "";
      content = "";
    } else {
      // Handle unauthorized access
      console.log("Unauthorized access");
    }
  }

  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
</script>

<div class="md:ml-7 mt-7 md:w-[35em] md:mt-0 Gcard hover:bg-Cards mx-5 font-AHSM">
  <p class="md:text-3xl text-xl">Note Insert</p>
  {#if $page.data.session?.user}
    {#if $page.data.session.user.email === "shvrku@gmail.com"}
      <form on:submit={handleSubmit}>
        <!-- Form fields here -->
        <div class="mt-4">
          <input type="text" id="topic" bind:value={topic} placeholder="Enter topic..." class="form-input w-full px-3 py-2 border-Border border-solid border-[1px] rounded-lg bg-List">
        </div>
        <div class="mt-4">
          <textarea id="content" bind:value={content} placeholder="Enter content..." class="form-textarea w-full h-28 md:h-32 px-3 py-2 border-Border border-solid border-[1px] rounded-lg bg-List"></textarea>
        </div>
        <button type="submit" class="mt-4 bg-FrostySilver hover:TranquilTaupe md:text-base text-sm text-bText py-2 px-4 rounded">
          Submit
        </button> 
        <button on:click={signOut} class="bg-FrostySilver md:hidden ml-5 hover:TranquilTaupe md:text-base  text-sm text-bText py-2 px-4 rounded">Sign out</button>
      </form>
    {:else}
      <p class="mt-4">You're not an approved user</p>
      <p>Signed in as {$page.data.session.user.email}</p>
    {/if}
  {:else}
    <p class="mt-4">Not signed in.</p>
    <button on:click={() => signIn('github')} class="mt-4 bg-FrostySilver hover:TranquilTaupe md:text-base text-sm text-bText py-2 px-4 rounded md:hidden">Sign in</button>
  {/if}
</div>
