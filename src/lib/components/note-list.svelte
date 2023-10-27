<script>
   import { page } from '$app/stores';
    let data = [
      {
        id: "1",
        signedIn: 1,
        approvedOnly: 0,
        topic: "Topic 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "2",
        signedIn: 1,
        approvedOnly: 1,
        topic: "Topic 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "3",
        signedIn: 1,
        approvedOnly: 1,
        topic: "Topic 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "4",
        signedIn: 0,
        approvedOnly: 0,
        topic: "Topic 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "5",
        signedIn: 1,
        approvedOnly: 0,
        topic: "Topic 5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "6",
        signedIn: 0,
        approvedOnly: 0,
        topic: "Topic 6",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ];
     // Function to check if the user is signed in
     function isUserSignedIn() {
      return $page.data.session?.user !== undefined;
      }

      // Function to check if the user is approved
      function isUserApproved() {
      return $page.data.session.user?.email === "shvrku@gmail.com";
      }    
  </script>
  
  <div class="w-full md:flex flex-wrap p-1 bg-List rounded-xl md:p-6">
    {#each data as item (item.topic)}
      <div class="mt-7 m-5 Gcard font-AHSM ListCard md:w-[22%]">
        <p class="text-xs text-FrostyGrey">ID: {item.id}</p>
        {#if (item.signedIn === 1 && !isUserSignedIn())}
          <p class=" text-stone-400 ">Signed In Users Only</p>
        {:else if (item.approvedOnly === 1 && !isUserApproved())}
          <p class=" text-stone-400 ">Approved Users Only</p>
        {:else}
          <div>
            <p class="text-2xl mb-2">{item.topic}</p>
            <p class="font-mono">{item.text}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
  

  