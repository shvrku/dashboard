<script>
    import Navbar from "../lib/components/navbar.svelte";
    import Schedule from "../lib/components/schedule.svelte";
    import Note from "../lib/components/note-insert.svelte";
    import NoteList from "../lib/components/note-list.svelte";
    import Infotexts from "../lib/components/infotexts.svelte";
</script>

<div>

    <Navbar />
    <section class="md:mt-24 mt-24 px-3 md:px-24">
        <Infotexts />
    </section>
    <section class=" md:mt-9 mt-5 md:flex px-3 md:px-24">
        <Schedule />
        <Note />
    </section>
    
    <section class=" mt-12 mb-20 md:my-20 md:flex px-3 md:px-24">
        <NoteList />
    </section>


</div>