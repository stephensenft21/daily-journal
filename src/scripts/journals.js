/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const objectsJournalEntry1 = {
    Dateofentry: "03-05-2019",
    Conceptscovered: "Scope in Javascript",
    Journalentry:"",
    Moodfortheday: "Anxious "


}
const objectsJournalEntry2 = {
    Dateofentry: "03-02-2019",
    Conceptscovered: "random exercise",
    Journalentry:"",
    Moodfortheday: "stressed"
}

const objectsJournalEntry3 = {
    Dateofentry: "03-07-2019",
    Conceptscovered: "Scope in Javascript",
    Journalentry:"",
    Moodfortheday: "Happy"
}
const objectsJournalEntry4 = {
        Dateofentry: "03-01-2019",
        Conceptscovered: "learned About API",
        Journalentry:"",
        Moodfortheday: "Angry"
}
/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {

}

// Invoke the render function
renderJournalEntries(journalEntries)




        addListJournal = []
        addListJournal.push(objectsJournalEntry1);
        addListJournal.push(objectsJournalEntry2);
        addListJournal.push(objectsJournalEntry3);
        addListJournal.push(objectsJournalEntry4);
        console.table(addListJournal);