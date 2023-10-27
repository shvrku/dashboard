<script>
    let data = [
      {
        id: "1",
        topic: "Topic 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "2",
        topic: "Topic 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "3",
        topic: "Topic 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "4",
        topic: "Topic 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "5",
        topic: "Topic 5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "6",
        topic: "Topic 6",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ];
  </script>
  
  <div class="w-full md:flex flex-wrap p-1 bg-List rounded-xl md:p-6">
    {#each data as item (item.topic)}
      <div class="mt-7 m-5 Gcard font-AHSM ListCard md:w-[22%]">
        <p class=" text-xs text-FrostyGrey">ID: {item.id}</p>
        <div>
          <p class="text-2xl mb-2">{item.topic}</p>
          <p class="font-mono ">{item.text}</p>
        </div>
      </div>
    {/each}
  </div>
  

  