import { configureStore, createSlice } from '@reduxjs/toolkit'


/**
 * reducer -> as todas as informações que agente vai compartilhas entre os componentes da nossa aplicação.
 * slice -> pequenos pedaços de estados compartilhados
 * 
 * 
 */

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

  // vai adicionar quais ações a interface pode fazer no nosso estado
  reducers: {
    add: (state, action) => {
      console.log(state, action);
    }
  }
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})

export const { add } = todoSlice.actions