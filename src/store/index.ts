import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'


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
      state.push(action.payload.newTodo)
    }
  }
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})

export const { add } = todoSlice.actions

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector