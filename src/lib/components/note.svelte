<script>
    let topic = "";
    let content = "";
  
    function handleSubmit(event) {
      event.preventDefault();
  
      // Perform actions to send 'topic' and 'content' variables to the database here
      // For example, you can make an API call to send the data to the server
  
      // Reset the inputs and textarea after submitting the form
      topic = "";
      content = "";
    }
  </script>
  
  <div class="md:ml-7 mt-7 md:w-[35em] md:mt-0 Gcard hover:bg-Cards mx-5 font-AHSM">
    <p class="md:text-3xl text-xl">Note Insert</p>
    <form on:submit={handleSubmit}>
      <div class="mt-4">
        <input type="text" id="topic" bind:value={topic} placeholder="Enter topic..." class="form-input w-full px-3 py-2 border-Border border-solid border-[1px] rounded-lg bg-List">
      </div>
      <div class="mt-4">
        <textarea id="content" bind:value={content} placeholder="Enter content..." class="form-textarea w-full h-28 md:h-32 px-3 py-2 border-Border border-solid border-[1px] rounded-lg bg-List"></textarea>
      </div>
      <button type="submit" class="mt-4 bg-FrostySilver hover:TranquilTaupe md:text-base  text-sm text-bText py-2 px-4 rounded">
        Submit
      </button>
    </form>
  </div>
  