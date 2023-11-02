<script>
   let topic = "";
  let content = "";
  let approvedOnly = false;
  let signedInOnly = false;
  let submissionStatus = null;
  let submissionText = null;

  async function subscribe(event) {
    event.preventDefault();

    approvedOnly = document.getElementById("approvedOnly").checked;
    signedInOnly = document.getElementById("signedInOnly").checked;

    const response = await fetch('api/Notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic, content, approvedOnly, signedInOnly }),
    });

    if (response.ok) {
      submissionStatus = 'Success: ';
      submissionText = 'Data received by the server.Please refresh the page'
      topic = "";
      content = "";
      approvedOnly = false;
      signedInOnly = false;
    } else {
      submissionStatus = 'Error: ';
      submissionText = 'Failed to submit data to the server.'
    }
  }
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
</script>

<div class="md:ml-7 mt-7 md:w-[35em] md:mt-0 Gcard hover:bg-Cards mx-5 font-AHSM">
  <p class="md:text-3xl text-xl">Note Insert</p>
  {#if $page.data.session?.user}
    {#if $page.data.session.user.email === "shvrku@gmail.com"}
    <form on:submit|preventDefault={subscribe}>
      <!-- Form fields here -->
      <div class="mt-4">
        <input type="text" id="topic" bind:value={topic} placeholder="Enter topic..." class="form-input w-full px-3 py-2 border-Border border-solid border-[1px] rounded-lg bg-List">
      </div>
      <div class="mt-4">
        <textarea id="text" bind:value={content} placeholder="Enter content..." class="form-textarea w-full h-28 md:h-32 px-3 py-2 border-Border border-solid border-[1px] rounded-lg bg-List"></textarea>
        <div class="flex mt-2">
          <p>Approved Only:</p>
          <input type="checkbox" id="approvedOnly" bind:checked={approvedOnly} class="mt-1" />
        </div>
        <div class="flex mt-2">
          <p>SignedIn Only:</p>
          <input type="checkbox" id="signedInOnly" bind:checked={signedInOnly} class="mt-1" />
        </div>
        {#if submissionStatus}
         <p class="my-3">{submissionStatus} {submissionText}</p>
        {/if}
      </div>
      <button type="submit" class="mt-4 bg-FrostySilver hover:TranquilTaupe md:text-base text-sm text-bText py-2 px-4 rounded">
        Submit
      </button>
      <button on:click={signOut} class="bg-FrostySilver hover:TranquilTaupe md:text-base md:hidden ml-3  text-sm text-bText py-2 px-4 rounded">Sign out</button>
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
