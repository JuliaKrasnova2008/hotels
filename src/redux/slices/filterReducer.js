import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guests: [
    {
      id: 1,
      adults: 2,
      children: 0,
    },
  ],
  childrenAges: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  },
  search: "",
  regionId: "2872",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setRegionId: (state, action) => {
      let regionId = action.payload;
      state.regionId = regionId;
    },
    setSearch: (state, action) => {
      let search = action.payload;
      state.search = search;
    },
    setGuests: (state, action) => {
      let children = action.payload.children;
      let adults = action.payload.adults;

      //увеличиваем id комнаты, добавляем элемент в конец массива, для этого разворачиваем предыдущий массив и туда в конец добавляем новый элемент
      state.guests = [
        ...state.guests,
        //элемент-объект, который добавляем
        {
          //в прошлом массиве ищем id последней комнаты, смотрим ее значение и при добавлении в объект заносим этот id увеличенный на 1
          id: state.guests[state.guests.length - 1].id + 1,
          adults, //записываем кол-во по этим же ключам
          children,
        },
      ];
    },
    //удаление комнаты
    removeGuests: (state, action) => {
      state.guests = state.guests.slice(0, -1);
    },
    //увеличиваем кол-во гостей
    setCountPlus: (state, action) => {
      const id = action.payload.id; //нашла id комнаты
      const key = action.payload.key; //adults или children

      //ищем текущую комнату в состоянии guests и методом find находим id, которое совпадаем с нашим, ттем самым находим комнату
      const currentRoom = state.guests.find((elem) => {
        return elem.id === id;
      });

      //увеличиваем кол-во по переданному ключу
      currentRoom[key]++;

      //если ключ равен children, в конец нового массива childrenAges добавляем 0, в дальнейшем 0 будут менять выбранного из списка возрастами
      if (key === "children") {
        state.childrenAges[currentRoom.id] = [
          ...state.childrenAges[currentRoom.id],
          0,
        ];
      }
    },
    //уменьшаем кол-во гостей
    setCountMinus: (state, action) => {
      const id = action.payload.id; //нашла id комнаты
      const key = action.payload.key; //adults или children

      const currentRoom = state.guests.find((elem) => {
        return elem.id === id;
      });

      currentRoom[key]--;

      //если ключ равен children, в конце нового массива мы удаляем один элемент
      if (key === "children") {
        state.childrenAges[currentRoom.id] = state.childrenAges[
          currentRoom.id
        ].slice(0, -1);
      }
    },
    setChildrenAge: (state, action) => {
      const id = action.payload.id; //нашла id комнаты
      const childrenIndex = action.payload.index; //нахожу индекс ребенка в массиве комнаты
      const childrenAge = action.payload.childrenAge; //возраст, который мы передаем/выбираем при добавлении ребенка

      state.childrenAges = {
        ...state.childrenAges, //разворачиваю объект с возрастами детей и комнатами
        [id]: [
          //обращаюсь к ключу комнаты, внутри которой находится массив, через : меняю значение ключа на:
          ...state.childrenAges[id].slice(0, childrenIndex), // методом slice беру часть массива индекса выбранного ребенка,, разворачиваю массив внутри комнаты
          childrenAge, // элемент стоящий после этой части заменяю на выбранный возраст
          ...state.childrenAges[id].slice(childrenIndex + 1), //копирую оставщуюся часть
        ],
        //например, у нас есть [1,2,3,4,5]. Нужно заменить 3 на 10
        // Берем часть массива до 3 (это [1,2])
        //Вместо 3 подставляем 10
        //Берем оставщуюся ачсть массива  [4,5]
      };
    },
  },
});

//Кастомный селектор, с помощью которого мы достаем кол-во родителей и массив возрастов детей
export const selectAdultsAndChildren = () => (state) => {
  //ищем кол-во родителей
  const adultsCount = state.filter.guests.reduce((prev, elem) => {
    return prev + elem.adults;
  }, 0);
  //добавляю в один общий массив все возраста детей
  //прохожусь по объекту childrenAges
  const obj = state.filter.childrenAges;
  const childrenAgesArr = [];
  for (let key in obj) {
    //в новый массив методом push разворачиваю старый массив по ключу
    childrenAgesArr.push(...obj[key]);
  }
  return { adultsCount, childrenAgesArr };
};

export default filterSlice.reducer; //экспортируем хранилище
export const {
  setGuests,
  setCountPlus,
  setCountMinus,
  removeGuests,
  setSearch,
  setRegionId,
  setChildrenAge,
} = filterSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
