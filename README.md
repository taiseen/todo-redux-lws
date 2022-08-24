> 21 - Aug - 2022 | Module 3

Todo with React, Redux

* yarn add react-redux
* yarn add redux-devtools-extension

## Redux Data Flow

### Read Data From Redux Store - State

* `useSelector`( sate => state.Property_Name_Inside_RootReducer )

### Write Data At Redux Store 



|No| Steps we need to do                | Usage for                                          |
|--|------------------------------------|----------------------------------------------------|
| 1| onClick / onChange                 | tag attribute's use for users event listener       |
| 2| handlerFunction **(data/value)**   | custom function call inside attributes from UI     |
| 3| dispatch **( )** = `useDispatch()` | **react-redux** lib for calling Reducer inside Redux Store  |
| 4| actionCreator <br/> 4.1 - `actionType` <br/> 4.2 - payload : **data/value**   | Pass `actionType` + data/value for Reducer to manipulate Redux Store    |
