import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    //функция добавления в избранное по id
    pushHotel: (state, action) => {
      const currentHotel = state.hotels.find((elem) => {
        //создать конст текущего елемента, методом find мы устанавливаем условие для первого попавшегося элемента
        return elem.id == action.payload.id; //вернки элемент, id которого равен id элемента, который выбрали
      });
      if (currentHotel) {
        //если он уже есть в массиве
        return; //второй раз мы его не добавляем в избранное
      } else {
        //в ином случае добавляем
        state.hotels.push(action.payload); //добавляем в конец массива то, что передал пользователь при вызове функции
      }
    },
    //функция удаления из избранного по id
    deleteHotel: (state, action) => {
      let id = action.payload.id; //находим id
      state.hotels = state.hotels.filter((item) => {
        return item.id !== id; //вернуть элементы, которые не равны id элементa для удаления
      });
    },
    //функция очистки для избранного
    clearFavorite: (state, action) => {
      state.items = [];
    },
  },
});

//селектор, с помощью которого мы можем смотреть выбран ли текущий элемент
export const selectCurrentLikeHotel = (id) => (state) => {
  //методом find мы устанавливаем условие для первого попавшегося элемента
  return state.favorite.hotels.find(
    (elem) => elem.id == id //вернки элемент, id которого равен id элемента, который выбрали
  );
};

export default favoriteSlice.reducer; //экспортируем хранилище
export const { pushHotel, deleteHotel, clearFavorite } = favoriteSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
