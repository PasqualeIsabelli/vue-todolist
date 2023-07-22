'use strict'

/* ESERCIZIO: Vue Todolist
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da tre proprietà:
id, un numero progressivo per indicare in modo univoco l’elemento
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
- MILESTONE 0:
Creare un array con dei dati di partenza
- MILESTONE 1:
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
- MILESTONE 2:
Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
- MILESTONE 3:
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
- Bonus:
1. oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2. cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
 */

const app = Vue.createApp({
  data() {
    return {
      // VARIABILI:
      // Creo un array con i dati di partenza e li stampo all'interno dell'HTML
      todoList: [
        {
          id: 0,
          text: "Fare la spesa",
          done: false,
        },
        {
          id: 1,
          text: "Andare dal barbiere",
          done: false,
        },
        {
          id: 2,
          text: "Andare dal dottore",
          done: false,
        },
      ],
      //Creo un oggetto universale per stampare dei nuovi item per la todolist
      newTodoItem: {
        text: "",
        done: false,
      },
      lastId: 2,
    }
  },
  methods: {
    // EVENT CLICK
    addTodoItem() {
      // Creo un clone che elimina la reattività di Vue tramite spread operator
      const newItem = {...this.newTodoItem, id: ++this.lastId}
      // Pusho all'interno dell'array di dati il nuovo item
      this.todoList.push(newItem)
    },
    // EVENT CLICK
    todoItemDone(todoItem) {
      // Condizione: Al click se il done è true allora diventerà folse altrimenti resterà true
      if (todoItem.done === true) {
        todoItem.done = false;
      } else {
        todoItem.done = true;
      }
    },
    // EVENT CLICK
    deleteTodoItem(idItem) {
      // Creo una variabile che mi identifica l'indice degli item della todolist
      let indexTodoItem = this.todoList.findIndex((todoItem) => todoItem.id === idItem);
      // Attraverso la funzione splice elimino l'item selezionato tramite il suo indice
      this.todoList.splice(indexTodoItem, 1)
    }
  }
}).mount('#app')