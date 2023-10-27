<script>
    import { signIn, signOut } from '@auth/sveltekit/client'
    import { page } from '$app/stores'
  </script>

<nav class=" md:flex text-center justify-between p-3  backdrop-blur-[5px] backdrop-saturate-[180%] overflow-hidden fixed z-[1] top-0 w-full border-solid border-b-[1px] border-Nav" id="navbar">
    <a href="#Hero"><div class=""><p class="text-2xl font-medium font-AHSM m-1 md:ml-24 ">SHVRKU</p></div></a>
    <div class="md:flex hidden">
        <div class=" mr-24 font-mono">
            {#if $page.data.session?.user}
             <button on:click={signOut} class="bg-FrostySilver hover:TranquilTaupe md:text-base  text-sm text-bText py-2 px-4 rounded">Sign out</button>
             {:else}
                 <button on:click={() => signIn('github')} class="bg-FrostySilver hover:TranquilTaupe md:text-base  text-sm text-bText py-2 px-4 rounded">Sign in</button>
             {/if}
        </div>
    </div>
</nav>


